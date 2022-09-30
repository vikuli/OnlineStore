import { Cards, LocalContent } from '../types/interfaces';

//import * as noUiSlider from 'nouislider';
//import * as TargetElement from 'nouislider';

export const cards = [
    {
        img: 'assets/product/dc1.JPG',
        name: 'Coffee table "Aurora"',
        price: 69,
        length: 500,
        createdFor: 'Decorative',
        shape: 'Rounded',
        color: 'Wood',
        popularity: 38,
    },
    {
        img: 'assets/product/dc2.JPG',
        name: 'Coffee table "Horizon"',
        price: 52,
        length: 650,
        createdFor: 'Decorative',
        shape: 'Square',
        color: 'Black',
        popularity: 76,
    },
    {
        img: 'assets/product/dc3.JPG',
        name: 'Book table "Kinfolk"',
        price: 59,
        length: 320,
        createdFor: 'Decorative',
        shape: 'Square',
        color: 'Wood',
        popularity: 81,
    },
    {
        img: 'assets/product/dc4.JPG',
        name: 'Coffee table "Jenga"',
        price: 79,
        length: 440,
        createdFor: 'Decorative',
        shape: 'Rounded',
        color: 'Wood',
        popularity: 12,
    },
    {
        img: 'assets/product/dc5.JPG',
        name: 'Loft table "Plate"',
        price: 52,
        length: 310,
        createdFor: 'Decorative',
        shape: 'Rounded',
        color: 'Black',
        popularity: 77,
    },
    {
        img: 'assets/product/dc6.JPG',
        name: 'Coffee table "Flip"',
        price: 63,
        length: 340,
        createdFor: 'Decorative',
        shape: 'Rounded',
        color: 'Wood',
        popularity: 26,
    },
    {
        img: 'assets/product/dc7.JPG',
        name: 'Bedside table "Alarm"',
        price: 50,
        length: 290,
        createdFor: 'Decorative',
        shape: 'Rounded',
        color: 'White',
        popularity: 55,
    },
    {
        img: 'assets/product/dc8.JPG',
        name: 'Coffee table "Renaissance"',
        price: 82,
        length: 630,
        createdFor: 'Decorative',
        shape: 'Rounded',
        color: 'Wood',
        popularity: 57,
    },
    {
        img: 'assets/product/dc9.JPG',
        name: 'Multifunctional table "Futurist"',
        price: 140,
        length: 800,
        createdFor: 'Decorative',
        shape: 'Square',
        color: 'Wood',
        popularity: 99,
    },
    {
        img: 'assets/product/dc10.JPG',
        name: 'Loft table "Oak"',
        price: 119,
        length: 690,
        createdFor: 'Decorative',
        shape: 'Rounded',
        color: 'Wood',
        popularity: 65,
    },
    {
        img: 'assets/product/dn1.JPG',
        name: 'Dining table "DinLine"',
        price: 380,
        length: 1200,
        createdFor: 'Dinner',
        shape: 'Square',
        color: 'Wood',
        popularity: 74,
    },
    {
        img: 'assets/product/dn2.JPG',
        name: 'Dining table "Simple"',
        price: 190,
        length: 780,
        createdFor: 'Dinner',
        shape: 'Square',
        color: 'Wood',
        popularity: 51,
    },
    {
        img: 'assets/product/dn3.JPG',
        name: 'Dining table "Village"',
        price: 210,
        length: 810,
        createdFor: 'Dinner',
        shape: 'Square',
        color: 'White',
        popularity: 78,
    },
    {
        img: 'assets/product/dn4.JPG',
        name: 'Dining table "Heavy"',
        price: 530,
        length: 1300,
        createdFor: 'Dinner',
        shape: 'Square',
        color: 'Wood',
        popularity: 36,
    },
    {
        img: 'assets/product/dn5.JPG',
        name: 'Dining table "Modern"',
        price: 590,
        length: 1500,
        createdFor: 'Dinner',
        shape: 'Square',
        color: 'White',
        popularity: 61,
    },
    {
        img: 'assets/product/dn6.JPG',
        name: 'Dining table "Retro"',
        price: 260,
        length: 960,
        createdFor: 'Dinner',
        shape: 'Square',
        color: 'Wood',
        popularity: 85,
    },
    {
        img: 'assets/product/dn7.JPG',
        name: 'Dining table "Strict"',
        price: 365,
        length: 1180,
        createdFor: 'Dinner',
        shape: 'Square',
        color: 'Wood',
        popularity: 17,
    },
    {
        img: 'assets/product/dn8.JPG',
        name: 'Dining table "Cozy"',
        price: 519,
        length: 1010,
        createdFor: 'Dinner',
        shape: 'Square',
        color: 'Wood',
        popularity: 93,
    },
    {
        img: 'assets/product/ot1.JPG',
        name: 'Office conference table "Simple"',
        price: 649,
        length: 1360,
        createdFor: 'Office',
        shape: 'Square',
        color: 'White',
        popularity: 34,
    },
    {
        img: 'assets/product/ot2.JPG',
        name: 'Desk with bedside table "Smart-1"',
        price: 485,
        length: 1090,
        createdFor: 'Office',
        shape: 'Square',
        color: 'White',
        popularity: 71,
    },
    {
        img: 'assets/product/ot3.JPG',
        name: 'Office table "Feature"',
        price: 529,
        length: 980,
        createdFor: 'Office',
        shape: 'Square',
        color: 'Wood',
        popularity: 22,
    },
    {
        img: 'assets/product/ot4.JPG',
        name: 'Office table "Minimalism"',
        price: 385,
        length: 800,
        createdFor: 'Office',
        shape: 'Square',
        color: 'Wood',
        popularity: 42,
    },
    {
        img: 'assets/product/ot5.JPG',
        name: 'Desk with bedside table "Smart-2"',
        price: 460,
        length: 960,
        createdFor: 'Office',
        shape: 'Square',
        color: 'White',
        popularity: 83,
    },
    {
        img: 'assets/product/ot6.JPG',
        name: 'Office conference table "Massive"',
        price: 1030,
        length: 2100,
        createdFor: 'Office',
        shape: 'Square',
        color: 'Wood',
        popularity: 69,
    },
    {
        img: 'assets/product/ot7.JPG',
        name: 'Desk with stands "Smart-3"',
        price: 395,
        length: 990,
        createdFor: 'Office',
        shape: 'Square',
        color: 'White',
        popularity: 13,
    },
    {
        img: 'assets/product/ot8.JPG',
        name: 'Desk with shelves "Graphic"',
        price: 415,
        length: 850,
        createdFor: 'Office',
        shape: 'Square',
        color: 'Wood',
        popularity: 31,
    },
    {
        img: 'assets/product/ot9.JPG',
        name: 'Office table "JustWood"',
        price: 310,
        length: 1100,
        createdFor: 'Office',
        shape: 'Square',
        color: 'Wood',
        popularity: 52,
    },
    {
        img: 'assets/product/ot10.JPG',
        name: 'Office table "Unusual"',
        price: 500,
        length: 980,
        createdFor: 'Office',
        shape: 'Square',
        color: 'Wood',
        popularity: 88,
    },
];

const localContentJSON = <string>localStorage.getItem('checkSelected');
const localContent: LocalContent = JSON.parse(localContentJSON);

if (!localContent) {
    const checkSelected: LocalContent = {
        cards: cards,
        selected: 'Сhoose sorting',
        checkboxDecorative: false,
        checkboxDinner: false,
        checkboxOffice: false,
        checkboxRounded: false,
        checkboxSquare: false,
        lengthRangeFrom: 290,
        lengthRangeTo: 2100,
        priceRangeFrom: 50,
        priceRangeTo: 1030,
        filterCheckBlack: false,
        filterCheckWhite: false,
        filterCheckWood: false,
        popularity: false,
        counter: 0,
        contentCart: [],
    };

    draw(checkSelected.cards);
    localStorage.setItem('checkSelected', JSON.stringify(checkSelected));
} else {
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
    const select = <HTMLSelectElement>document.querySelector('.sorting-method');
    const counter = <HTMLElement>document.querySelector('.counter');

    counter.innerHTML = localContent.counter.toString();
    select.value = localContent.selected;
    priceRangeFrom.value = localContent.priceRangeFrom.toString();
    priceRangeTo.value = localContent.priceRangeTo.toString();
    lengthRangeFrom.value = localContent.lengthRangeFrom.toString();
    lengthRangeTo.value = localContent.lengthRangeTo.toString();
    priceRange.noUiSlider.set([priceRangeFrom.value, priceRangeTo.value]);
    lengthRange.noUiSlider.set([lengthRangeFrom.value, lengthRangeTo.value]);
    checkboxOffice.checked = localContent.checkboxOffice;
    checkboxDinner.checked = localContent.checkboxDinner;
    checkboxDecorative.checked = localContent.checkboxDecorative;
    checkboxSquare.checked = localContent.checkboxSquare;
    checkboxRounded.checked = localContent.checkboxRounded;

    if (localContent.popularity) {
        buttonPopular.classList.add('filter-by-popular-active');
    } else {
        buttonPopular.classList.remove('filter-by-popular-active');
    }

    if (localContent.filterCheckWhite) {
        checkboxWhite.classList.add('color-active');
    } else {
        checkboxWhite.classList.remove('color-active');
    }

    if (localContent.filterCheckBlack) {
        checkboxBlack.classList.add('color-active');
    } else {
        checkboxBlack.classList.remove('color-active');
    }

    if (localContent.filterCheckWood) {
        checkboxWood.classList.add('color-active');
    } else {
        checkboxWood.classList.remove('color-active');
    }

    draw(localContent.cards);
    addCart();
}

export function draw(cards: Cards[]) {
    const cardContainer = <HTMLElement>document.querySelector('.card-container');
    cards.forEach((elem: Cards) => {
        const productCard = <HTMLDivElement>document.createElement('div');
        productCard.className = 'product-card';
        cardContainer.insertAdjacentElement('beforeend', productCard);

        const image = <HTMLImageElement>document.createElement('img');
        image.className = 'product-image';
        image.src = elem.img;

        productCard.insertAdjacentElement('beforeend', image);

        const productName = <HTMLHeadingElement>document.createElement('h6');
        productName.className = 'product-name';
        productName.innerHTML = elem.name;

        productCard.insertAdjacentElement('beforeend', productName);

        const productLength = <HTMLSpanElement>document.createElement('span');
        productLength.className = 'product-length';
        productLength.innerHTML = `Size: ${elem.length} mm`;

        productCard.insertAdjacentElement('beforeend', productLength);

        const productPrice = <HTMLDivElement>document.createElement('div');
        productPrice.className = 'product-price';
        productPrice.innerHTML = `${elem.price} $`;

        productCard.insertAdjacentElement('beforeend', productPrice);

        const buttonCart = <HTMLButtonElement>document.createElement('button');
        buttonCart.className = 'add-to-cart';
        buttonCart.innerHTML = 'Add to cart';

        productCard.insertAdjacentElement('beforeend', buttonCart);
    });
}

export function addCart() {
    const localContentJSON = <string>localStorage.getItem('checkSelected');
    const localContent: LocalContent = JSON.parse(localContentJSON);

    const productCard = document.querySelectorAll('.product-card');
    productCard.forEach((elem) => {
        for (let i = 0; i < localContent.contentCart.length; i++) {
            const child1 = <HTMLElement>elem.childNodes[1];
            const child2 = <HTMLElement>elem.childNodes[4];
            if (child1.innerHTML === localContent.contentCart[i]) {
                elem.classList.add('card-in-cart');
                child2.innerHTML = 'Remove from cart';
            }
        }
    });
}
