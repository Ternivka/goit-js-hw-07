const categories = document.querySelector('#categories');
const items = document.querySelectorAll('.item');
// відсеб'ятина:)
const btn = document.createElement('button');

btn.type = 'button';
btn.textContent = 'Тик';
categories.append(btn);
btn.style.backgroundColor = 'white';
btn.style.color = 'black';
btn.style.border = '2px solid black';
btn.style.borderRadius = '10px';
btn.style.padding = '10px 20px';
btn.style.cursor = 'pointer';
btn.addEventListener('mouseover', () => {
  btn.style.backgroundColor = 'black';
  btn.style.color = 'white';
});

btn.addEventListener('mouseout', () => {
  btn.style.backgroundColor = 'white';
  btn.style.color = 'black';
});
btn.addEventListener('click', () => {
  console.clear();
  console.log(`Number of categories: ${items.length}`);
  [...items].forEach(item => {
    const titleEl = item.querySelector('h2');
    console.log(titleEl.textContent);
    const titleLength = item.querySelectorAll('li').length;
    console.log(titleLength);
  });
});
// відсеб'ятина:)

// console.log(`Number of categories: ${items.length}`);

// [...items].forEach(item => {
//   const titleEl = item.querySelector('h2');
//   console.log(titleEl.textContent);
//   const titleLength = item.querySelectorAll('li').length;
//   console.log(titleLength);
// });
