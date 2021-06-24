// Завдання 1
// Необхідно реалізувати наступний функціонал як на відео 
// backgrounds, а саме:
// •	при кліку на текст колір появляється блок з кольорами 
// •	при кліку на текст зображення появляється блок з 
// зображеннями
// •	при кліку на самі блоки з кольорами змінюється колі фону
// •	при кліку на самі блоки з зображеннями змінюється 
// зображення фону
// •	послідовність чи я задаю колір фону а потім зображення 
// або навпаки не має значення
// ------------------------------------------------------------------------------------------
// colors.insertAdjacentHTML('beforeend', div)

let colors = document.querySelector('.colors');
let images = document.querySelector('.images');
let container = document.querySelector('.container')

colors.addEventListener('click', handler, true);

function handler (event) {
   if(event.type == 'click') {
      let div = document.createElement('div');
      div.innerHTML = `<div class='box red'></div>
      <div class='box blue'></div>
      <div class='box yellow'></div>
      <div class='box green'></div>
      <div class='box white'></div>
      <div class='box violet'></div>
      <div class='box black'></div>
      <div class='box purple'></div>`
      div.classList.add('colorBox') 
      container.appendChild(div);
   }
}

let red = document.querySelector('.red');
let blue = document.querySelector('.blue');
let yellow = document.querySelector('.yellow');
let green = document.querySelector('.green');
let white = document.querySelector('.white');
let violet = document.querySelector('.violet');
let black = document.querySelector('.black');
let purple = document.querySelector('.purple');

red.addEventListener('click', handler1, true);
blue.addEventListener('click', handler2, true); 
yellow.addEventListener('click', handler3, true); 
green.addEventListener('click', handler4, true); 
white.addEventListener('click', handler5, true); 
violet.addEventListener('click', handler6, true); 
black.addEventListener('click', handler7, true); 
purple.addEventListener('click', handler8, true); 
 
function handler1 (event) {
   if(event.type == 'click') {
      document.body.style.background = 'red'
   }
}

function handler2 (event) {
   if(event.type == 'click') {
      document.body.style.background = 'blue'
   }
}

function handler3 (event) {
   if(event.type == 'click') {
      document.body.style.background = 'yellow'
   }
}

function handler4 (event) {
   if(event.type == 'click') {
      document.body.style.background = 'green'
   }
}

function handler5 (event) {
   if(event.type == 'click') {
      document.body.style.background = 'white'
   }
}

function handler6 (event) {
   if(event.type == 'click') {
      document.body.style.background = 'violet'
   }
}

function handler7 (event) {
   if(event.type == 'click') {
      document.body.style.background = 'black'
   }
}

function handler8 (event) {
   if(event.type == 'click') {
      document.body.style.background = 'purple'
   }
}