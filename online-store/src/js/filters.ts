import { Cards, LocalContent } from '../types/interfaces';
import { draw } from './product';

const addFilterButton = <HTMLElement>document.querySelector('.add-filter');

//By color

const checkboxWhite = <HTMLButtonElement>document.querySelector('.color-white');
const checkboxBlack = <HTMLButtonElement>document.querySelector('.color-black');
const checkboxWood = <HTMLButtonElement>document.querySelector('.<HTMLElement>color-wood');
let filterCheckWhite: boolean | string = false,
    filterCheckBlack: boolean | string = false,
    filterCheckWood: boolean | string = false;

checkboxWhite.addEventListener('click', () => {
    if (!filterCheckWhite) {
        filterCheckWhite = 'White';
        checkboxWhite.classList.add('color-active');
    } else {
        filterCheckWhite = false;
        checkboxWhite.classList.remove('color-active');
    }
});

checkboxBlack.addEventListener('click', () => {
    if (!filterCheckBlack) {
        filterCheckBlack = 'Black';
        checkboxBlack.classList.add('color-active');
    } else {
        filterCheckBlack = false;
        checkboxBlack.classList.remove('color-active');
    }
});

checkboxWood.addEventListener('click', () => {
    if (!filterCheckWood) {
        filterCheckWood = 'Wood';
        checkboxWood.classList.add('color-active');
    } else {
        filterCheckWood = false;
        checkboxWood.classList.remove('color-active');
    }
});

addFilterButton.addEventListener('click', () => {
    const checkSelectedJSON = <string>localStorage.getItem('checkSelected');
    const checkSelected: LocalContent = JSON.parse(checkSelectedJSON);

    //By price

    const priceRangeFrom = <HTMLInputElement>document.querySelector('.price-range-input1');
    const priceRangeTo = <HTMLInputElement>document.querySelector('.price-range-input2');

    let filterByMinPrice = checkSelected.cards.filter((val) => val.price >= +priceRangeFrom.value);
    filterByMinPrice = filterByMinPrice.filter((val) => val.price <= +priceRangeTo.value);

    //By length

    const lengthRangeFrom = <HTMLInputElement>document.querySelector('.length-range-input1');
    const lengthRangeTo = <HTMLInputElement>document.querySelector('.length-range-input2');

    filterByMinPrice = filterByMinPrice.filter((val) => val.length >= +lengthRangeFrom.value);
    filterByMinPrice = filterByMinPrice.filter((val) => val.length <= +lengthRangeTo.value);

    //By created for

    const checkboxOffice = <HTMLInputElement>document.querySelector('.form-check-input-office');
    const checkboxDinner = <HTMLInputElement>document.querySelector('.form-check-input-dinner');
    const checkboxDecorative = <HTMLInputElement>document.querySelector('.form-check-input-decorative');
    let filterOffice: Cards[] = [],
        filterDinner: Cards[] = [],
        filterDecorative: Cards[] = [];

    if (checkboxOffice.checked) {
        filterOffice = filterByMinPrice.filter((val) => val.createdFor === 'Office');
    }
    if (checkboxDinner.checked) {
        filterDinner = filterByMinPrice.filter((val) => val.createdFor === 'Dinner');
    }
    if (checkboxDecorative.checked) {
        filterDecorative = filterByMinPrice.filter((val) => val.createdFor === 'Decorative');
    }

    if (checkboxOffice.checked || checkboxDinner.checked || checkboxDecorative.checked) {
        filterByMinPrice = filterOffice.concat(filterDinner, filterDecorative);
    }

    //By shape

    const checkboxSquare = <HTMLInputElement>document.querySelector('.form-check-input-square');
    const checkboxRounded = <HTMLInputElement>document.querySelector('.form-check-input-rounded');
    let filterSquare: Cards[] = [],
        filterRounded: Cards[] = [];

    if (checkboxSquare.checked) {
        filterSquare = filterByMinPrice.filter((val) => val.shape === 'Square');
    }

    if (checkboxRounded.checked) {
        filterRounded = filterByMinPrice.filter((val) => val.shape === 'Rounded');
    }

    if (checkboxSquare.checked || checkboxRounded.checked) {
        filterByMinPrice = filterSquare.concat(filterRounded);
    }

    //By color

    let filterWhite: Cards[] = [],
        filterBlack: Cards[] = [],
        filterWood: Cards[] = [];

    if (filterCheckWhite === 'White') {
        filterWhite = filterByMinPrice.filter((val) => val.color === 'White');
    }

    if (filterCheckBlack === 'Black') {
        filterBlack = filterByMinPrice.filter((val) => val.color === 'Black');
    }

    if (filterCheckWood === 'Wood') {
        filterWood = filterByMinPrice.filter((val) => val.color === 'Wood');
    }

    if (filterCheckWhite || filterCheckBlack || filterCheckWood) {
        filterByMinPrice = filterWhite.concat(filterBlack, filterWood);
    }

    const cardContainer = <HTMLElement>document.querySelector('.card-container');

    if (filterByMinPrice.length === 0) {
        cardContainer.innerHTML = "Sorry, but I didn't find anything :(";
    } else {
        cardContainer.innerHTML = '';
        draw(filterByMinPrice);
    }

    checkSelected.cards = filterByMinPrice;
    checkSelected.priceRangeFrom = +priceRangeFrom.value;
    checkSelected.priceRangeTo = +priceRangeTo.value;
    checkSelected.lengthRangeFrom = +lengthRangeFrom.value;
    checkSelected.lengthRangeTo = +lengthRangeTo.value;
    checkSelected.checkboxOffice = checkboxOffice.checked;
    checkSelected.checkboxDinner = checkboxDinner.checked;
    checkSelected.checkboxDecorative = checkboxDecorative.checked;
    checkSelected.checkboxSquare = checkboxSquare.checked;
    checkSelected.checkboxRounded = checkboxRounded.checked;
    checkSelected.filterCheckWhite = filterCheckWhite;
    checkSelected.filterCheckBlack = filterCheckBlack;
    checkSelected.filterCheckWood = filterCheckWood;

    localStorage.setItem('checkSelected', JSON.stringify(checkSelected));
});
