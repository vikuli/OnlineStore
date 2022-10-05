import { drawCard } from '../product/card.draw';
import { cards } from '../product/cards';

function sortByName() {
    const select = <HTMLSelectElement>document.getElementById('select');
    const cardContainer = <HTMLElement>document.querySelector('.card-container');
    select.addEventListener('change', () => {
        if (select.options[select.selectedIndex].value === 'Name (A-Z)') {
            const sortResult = cards.sort((a, b) => (a.name > b.name ? 1 : -1));
            cardContainer.innerHTML = '';
            drawCard(sortResult);
        }
        if (select.options[select.selectedIndex].value === 'Name (Z-A)') {
            const sortResult = cards.sort((a, b) => (a.name < b.name ? 1 : -1));
            cardContainer.innerHTML = '';
            drawCard(sortResult);
        }
    });
}
sortByName();
