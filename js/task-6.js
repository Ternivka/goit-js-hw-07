function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const btnCreate = document.querySelector('button[data-create]');
const btnDestroy = document.querySelector('button[data-destroy]');
const input = document.querySelector('input[type="number"]');
const div = document.querySelector('#boxes');

const btnCreateEl = btnCreate.addEventListener('click', createEl);
function createEl() {
  const value = Number(input.value);
  if (value >= 1 && value <= 100) {
    createBoxes(value);
  } else {
    return;
  }
}
function createBoxes(amount) {
  div.innerHTML = '';
  for (let i = 0; i < amount; i++) {
    const divEl = document.createElement('div');
    divEl.style.backgroundColor = getRandomHexColor();
    const size = 30 + i * 10;
    divEl.style.width = `${size}px`;
    divEl.style.height = `${size}px`;
    div.append(divEl);
  }
}
const btnDestroyEl = btnDestroy.addEventListener('click', destroyEl);
function destroyEl() {
  div.innerHTML = '';
}
