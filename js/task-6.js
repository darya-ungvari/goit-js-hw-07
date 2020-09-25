
const inputEl = document.querySelector('#validation-input');

inputEl.addEventListener('blur', onInputBlur);

const validLength = inputEl.getAttribute('data-length');

function onInputBlur(event) {
    if(event.currentTarget.value.length == validLength){
                inputEl.classList.add('valid');
                inputEl.classList.remove('invalid');
            } else {
                inputEl.classList.add('invalid');
                inputEl.classList.remove('valid');
            }
    console.log("input in blur");
};



