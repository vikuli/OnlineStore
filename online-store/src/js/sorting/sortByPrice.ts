import { drawCard } from '../product/card.draw';
import { cards } from '../product/cards';

function sortByPrice() {
    const select = <HTMLSelectElement>document.getElementById('select');
    const cardContainer = <HTMLElement>document.querySelector('.card-container');
    select.addEventListener('change', () => {
        if (select.options[select.selectedIndex].value === 'Price (Lowest)') {
            const sortResult = cards.sort((a, b) => a.price - b.price);
            cardContainer.innerHTML = '';
            drawCard(sortResult);
        }
        if (select.options[select.selectedIndex].value === 'Price (Highest)') {
            const sortResult = cards.sort((a, b) => b.price - a.price);
            cardContainer.innerHTML = '';
            drawCard(sortResult);
        }
    });
}
sortByPrice();
