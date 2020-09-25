
const inputEl = document.querySelector('#font-size-control');

const textEl = document.querySelector('#text');

inputEl.addEventListener('change', changeFontSize);

function changeFontSize(e) {
    textEl.style.fontSize = e.currentTarget.value + 'px';
}


