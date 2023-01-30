const hamburger = document.querySelector('#menu');
const disappear = document.querySelector('#disappear');
const rotateRight = document.querySelector('#rotate-right');
const rotateLeft = document.querySelector('#rotate-left');
const menuList = document.querySelector('#menuList');
const menuButtons = document.querySelectorAll('.menuButton');
let activeMenu = false;
hamburger.addEventListener('click', () => {
  if (activeMenu === false) {
    menuList.style.marginTop = '0';
    disappear.style.display = 'none';
    rotateRight.style.transform = 'rotate(45deg) translateX(20%) translateY(250%)';
    rotateLeft.style.transform = 'rotate(-45deg) translateX(-20%)';
    rotateRight.style.backgroundColor = '#fff';
    rotateLeft.style.backgroundColor = '#fff';
    rotateRight.style.borderColor = '#fff';
    rotateLeft.style.borderColor = '#fff';
    activeMenu = true;
  } else {
    menuList.style.marginTop = '-200vh';
    disappear.style.display = 'block';
    rotateRight.style.transform = 'rotate(0deg) translateX(0%) translateY(0%)';
    rotateLeft.style.transform = 'rotate(0deg) translateX(0%)';
    rotateRight.style.backgroundColor = '#6070ff';
    rotateLeft.style.backgroundColor = '#6070ff';
    rotateRight.style.borderColor = '#6070ff';
    rotateLeft.style.borderColor = '#6070ff';
    activeMenu = false;
  }
});
menuButtons.addEventListener('click', () => {
  menuList.style.marginTop = '-200vh';
  disappear.style.display = 'block';
  rotateRight.style.transform = 'rotate(0deg) translateX(0%) translateY(0%)';
  rotateLeft.style.transform = 'rotate(0deg) translateX(0%)';
  rotateRight.style.backgroundColor = '#6070ff';
  rotateLeft.style.backgroundColor = '#6070ff';
  rotateRight.style.borderColor = '#6070ff';
  rotateLeft.style.borderColor = '#6070ff';
  activeMenu = false;
});