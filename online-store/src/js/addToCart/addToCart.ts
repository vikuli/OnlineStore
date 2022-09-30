function addToCart() {
    const cardContainer = <HTMLElement>document.querySelector('.card-container');
    const counter = <HTMLElement>document.querySelector('.counter');
    cardContainer.addEventListener('click', (e) => {
        const cartButton = <HTMLElement>e.target;
        if (cartButton.classList.contains('add-to-cart') && cartButton.innerHTML === 'Remove from cart') {
            cartButton.innerHTML = 'Add to cart';
            let counterNum = +counter.innerHTML;
            counterNum--;
            counter.innerHTML = String(counterNum);
        } else if (cartButton.classList.contains('add-to-cart') && cartButton.innerHTML === 'Add to cart') {
            cartButton.innerHTML = 'Remove from cart';
            let counterNum = +counter.innerHTML;
            counterNum++;
            counter.innerHTML = String(counterNum);
        }
    });
}
addToCart();
