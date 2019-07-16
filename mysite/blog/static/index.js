//index.js
let btn = document.getElementsByClassName('avatar-small')[0],
    mask = document.getElementsByClassName('mask')[0],
    nav = document.getElementsByClassName('nav')[0];

btn.addEventListener('click', function () {
  mask.style.display = 'block';
  nav.style.left = 0;
}, false);

mask.addEventListener('click', function () {
  mask.style.display = 'none';
  nav.style.left = '-7rem';
}, false)