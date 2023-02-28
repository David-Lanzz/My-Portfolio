const hamburger = document.querySelector('#menu');
const disappear = document.querySelector('#disappear');
const rotateRight = document.querySelector('#rotate-right');
const rotateLeft = document.querySelector('#rotate-left');
const menuList = document.querySelector('#menuList');
const mainSection = document.querySelector('#main-section');
const logo = document.querySelector('#logo');
let activeMenu = false;
const form = document.querySelector('#form');
const email = document.querySelector('#email');
const emailError = document.querySelector('#emailError');
const inputname = document.querySelector('#name');
let firstCard = document.querySelector('#firstCard');
let secondCard = document.querySelector('#secondCard');
let thirdCard = document.querySelector('#thirdCard');
let fourthCard = document.querySelector('#fourthCard');
let aboutCard = document.querySelector('#aboutme');
let contactCard = document.querySelector('#contact');

const inputObj = {
  inputEmail: '',
  inputName: '',
};

form.addEventListener('click', (e) => {
  if (e.target.id === 'submit' && email.value !== email.value.toLowerCase()) {
    emailError.style.visibility = 'visible';
    e.preventDefault();
  } else if (e.target.id === 'submit' && email.value === email.value.toLowerCase()) {
    emailError.style.visibility = 'hidden';
    inputObj.inputEmail = email.value;
    inputObj.inputName = inputname.value;
    localStorage.clear();
    localStorage.setItem('object', JSON.stringify(inputObj));
  }
});

window.addEventListener('load', () => {
  let outputObj = '';
  outputObj = JSON.parse(localStorage.getItem('object'));
  if (inputname.value === '') {
    inputname.value = outputObj.inputName;
    email.value = outputObj.inputEmail;
  }
});

hamburger.addEventListener('click', () => {
  if (activeMenu === false) {
    menuList.style.top = '0';
    disappear.style.display = 'none';
    rotateRight.style.transform = 'rotate(45deg) translateX(20%) translateY(250%)';
    rotateLeft.style.transform = 'rotate(-45deg) translateX(-20%)';
    rotateRight.style.backgroundColor = '#fff';
    rotateLeft.style.backgroundColor = '#fff';
    rotateRight.style.borderColor = '#fff';
    rotateLeft.style.borderColor = '#fff';
    activeMenu = true;
    logo.style.color = '#fff';
    hamburger.style.backgroundColor = '#6070ff';
    mainSection.style.filter = 'blur(6px)';
    firstCard.style.filter = 'blur(6px)';
    secondCard.style.filter = 'blur(6px)';
    thirdCard.style.filter = 'blur(6px)';
    fourthCard.style.filter = 'blur(6px)';
    aboutCard.style.filter = 'blur(6px)';
    contactCard.style.filter = 'blur(6px)';
  } else {
    menuList.style.top = '-200vh';
    disappear.style.display = 'block';
    rotateRight.style.transform = 'rotate(0deg) translateX(0%) translateY(0%)';
    rotateLeft.style.transform = 'rotate(0deg) translateX(0%)';
    rotateRight.style.backgroundColor = '#6070ff';
    rotateLeft.style.backgroundColor = '#6070ff';
    rotateRight.style.borderColor = '#6070ff';
    rotateLeft.style.borderColor = '#6070ff';
    mainSection.style.filter = 'blur(0)';
    firstCard.style.filter = 'blur(0)';
    secondCard.style.filter = 'blur(0)';
    thirdCard.style.filter = 'blur(0)';
    fourthCard.style.filter = 'blur(0)';
    aboutCard.style.filter = 'blur(0)';
    contactCard.style.filter = 'blur(0)';
    logo.style.color = '#6070ff';
    activeMenu = false;
  }
});

menuList.addEventListener('click', (e) => {
  if (e.target.id === 'menuButton1' || e.target.id === 'menuButton2' || e.target.id === 'menuButton3') {
    menuList.style.top = '-200vh';
    disappear.style.display = 'block';
    rotateRight.style.transform = 'rotate(0deg) translateX(0%) translateY(0%)';
    rotateLeft.style.transform = 'rotate(0deg) translateX(0%)';
    rotateRight.style.backgroundColor = '#6070ff';
    rotateLeft.style.backgroundColor = '#6070ff';
    rotateRight.style.borderColor = '#6070ff';
    rotateLeft.style.borderColor = '#6070ff';
    mainSection.style.filter = 'blur(0)';
    firstCard.style.filter = 'blur(0)';
    secondCard.style.filter = 'blur(0)';
    thirdCard.style.filter = 'blur(0)';
    fourthCard.style.filter = 'blur(0)';
    aboutCard.style.filter = 'blur(0)';
    contactCard.style.filter = 'blur(0)';
    logo.style.color = '#6070ff';
    activeMenu = false;
  }
});

const works = document.querySelector('#works');
const projectCards = [
  {
    number: 1,
    id: 'firstCard',
    class: '"projects"',
    hero: 'tonic',
    name: 'Music Festival',
    description: `This capstone project is about a music festival in my country.
     I created it in honor of my favorite artiste, Wizkid.`,
    url: '"./images/mil.jpg"',
    technology: ['CANOPY', 'Front End Dev', '2015'],
    techClass: ['"canopy"', '"bed"', '"year"'],
    languages: ['html', 'css', 'javaScript'],
    languagesClass: ['html', 'css', 'js'],
    live: '"https://david-lanzz.github.io/My-First-Capstone/"',
    source: '"https://github.com/David-Lanzz/My-First-Capstone"',
    buttonId: 'firstBtn',
    popup: {
      header: 'MIL Music Festival',
      stack1: 'CANOPY',
      stack2: 'Front End Dev',
      stack3: '2015',
      url: "'url('./images/mil.jpg')'",
      description: `This capstone project is about a music festival in my country.
     I created it in honor of my favorite artiste, Wizkid. The project has many features including of performing artiste cards
     using javascript, speed and responsiveness on all devices and many more.To preview, use the live link below`,
    },
  }, {
    number: 2,
    id: 'secondCard',
    class: '"projects reverse"',
    hero: 'mps',
    name: 'ToDo List',
    description: `This project is containing a ToDo list which i used to sharpen my skills in
     JavaScript and also to learn how to use webpacks efficiently.`,
    url: '"./images/todo.jpg"',
    technology: ['TODO', 'Lead Developer', '2018'],
    techClass: ['"canopy"', '"bed"', '"year"'],
    languages: ['html', 'webpack', 'css', 'javaScript'],
    languagesClass: ['html', 'ruby', 'css', 'js'],
    live: '"https://david-lanzz.github.io/My-ToDo-List/dist/"',
    source: '"https://github.com/David-Lanzz/My-ToDo-List"',
    buttonId: 'secondBtn',
    popup: {
      description: `This project is containing a ToDo list which i used to sharpen my skills in
     JavaScript and also to learn how to use webpacks efficiently. The project consists of different features 
     including adding, editing, deleting and creating of tasks dynamically using javascript.Mtiple tasks can also be cleared at once.`,
      url: '"url("./images/todo.jpg")"',
      header: 'ToDo List',
      stack1: 'TODO',
      stack2: 'Lead Developer',
      stack3: '2018',
    },
  }, {
    number: 3,
    id: 'thirdCard',
    class: '"projects"',
    name: 'Facebook 360',
    hero: 'tonic',
    description: "Exploring the future of media in Facebook's first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.",
    url: '"./images/third.png"',
    technology: ['FACEBOOK', 'Full Stack Dev', '2015'],
    techClass: ['"canopy"', '"bed"', '"year"'],
    languages: ['html', 'Ruby', 'css', 'javaScript'],
    languagesClass: ['html', 'ruby', 'css', 'js'],
    live: '"https://google.com"',
    source: '"https://google.com"',
    buttonId: 'thirdBtn',
    popup: {
      url: '"url(./images/third.png")',
      header: 'Facebook 360',
      stack1: 'FACEBOOK',
      stack2: 'Full Stack Dev',
      stack3: '2015',
    },
  }, {
    number: 4,
    id: 'fourthCard',
    class: '"projects reverse"',
    name: 'Multi-post Stories',
    hero: 'mps',
    description: 'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',
    url: '"./images/fourth.png"',
    technology: ['FACEBOOK', 'Full Stack Dev', '2015'],
    techClass: ['"canopy"', '"bed"', '"year"'],
    languages: ['html', 'Ruby', 'css', 'javaScript'],
    languagesClass: ['html', 'ruby', 'css', 'js'],
    live: '"https://google.com"',
    source: '"https://google.com"',
    buttonId: 'fourthBtn',
    popup: {
      url: '"url(./images/fourth.png")',
      header: 'Multi-Post Stories',
      stack1: 'FACEBOOK',
      stack2: 'Full Stack Dev',
      stack3: '2015',
    },
  },
];
function createCards() {
  let techItems = '';
  let languages = '';
  if (techItems === '') {
    for (let item = 0; item < projectCards.length; item += 1) {
      if (languages === '') {
        for (let i = 0; i < projectCards[item].technology.length; i += 1) {
          techItems += `<li class=${projectCards[item].techClass[i]}>${projectCards[item].technology[i]}</li>`;
        }
        for (let i = 0; i < projectCards[item].languages.length; i += 1) {
          languages += `<ul class = 'popuplang-ul'><li class = ${projectCards[item].languagesClass[i]}>${projectCards[item].languages[i]}</li></ul>`;
        }
      }
      const projects = `<div class= ${projectCards[item].class}id=${projectCards[item].id}><img class = 'img' src = ${projectCards[item].url}alt = 'project image'></img><ul class = 'projectInfo'><li class =${projectCards[item].hero}><h3>${projectCards[item].name}</h3></li><li class = 'techstack'><div><ul>${techItems}</ul></div></li><p class= 'aboutProject'>${projectCards[item].description}</p><li class = 'lang'><ul>${languages}</ul><li class= 'view'><a href = #${projectCards[item].id} class = 'buttons' id=${projectCards[item].buttonId}> See Project</a></li></ul></div>`;
      techItems = '';
      languages = '';
      works.innerHTML += projects;
    }
  }
}
createCards();

const popupstack1 = document.querySelector('#popupstack1');
const popupstack2 = document.querySelector('#popupstack2');
const popupstack3 = document.querySelector('#popupstack3');
const popuplorem = document.querySelector('#popup-lorem');
const popupImg = document.querySelector('#popup-img');
const popup = document.querySelector('#popup');
const popuplang = document.querySelector('#popuplang');
const liveLink = document.querySelector('#livelink');
const sourcelink = document.querySelector('#sourcelink');
const xcontainer = document.querySelector('#xcontainer');
firstCard = document.querySelector('#firstCard');
secondCard = document.querySelector('#secondCard');
thirdCard = document.querySelector('#thirdCard');
fourthCard = document.querySelector('#fourthCard');
aboutCard = document.querySelector('#aboutme');
contactCard = document.querySelector('#contact');
works.addEventListener('click', (e) => {
  let buttonId = '';
  buttonId = e.target.id;
  popup.style.width = '90%';
  popup.style.height = '97vh';
  if (window.screen.width > 768) {
    popup.style.width = '800px';
    popup.style.height = '95vh';
    popup.style.marginLeft = '4%';
  }
  for (let i = 0; i < projectCards.length; i += 1) {
    if (buttonId === projectCards[i].buttonId) {
      xcontainer.innerHTML = `<h2 id="popup-header">${projectCards[i].popup.header}</h2>
      <a href="#${projectCards[i].id}">
          <p id="cancel-popup">X</p>
      </a>`;
      popup.style.top = 0;
      let languages = '';
      for (let j = 0; j < projectCards[i].languages.length; j += 1) {
        languages += `<li class = ${projectCards[i].languagesClass[j]}>${projectCards[i].languages[j]}</li>`;
      }
      popuplang.innerHTML = languages;
      popuplang.style.marginTop = '-1rem';
      popuplorem.textContent = projectCards[i].popup.description;
      popupstack1.textContent = projectCards[i].popup.stack1;
      popupstack2.textContent = projectCards[i].popup.stack2;
      popupstack3.textContent = projectCards[i].popup.stack3;
      popupImg.style.backgroundImage = `url(${projectCards[i].url})`;
      liveLink.innerHTML = `<a href=${projectCards[i].live} class="buttons">See live<img src=./images/Icon.png alt="github icon"></a>`;
      sourcelink.innerHTML = `<a href=${projectCards[i].source} class="buttons">See Source<img src="./images/Vector22.png"
   alt="github icon"></a>`;
      mainSection.style.filter = 'blur(6px)';
      firstCard.style.filter = 'blur(6px)';
      secondCard.style.filter = 'blur(6px)';
      thirdCard.style.filter = 'blur(6px)';
      fourthCard.style.filter = 'blur(6px)';
      aboutCard.style.filter = 'blur(6px)';
      contactCard.style.filter = 'blur(6px)';
    }
  }
  if (e.target.id === 'cancel-popup') {
    popup.style.top = '-100rem';
    popup.style.width = '10px';
    popup.style.height = '10px';
    mainSection.style.filter = 'blur(0)';
    firstCard.style.filter = 'blur(0)';
    secondCard.style.filter = 'blur(0)';
    thirdCard.style.filter = 'blur(0)';
    fourthCard.style.filter = 'blur(0)';
    aboutCard.style.filter = 'blur(0)';
    contactCard.style.filter = 'blur(0)';
  }
});
