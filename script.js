/* eslint-disable array-callback-return */

import {
  card1, card2, card3, card4, card5, card6, card7, card8,
} from './modules/class.js';

const disappear = document.querySelector('#disappear');
const rotateRight = document.querySelector('#rotate-right');
const rotateLeft = document.querySelector('#rotate-left');
const menuList = document.querySelector('#menuList');
let activeMenu = false;
const email = document.querySelector('#email');
const emailError = document.querySelector('#emailError');
const inputname = document.querySelector('#name');

const inputObj = {
  inputEmail: '',
  inputName: '',
};

window.addEventListener('load', () => {
  let outputObj = '';
  outputObj = JSON.parse(localStorage.getItem('object'));
  if (inputname.value === '') {
    inputname.value = outputObj.inputName;
    email.value = outputObj.inputEmail;
  }
});

const openMenu = () => {
  menuList.style.top = '0';
  disappear.style.display = 'none';
  rotateRight.style.transform = 'rotate(45deg) translateX(20%) translateY(250%)';
  rotateLeft.style.transform = 'rotate(-45deg) translateX(-20%)';
  rotateRight.style.backgroundColor = '#fff';
  rotateLeft.style.backgroundColor = '#fff';
  rotateRight.style.borderColor = '#fff';
  rotateLeft.style.borderColor = '#fff';
  activeMenu = true;
};
const closeMenu = () => {
  activeMenu = false;
  menuList.style.top = '-200vh';
  disappear.style.display = 'block';
  rotateRight.style.transform = 'rotate(0deg) translateX(0%) translateY(0%)';
  rotateLeft.style.transform = 'rotate(0deg) translateX(0%)';
  rotateRight.style.backgroundColor = '#6070ff';
  rotateLeft.style.backgroundColor = '#6070ff';
  rotateRight.style.borderColor = '#6070ff';
  rotateLeft.style.borderColor = '#6070ff';
};

menuList.addEventListener('click', (e) => {
  if (
    e.target.id === 'menuButton1'
    || e.target.id === 'menuButton2'
    || e.target.id === 'menuButton3'
  ) {
    closeMenu();
  }
});

const works = document.querySelector('#works');

const projectCards = [card1, card2, card3, card4, card5, card6, card7, card8];
projectCards.map((card, index) => {
  card.id = index + 1;
  card.buttonId = index + 1;
  card.hero = 'tonic';
  if (index % 2 === 0) {
    card.classes = 'projects';
  } else {
    card.classes = 'projects reverse';
  }
});

let defaultLoopValue = 4;

function createCards() {
  let techItems = '';
  let languages = '';
  if (techItems === '') {
    for (let item = 0; item < defaultLoopValue; item += 1) {
      if (languages === '') {
        for (let i = 0; i < projectCards[item].technology.length; i += 1) {
          techItems += `<li class=${projectCards[item].techClass[i]}>${projectCards[item].technology[i]}</li>`;
        }
        for (let i = 0; i < projectCards[item].languages.length; i += 1) {
          languages += `<ul class = 'popuplang-ul'><li class = "html">${projectCards[item].languages[i]}</li></ul>`;
        }
      }
      const projects = `<div class= "${projectCards[item].classes}" id=${projectCards[item].id}><img class = 'img' src = ${projectCards[item].url}alt = 'project image'></img><ul class = 'projectInfo'><li class =${projectCards[item].hero}><h3>${projectCards[item].name}</h3></li><li class = 'techstack'><div>
      <ul>${techItems}</ul></div></li><p class= 'aboutProject'>${projectCards[item].description}</p><li class = 'lang'>
      <ul>${languages}</ul><li class= 'view'><a href = #${projectCards[item].id} class = 'buttons project-buttons' id=${projectCards[item].buttonId}>
       See Project</a></li></ul></div>`;
      techItems = '';
      languages = '';
      works.innerHTML += projects;
    }
  }
}
createCards();

const displayPopup = (array, target) => {
  array.map((element) => {
    if (target.id.toString() === element.id.toString()) {
      document.querySelector('.popup').innerHTML = `
 <section class= "popup-container">
 <section class="window-popup">
 <ul class="popup-image">
 <li class='popup-header' id="xcontainer">
<h2 id="popup-header">${element.popup.header}</h2>
   <a href="#${element.id}">
       <p id="cancel-popup">X</p>
   </a>
 </li>
 <li class="popup-stack">
     <ul>
         <li class="canopy" id="popupstack1">${element.popup.stack1}</li>
         <li class="bed" id="popupstack2">${element.popup.stack2}</li>
         <li class="year" id="popupstack3">${element.popup.stack3}</li>
     </ul>
 </li>
 <img class="popup-img" id="popup-img" src="${element.popup.url}">

 </img>
</ul>

<ul class="popup-info">
    <li class="popupParagraph">
        <p id="popup-lorem">${element.popup.description}</p>
    </li>
    <li class="popuplang lang">
        <ul class="popuplang-ul popup-justify" id="popuplang">
${element.languages.map((language) => `<li class="html">${language}</li>`)}
        </ul>
        <ul class="popup-justify">
            <li class="popupBtn">
                <div id="livelink">
<a href=${
  element.live
} class="buttons">See live<img src=./images/Icon.png alt="github icon"></a>
                </div>
                <div id="sourcelink"> <a href=${
  element.source
} class="buttons">See Source<img src="./images/Vector22.png"
   alt="github icon"></a>
                </div>
            </li>
        </ul>
    </li>
</ul>
</section>
</section>
 `;
    }
  });
};

window.addEventListener('click', (e) => {
  const { target } = e;
  if (
    target.id === 'menu'
    || target.id === 'rotate-right'
    || target.id === 'rotate-left'
    || target.id === 'disappear'
  ) {
    if (activeMenu === false) {
      openMenu();
    } else if (activeMenu === true) {
      closeMenu();
    }
  }
  if (target.id === 'langs-dropdown' || target.id === 'langs') {
    document.querySelector('.plangsContainer').classList.toggle('move-away');
  } else if (target.id === 'framework-dropdown' || target.id === 'framework') {
    document.querySelector('.frameworkContainer').classList.toggle('move-away');
  }

  if (target.className.includes('project-buttons')) {
    displayPopup(projectCards, target);
    document.querySelector('.blur').classList.add('show-blur');
    document.querySelector('body').classList.add('no-overflow');
    if (window.screen.width < 700) {
      document.querySelector('.popup-container').classList.add('display-popup');
    } else {
      document
        .querySelector('.popup-container')
        .classList.add('display-popup-desktop');
    }
  }
  if (target.id === 'submit' && email.value !== email.value.toLowerCase()) {
    emailError.style.visibility = 'visible';
    e.preventDefault();
  } else if (
    target.id === 'submit'
    && email.value === email.value.toLowerCase()
  ) {
    emailError.style.visibility = 'hidden';
    inputObj.inputEmail = email.value;
    inputObj.inputName = inputname.value;
    localStorage.clear();
    localStorage.setItem('object', JSON.stringify(inputObj));
  }
  if (target.id === 'cancel-popup') {
    document
      .querySelector('.popup-container')
      .classList.remove('display-popup');
    document
      .querySelector('.popup-container')
      .classList.remove('display-popup-desktop');
    document.querySelector('.blur').classList.remove('show-blur');
    document.querySelector('body').classList.remove('no-overflow');
  }
  if (target.id === 'see-all') {
    e.preventDefault();
    works.innerHTML = '';
    e.target.innerHTML = 'See Less';
    defaultLoopValue = projectCards.length;
    createCards();
    e.target.style.display = 'none';
  }
});
