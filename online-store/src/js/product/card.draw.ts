import { Cards } from '../../types/interfaces';
import { cards } from './cards';

export function drawCard(cards: Cards[]) {
    const cardContainer = <HTMLElement>document.querySelector('.card-container');
    for (let i = 0; i < cards.length; i++) {
        const productCard = <HTMLElement>document.createElement('div');
        productCard.classList.add('product-card');
        productCard.innerHTML = `
            <img src=${cards[i].img} alt=${cards[i].name} class="product-image">
            <h6 class="product-name">${cards[i].name}</h6>
            <div class="product-price">${cards[i].price} $</div>
            <button class="add-to-cart">Add to cart</button>
        `;
        cardContainer.append(productCard);
    }
}
drawCard(cards);
