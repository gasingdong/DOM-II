// Your code goes here
const btns = document.querySelectorAll('.btn');

btns.forEach(btn =>
  btn.addEventListener(
    'click',
    event => (event.target.style.backgroundColor = 'red')
  )
);
