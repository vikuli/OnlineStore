import { drawCard } from '../product/card.draw';
import { cards } from '../product/cards';

function search() {
    const searchInput = <HTMLInputElement>document.querySelector('.navigation-search-place');
    const cardContainer = <HTMLElement>document.querySelector('.card-container');
    searchInput.addEventListener('input', () => {
        const searchResult = cards.filter((el) => el.name.toLowerCase().includes(searchInput.value.toLowerCase()));
        if (searchResult.length === 0) {
            cardContainer.innerHTML = "Sorry, but I didn't find anything :(";
        } else {
            cardContainer.innerHTML = '';
            drawCard(searchResult);
        }
    });
}
search();
