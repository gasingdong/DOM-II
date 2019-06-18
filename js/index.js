// Your code goes here

// Function for toggling classes from events
function toggleClass(event, name) {
  event.target.classList.toggle(name);
}

// Nav Links
const nav = document.querySelectorAll('nav a');
const navBar = document.querySelector('nav');
navBar.addEventListener('click', event => {
  event.preventDefault();
  toggleClass(event, 'red-bg');
});
nav.forEach(link => {
  link.addEventListener('click', event => {
    // Without this, the class will toggle twice due to the above listener on nav (result: no change)
    event.stopPropagation();
    // Prevent links from reloading
    event.preventDefault();
    toggleClass(event, 'red-bg');
  });
});

// Images
const imgs = document.querySelectorAll('img');
imgs.forEach(img => {
  img.addEventListener('mouseenter', event =>
    toggleClass(event, 'black-border')
  );
  img.addEventListener('mouseleave', event =>
    toggleClass(event, 'black-border')
  );
  img.addEventListener('dblclick', event => toggleClass(event, 'small'));
});

// View event listeners need to go on window
window.addEventListener('resize', event =>
  imgs.forEach(img => img.classList.toggle('small'))
);
window.addEventListener(
  'scroll',
  event => (document.querySelector('h1').style.color = 'blue')
);

// Body - Note: will apply to everything!
const body = document.querySelector('body');
body.addEventListener('keydown', event => toggleClass(event, 'blue-bg'));

// Header 2s
const headers = document.querySelectorAll('h2');
headers.forEach(header => {
  header.addEventListener('copy', event => toggleClass(event, 'red-txt'));
  header.addEventListener('dragstart', event =>
    alert(`You dragged ${event.target.textContent}`)
  );
});

// Paragraphs
const para = document.querySelectorAll('p');
para.forEach(p =>
  p.addEventListener('mousemove', event => toggleClass(event, 'blue-txt'))
);
