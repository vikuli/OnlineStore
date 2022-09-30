import { LocalContent } from '../types/interfaces';

const counter = <HTMLElement>document.querySelector('.counter');
const cardContainer = <HTMLElement>document.querySelector('.card-container');

cardContainer.addEventListener('click', (e: MouseEvent) => {
    const checkSelectedJSON = <string>localStorage.getItem('checkSelected');
    const checkSelected: LocalContent = JSON.parse(checkSelectedJSON);
    let result: string[] = checkSelected.contentCart;
    const eTarget = <HTMLElement>e.target;

    if (eTarget.classList.contains('add-to-cart')) {
        const parent = <HTMLElement>eTarget.parentNode;
        const child = <HTMLElement>parent.childNodes[1];

        if (parent.classList.contains('card-in-cart')) {
            parent.classList.remove('card-in-cart');
            eTarget.innerHTML = 'Add to cart';
            counter.innerHTML = (+counter.innerHTML - 1).toString();
            result = result.filter((val: string) => val !== child.innerHTML);
        } else {
            if (+counter.innerHTML === 20) {
                alert('Sorry, but the cart is full!');
            } else {
                counter.innerHTML = (+counter.innerHTML + 1).toString();
                eTarget.innerHTML = 'Remove from cart';
                parent.classList.add('card-in-cart');
                result.push(child.innerHTML);
            }
        }
    }

    checkSelected.counter = +counter.innerHTML;
    checkSelected.contentCart = result;
    localStorage.setItem('checkSelected', JSON.stringify(checkSelected));
});
