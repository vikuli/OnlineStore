export interface Cards {
    img: string;
    name: string;
    price: number;
    length: number;
    createdFor: string;
    shape: string;
    color: string;
    popularity: number;
}

export interface LocalContent {
    cards: Cards[];
    selected: string;
    checkboxDecorative: boolean;
    checkboxDinner: boolean;
    checkboxOffice: boolean;
    checkboxRounded: boolean;
    checkboxSquare: boolean;
    lengthRangeFrom: number;
    lengthRangeTo: number;
    priceRangeFrom: number;
    priceRangeTo: number;
    filterCheckBlack: boolean | string;
    filterCheckWhite: boolean | string;
    filterCheckWood: boolean | string;
    popularity: boolean;
    counter: number;
    contentCart: string[];
}
