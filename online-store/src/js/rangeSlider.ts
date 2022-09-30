import * as noUiSlider from 'nouislider';
import 'nouislider/dist/nouislider.css';
import * as TargetElement from 'nouislider';
//import { API } from 'nouislider';

//Price range

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

        priceRange.noUiSlider.on('update', function (values, handle) {
            priceRangeInputs[handle].value = Math.round(values[handle]);
        });

        const setRangeSlider = (i: number, value: number) => {
            const setArr = [null, null];
            setArr[i] = value;
            priceRange.noUiSlider.set(setArr);
        };

        priceRangeInputs.forEach((el, index) => {
            el.addEventListener('change', (e) => {
                setRangeSlider(index, e.currentTarget.value);
            });
        });
    }
}

//Length range

{
    const lengthRange: TargetElement.target = document.querySelector('.length-range-slider') as TargetElement.target;

    if (lengthRange) {
        noUiSlider.create(lengthRange, {
            start: [290, 2100],
            connect: true,
            step: 10,
            range: {
                min: [290],
                max: [2100],
            },
        });

        const lengthRangeInput1 = document.querySelector('.length-range-input1');
        const lengthRangeInput2 = document.querySelector('.length-range-input2');
        const lengthRangeInputs = [lengthRangeInput1, lengthRangeInput2];

        lengthRange.noUiSlider.on('update', function (values, handle) {
            lengthRangeInputs[handle].value = Math.round(values[handle]);
        });

        const setRangeSlider = (i, value) => {
            const setArr = [null, null];
            setArr[i] = value;
            lengthRange.noUiSlider.set(setArr);
        };

        lengthRangeInputs.forEach((el, index) => {
            el.addEventListener('change', (e) => {
                setRangeSlider(index, e.currentTarget.value);
            });
        });
    }
}
