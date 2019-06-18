// Your code goes here
function toggleClass(event, name) {
  event.target.classList.toggle(name);
}

const nav = document.querySelectorAll('nav a');
nav.forEach(link => {
  link.addEventListener('click', event => toggleClass(event, 'red-bg'));
});

const imgs = document.querySelectorAll('img');

imgs.forEach(img => {
  img.addEventListener('mouseenter', event => {
    toggleClass(event, 'black-border');
  });
  img.addEventListener('mouseleave', event => {
    toggleClass(event, 'black-border');
  });
});

const body = document.querySelector('body');
body.addEventListener('keydown', event => toggleClass(event, 'blue-bg'));
