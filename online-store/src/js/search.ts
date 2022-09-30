import { Cards, LocalContent } from '../types/interfaces';
import { draw } from './product';

const searchInput = <HTMLInputElement>document.querySelector('.navigation-search-place');
const searchButton = <HTMLButtonElement>document.querySelector('.navigation-search-btn');

searchButton.addEventListener('click', () => {
    const checkSelectedJSON = <string>localStorage.getItem('checkSelected');
    const checkSelected: LocalContent = JSON.parse(checkSelectedJSON);
    const cardContainer = <HTMLElement>document.querySelector('.card-container');

    const searchResult: Cards[] = checkSelected.cards.filter((val) =>
        val.name.toLowerCase().includes(searchInput.value.toLowerCase())
    );

    if (searchInput.value.length === 0) {
        cardContainer.innerHTML = '';
        draw(checkSelected.cards);
    } else if (searchResult.length === 0) {
        cardContainer.innerHTML = "Sorry, but I didn't find anything :(";
    } else {
        cardContainer.innerHTML = '';
        draw(searchResult);
    }
});
