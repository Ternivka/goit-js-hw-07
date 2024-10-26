const form = document.querySelector('.login-form');

form.addEventListener('submit', formCheck);

function formCheck(event) {
  event.preventDefault();
  const allInputs = {};

  for (let input of form.elements) {
    if (input.name && input.value.trim() === '') {
      alert('All form fields must be filled in');
      return;
    } else if (input.name) {
      allInputs[input.name] = input.value.trim();
    }
  }

  console.log(allInputs);
  form.reset();
}
