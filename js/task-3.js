const inputText = document.querySelector('#name-input');
const userName = document.querySelector('#name-output');

inputText.addEventListener('input', event => {
  if (inputText.value.trim() === '') {
    return (userName.textContent = 'Anonymous');
  } else {
    userName.textContent = event.currentTarget.value;
  }
});
