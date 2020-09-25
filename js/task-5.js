
const inputElement = document.querySelector('#name-input')

const spanEl = document.querySelector('#name-output')

let spanChangeClick = event => {
    event.currentTarget.value !== `` ? 
    spanEl.textContent = event.currentTarget.value :
    spanEl.textContent = `незнакомец`;
}

inputElement.addEventListener('input', spanChangeClick);