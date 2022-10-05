import * as noUiSlider from 'nouislider';
import 'nouislider/dist/nouislider.css';
import * as TargetElement from 'nouislider';

{
    const priceRange: TargetElement.target = document.querySelector('.price-range-slider') as TargetElement.target;

    if (priceRange) {
        noUiSlider.create(priceRange, {
            start: [50, 1030],
            connect: true,
            step: 1,
            range: {
                min: [50],
                max: [1030],
            },
        });

        const priceRangeInput1 = <HTMLInputElement>document.querySelector('.price-range-input1');
        const priceRangeInput2 = <HTMLInputElement>document.querySelector('.price-range-input2');
        const priceRangeInputs = [priceRangeInput1, priceRangeInput2];

        priceRange.noUiSlider?.on('update', function (values, handle) {
            priceRangeInputs[handle].value = String(Math.round(+values[handle]));
        });

        const setRangeSlider = (i: number, value: number) => {
            const setArr: number[] = new Array(2);
            setArr[i] = value;
            priceRange.noUiSlider?.set(setArr);
        };

        priceRangeInputs.forEach((el, index) => {
            el.addEventListener('change', (e) => {
                const currTarget = <HTMLInputElement>e.currentTarget;
                setRangeSlider(index, +currTarget.value);
            });
        });
    }
}
