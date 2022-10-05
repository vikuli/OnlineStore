import * as noUiSlider from 'nouislider';
import 'nouislider/dist/nouislider.css';
import * as TargetElement from 'nouislider';

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

        const lengthRangeInput1 = <HTMLInputElement>document.querySelector('.length-range-input1');
        const lengthRangeInput2 = <HTMLInputElement>document.querySelector('.length-range-input2');
        const lengthRangeInputs = [lengthRangeInput1, lengthRangeInput2];

        lengthRange.noUiSlider?.on('update', function (values, handle) {
            lengthRangeInputs[handle].value = String(Math.round(+values[handle]));
        });

        const setRangeSlider = (i: number, value: number) => {
            const setArr: number[] = new Array(2);
            setArr[i] = value;
            lengthRange.noUiSlider?.set(setArr);
        };

        lengthRangeInputs.forEach((el, index) => {
            el.addEventListener('change', (e) => {
                const currTarget = <HTMLInputElement>e.currentTarget;
                setRangeSlider(index, +currTarget.value);
            });
        });
    }
}
