import { Cards, CheckSelected } from '../types/interfaces';
import { draw } from './product';

const buttonPopular = <HTMLElement>document.querySelector('.filter-by-popular');
let popularityLocal: boolean;

buttonPopular.addEventListener('click', () => {
    const checkSelectedJSON = <string>localStorage.getItem('checkSelected');
    const checkSelected: CheckSelected = JSON.parse(checkSelectedJSON);
    if (buttonPopular.classList.contains('filter-by-popular-active')) {
        buttonPopular.classList.remove('filter-by-popular-active');
        const cardContainer = <HTMLElement>document.querySelector('.card-container');
        popularityLocal = false;
        cardContainer.innerHTML = '';
        draw(checkSelected.cards);
        if (checkSelected.cards.length === 0) {
            cardContainer.innerHTML = "Sorry, but I didn't find anything :(";
        }
        checkSelected.popularity = popularityLocal;
        localStorage.setItem('checkSelected', JSON.stringify(checkSelected));
    } else {
        buttonPopular.classList.add('filter-by-popular-active');
        const popularity: Cards[] = checkSelected.cards.filter((val) => val.popularity > 60);
        const cardContainer = <HTMLElement>document.querySelector('.card-container');
        popularityLocal = true;
        cardContainer.innerHTML = '';
        draw(popularity);
        if (popularity.length === 0) {
            cardContainer.innerHTML = "Sorry, but I didn't find anything :(";
        }
        checkSelected.cards = popularity;
        checkSelected.popularity = popularityLocal;
        localStorage.setItem('checkSelected', JSON.stringify(checkSelected));
    }
});
