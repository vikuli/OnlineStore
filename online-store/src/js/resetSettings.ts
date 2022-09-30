const resetButton = <HTMLButtonElement>document.querySelector('.reset-settings');

resetButton.addEventListener('click', () => {
    alert('To continue, refresh the page ;)');
    localStorage.clear();
});
