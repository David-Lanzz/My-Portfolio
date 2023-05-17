const hamburger = document.querySelector('#menu');
const disappear = document.querySelector('#disappear');
const rotateRight = document.querySelector('#rotate-right');
const rotateLeft = document.querySelector('#rotate-left');
const menuList = document.querySelector('#menuList');
const mainSection = document.querySelector('#main-section');
const logo = document.querySelector('#logo');
let activeMenu = false;
const email = document.querySelector('#email');
const emailError = document.querySelector('#emailError');
const inputname = document.querySelector('#name');
const firstCard = document.querySelector('#firstCard');
const secondCard = document.querySelector('#secondCard');
const thirdCard = document.querySelector('#thirdCard');
const fourthCard = document.querySelector('#fourthCard');
const aboutCard = document.querySelector('#aboutme');
const contactCard = document.querySelector('#contact');

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

class Cards {
  constructor(
    name,
    description,
    url,
    technology,
    techClass,
    languages,
    live,
    source,
    popup,
  ) {
    this.name = name;
    this.description = description;
    this.url = url;
    this.technology = technology;
    this.techClass = techClass;
    this.languages = languages;
    this.live = live;
    this.source = source;
    this.popup = popup;
  }
}

const card1 = new Cards(
  'Music Festival',
  `This capstone project is about a music festival in my country.
I created it in honor of my favorite artiste, Wizkid.`,
  "'./images/mil.jpg'",
  ['CANOPY', 'Front End Dev', '2015'],
  ['"canopy"', '"bed"', '"year"'],
  ['HTML', 'CSS', 'JavaScript'],
  '"https://david-lanzz.github.io/My-First-Capstone/"',
  '"https://github.com/David-Lanzz/My-First-Capstone"',
  {
    header: 'MIL Music Festival',
    stack1: 'CANOPY',
    stack2: 'Front End Dev',
    stack3: '2023',
    url: './images/mil.jpg',
    description: `This capstone project is about a music festival in my country.
 I created it in honor of my favorite artiste, Wizkid. The project has many features including of performing artiste cards
 using javascript, speed and responsiveness on all devices and many more.To preview, use the live link below`,
  },
);
const card2 = new Cards(
  'ToDo List',
  `This project is containing a ToDo list which i used to sharpen my skills in
 JavaScript and also to learn how to use webpacks efficiently.`,
  '"./images/todo.jpg"',
  ['TODO', 'Lead Developer', '2018'],
  ['"canopy"', '"bed"', '"year"'],
  ['HTML', 'Webpack', 'CSS', 'JavaScript'],
  '"https://david-lanzz.github.io/My-ToDo-List/dist/"',
  '"https://github.com/David-Lanzz/My-ToDo-List"',
  {
    description: `This project is containing a ToDo list which i used to sharpen my skills in JavaScript and also to learn how to use webpacks efficiently. The project consists of different features
       including adding, editing, deleting and creating of tasks dynamically using javascript.Multiple tasks can also be cleared at once.`,
    url: './images/todo.jpg',
    header: 'ToDo List',
    stack1: 'TODO',
    stack2: 'Lead Developer',
    stack3: '2023',
  },
);
const card3 = new Cards(
  'Book Store',
  `This is a project which allows users add books to an API for other users to read and vice versa.
`,
  '"./images/bookstore.jpg"',
  ['TODO', 'Lead Developer', '2018'],
  ['"canopy"', '"bed"', '"year"'],
  ['HTML', 'React', 'CSS', 'JavaScript'],
  '"https://bookstore-pfc6.onrender.com/"',
  '"https://github.com/David-Lanzz/Bookstore/"',
  {
    description: `This is a project which allows users add books to an API for other users to read and vice versa.
  All books are displayed dynamically using Object Oriented programming`,
    url: './images/bookstore.jpg',
    header: 'Book Store CMS',
    stack1: 'BOOKS',
    stack2: 'Lead Developer',
    stack3: '2023',
  },
);
const card4 = new Cards(
  'COVID STATS',
  `This is a project which allows users have access to the data statistics of COVID cases per country.
`,
  '"./images/covid.jpg"',
  ['METRICS', 'Lead Developer', '2023'],
  ['"canopy"', '"bed"', '"year"'],
  ['HTML', 'React', 'CSS', 'JavaScript'],
  '"https://mapmetrics.onrender.com/"',
  '"https://github.com/David-Lanzz/map-metrics/"',
  {
    description: `With all due respect to lives lost during the COVID 19 pandemic,This project allows users zccross the globe have access to
  the data statistics of COVID cases per country. The project displays the names of countries and he states data of confirmed cases and deaths recorded.`,
    url: './images/covid.jpg',
    header: 'COVID 19 MAP METRICS',
    stack1: 'METRICS',
    stack2: 'Lead Developer',
    stack3: '2023',
  },
);
const card5 = new Cards(
  'CALCULATOR',
  `This is a project which allows users perform basic calculations in mathematics while also displaying quotes given by an API.
`,
  '"./images/math_magicians.jpg"',
  ['MATHS', 'Lead Developer', '2023'],
  ['"canopy"', '"bed"', '"year"'],
  ['HTML', 'React', 'CSS', 'JavaScript'],
  '"https://github.com/David-Lanzz/math-magicians/"',
  '"https://mathmagicians-4omq.onrender.com/"',
  {
    description: 'Ever used a calculator with quotes before? I guess not...This is a project which allows users perform basic calculations in mathematics while also displaying quotes given by an API',
    url: './images/math_magicians.jpg',
    header: 'MATH MAGICIANS',
    stack1: 'MATHS',
    stack2: 'Lead Developer',
    stack3: '2023',
  },
);
const card6 = new Cards(
  'KONAGRILL',
  `This is a project which different delicacies offered by a beef restaurant.
`,
  '"./images/konagrill.jpg"',
  ['COMMERCE', 'Lead Developer', '2023'],
  ['"canopy"', '"bed"', '"year"'],
  ['HTML', 'Webpack', 'CSS', 'JavaScript'],
  '"https://david-lanzz.github.io/Kanban/dist/"',
  '"https://github.com/David-Lanzz/Kanban"',
  {
    description: `This is a project which different delicacies offered by a beef restaurant.
    All meals data are gotten from the company's API and displayed using Object Oriented programming.
    Engagements like comments and reactions are also allowed`,
    url: './images/konagrill.jpg',
    header: 'KONAGRILL MEALS',
    stack1: 'BEEF',
    stack2: 'Lead Developer',
    stack3: '2023',
  },
);
const card7 = new Cards(
  'LEADERBOARD',
  `This is a project which displays a user leaderboard in a particular game.Users can store scores and view scores of other users.
`,
  '"./images/leaderboard.jpg"',
  ['SCORES', 'Lead Developer', '2023'],
  ['"canopy"', '"bed"', '"year"'],
  ['HTML', 'Webpack', 'CSS', 'JavaScript'],
  '"https://david-lanzz.github.io/Leaderboard-Project/dist/"',
  '"https://github.com/David-Lanzz/Leaderboard-Project"',
  {
    description: 'This is a project which displays a user leaderboard in a particular game.Users can store scores and view scores of other users',
    url: './images/leaderboard.jpg',
    header: 'LEADERBOARD',
    stack1: 'SCORES',
    stack2: 'Lead Developer',
    stack3: '2023',
  },
);
const card8 = new Cards(
  'E-COMMERCE',
  `UNDER CONSTRUCTION!.
`,
  '"./images/e_commerce.jpg"',
  ['COMMERCE', 'Lead Developer', '2023'],
  ['"canopy"', '"bed"', '"year"'],
  ['CSS', 'React', 'Vite', 'JavaScript'],
  '"https://myecommerceapp-1nbf.onrender.com/"',
  '"https://github.com/David-Lanzz/ecommerceapp/"',
  {
    description: 'UNDER CONSTRUCTION!',
    url: './images/e_commerce.jpg',
    header: 'E-COMMERCE',
    stack1: 'SCORES',
    stack2: 'Lead Developer',
    stack3: '2023',
  },
);

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

let default_loop_value = 4;

function createCards() {
  let techItems = '';
  let languages = '';
  if (techItems === '') {
    for (let item = 0; item < default_loop_value; item += 1) {
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
  array.map((element, index) => {
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

displayAll = false

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
  if(target.id === "see-all"){
    e.preventDefault()
    works.innerHTML = ""
    if(!displayAll){
      e.target.innerHTML = "See Less"
      default_loop_value = projectCards.length
      createCards()
      displayAll = true
      e.target.style.display = "none"
    }
  }
});
