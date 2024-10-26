function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const btn = document.querySelector('.change-color');
const body = document.querySelector('body');
const spanText = document.querySelector('.color');

const changeBackgroundColor = btn.addEventListener('click', changeColor);
function changeColor() {
  body.style.backgroundColor = getRandomHexColor();
  spanText.textContent = getRandomHexColor();
}
