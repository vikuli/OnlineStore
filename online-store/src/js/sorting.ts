import { LocalContent } from '../types/interfaces';
import { draw } from './product';

const select = <HTMLSelectElement>document.querySelector('.sorting-method');

select.onchange = function () {
    sort();
};

export function sort() {
    const localContentJSON = <string>localStorage.getItem('checkSelected');
    const localContent: LocalContent = JSON.parse(localContentJSON);
    if (select.value === 'Name (A-Z)') {
        localContent.cards.sort((a, b) => (a.name > b.name ? 1 : -1));
    }

    if (select.value === 'Name (Z-A)') {
        localContent.cards.sort((a, b) => (a.name < b.name ? 1 : -1));
    }

    if (select.value === 'Price (Lowest)') {
        localContent.cards.sort((a, b) => a.price - b.price);
    }

    if (select.value === 'Price (Highest)') {
        localContent.cards.sort((a, b) => b.price - a.price);
    }
    localContent.selected = select.value;

    localStorage.setItem('checkSelected', JSON.stringify(localContent));
    const cardContainer = <HTMLElement>document.querySelector('.card-container');
    cardContainer.innerHTML = '';
    draw(localContent.cards);
}
