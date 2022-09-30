{
    const buttonShowFilter = <HTMLElement>document.querySelector('.button-show-filter');
    const filterPanel = <HTMLElement>document.querySelector('.filter');
    const body = <HTMLElement>document.querySelector('.body');
    const screen = <HTMLElement>document.querySelector('.screen');
    const applyFilter = <HTMLElement>document.querySelector('.add-filter');
    const resetFilter = <HTMLElement>document.querySelector('.reset-filter');
    const resetSettings = <HTMLElement>document.querySelector('.reset-settings');

    buttonShowFilter.addEventListener('click', () => {
        filterPanel.classList.toggle('filter-visible');
        body.classList.toggle('body-lock');
        screen.classList.toggle('screen-active');
    });

    screen.addEventListener('click', () => {
        filterPanel.classList.remove('filter-visible');
        body.classList.remove('body-lock');
        screen.classList.remove('screen-active');
    });

    applyFilter.addEventListener('click', () => {
        filterPanel.classList.remove('filter-visible');
        body.classList.remove('body-lock');
        screen.classList.remove('screen-active');
    });

    resetFilter.addEventListener('click', () => {
        filterPanel.classList.remove('filter-visible');
        body.classList.remove('body-lock');
        screen.classList.remove('screen-active');
    });

    resetSettings.addEventListener('click', () => {
        filterPanel.classList.remove('filter-visible');
        body.classList.remove('body-lock');
        screen.classList.remove('screen-active');
    });
}
