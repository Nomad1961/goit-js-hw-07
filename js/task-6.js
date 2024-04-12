const inputEl = document.querySelector('input[type="number"]');
const createBtnEl = document.querySelector('[data-create]');
const destroyBtnEl = document.querySelector('[data-destroy]');
const boxesEl = document.querySelector('#boxes');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
  boxesEl.innerHTML = '';
  let size = 30;

  for (let i = 0; i < amount; i += 1) {
    const boxEl = document.createElement('div');
    boxEl.style.width = `${size}px`;
    boxEl.style.height = `${size}px`;
    boxEl.style.backgroundColor = getRandomHexColor();
    boxesEl.appendChild(boxEl);
    size += 10;
  }
}

createBtnEl.addEventListener('click', () => {
  const inputValue = inputEl.value;

  if (inputValue >= 1 && inputValue <= 100) {
    createBoxes(inputValue);
    inputEl.value = '';
  }
});

destroyBtnEl.addEventListener('click', () => {
  boxesEl.innerHTML = '';
});
