import { drawCard } from '../product/card.draw';
import { cards } from '../product/cards';

function sortByPopularity() {
    const select = <HTMLSelectElement>document.getElementById('select');
    const cardContainer = <HTMLElement>document.querySelector('.card-container');
    select.addEventListener('change', () => {
        if (select.options[select.selectedIndex].value === 'Popularity') {
            const sortResult = cards.sort((a, b) => a.popularity - b.popularity);
            cardContainer.innerHTML = '';
            drawCard(sortResult);
        }
    });
}
sortByPopularity();
