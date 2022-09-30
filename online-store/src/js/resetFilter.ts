import { LocalContent } from '../types/interfaces';
import { cards, addCart } from './product';
import { sort } from './sorting';

const resetFilter = <HTMLButtonElement>document.querySelector('.reset-filter');

resetFilter.addEventListener('click', () => {
    const checkSelectedJSON = <string>localStorage.getItem('checkSelected');
    const checkSelected: LocalContent = JSON.parse(checkSelectedJSON);

    const priceRangeFrom = <HTMLInputElement>document.querySelector('.price-range-input1');
    const priceRangeTo = <HTMLInputElement>document.querySelector('.price-range-input2');
    const lengthRangeFrom = <HTMLInputElement>document.querySelector('.length-range-input1');
    const lengthRangeTo = <HTMLInputElement>document.querySelector('.length-range-input2');
    const checkboxOffice = <HTMLInputElement>document.querySelector('.form-check-input-office');
    const checkboxDinner = <HTMLInputElement>document.querySelector('.form-check-input-dinner');
    const checkboxDecorative = <HTMLInputElement>document.querySelector('.form-check-input-decorative');
    const checkboxSquare = <HTMLInputElement>document.querySelector('.form-check-input-square');
    const checkboxRounded = <HTMLInputElement>document.querySelector('.form-check-input-rounded');
    const buttonPopular = <HTMLButtonElement>document.querySelector('.filter-by-popular');
    const checkboxWhite = <HTMLButtonElement>document.querySelector('.color-white');
    const checkboxBlack = <HTMLButtonElement>document.querySelector('.color-black');
    const checkboxWood = <HTMLButtonElement>document.querySelector('.color-wood');
    const priceRange = document.querySelector('.price-range-slider');
    const lengthRange = document.querySelector('.length-range-slider');

    checkSelected.checkboxDecorative = false;
    checkSelected.checkboxDinner = false;
    checkSelected.checkboxOffice = false;
    checkSelected.checkboxRounded = false;
    checkSelected.checkboxSquare = false;
    checkSelected.lengthRangeFrom = 290;
    checkSelected.lengthRangeTo = 2100;
    checkSelected.priceRangeFrom = 50;
    checkSelected.priceRangeTo = 1030;
    checkSelected.filterCheckBlack = false;
    checkSelected.filterCheckWhite = false;
    checkSelected.filterCheckWood = false;
    checkSelected.popularity = false;
    checkSelected.cards = cards;

    priceRangeFrom.value = '50';
    priceRangeTo.value = '1030';
    lengthRangeFrom.value = '290';
    lengthRangeTo.value = '2100';
    priceRange.noUiSlider.reset();
    lengthRange.noUiSlider.reset();
    checkboxOffice.checked = false;
    checkboxDinner.checked = false;
    checkboxDecorative.checked = false;
    checkboxSquare.checked = false;
    checkboxRounded.checked = false;
    buttonPopular.classList.remove('filter-by-popular-active');
    checkboxWhite.classList.remove('color-active');
    checkboxBlack.classList.remove('color-active');
    checkboxWood.classList.remove('color-active');
    localStorage.setItem('checkSelected', JSON.stringify(checkSelected));
    sort();
    addCart();
});
