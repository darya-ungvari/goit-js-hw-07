
let currentValue = 0;

let counterValue = document.querySelector('#value');

const buttonIncrement = document.querySelector('button[data-action="increment"]');

const buttonDecrement = document.querySelector('button[data-action="decrement"]');

let incrementTargetClick = event => {
    currentValue += 1;
    counterValue.textContent = currentValue;
}

let decrementTargetClick = event => {
    currentValue -= 1;
    counterValue.textContent = currentValue;
}

buttonIncrement.addEventListener('click', incrementTargetClick);
buttonDecrement.addEventListener('click', decrementTargetClick);



