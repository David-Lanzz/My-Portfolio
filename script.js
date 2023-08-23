/* eslint-disable array-callback-return */

import {
  card1,
  card2,
  card3,
  card4,
  card5,
  card6,
  card7,
  card8,
  card9,
} from "./modules/class.js";

const disappear = document.querySelector("#disappear");
const rotateRight = document.querySelector("#rotate-right");
const rotateLeft = document.querySelector("#rotate-left");
const menuList = document.querySelector("#menuList");
let activeMenu = false;
const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");
const inputname = document.querySelector("#name");
const tryme = document.querySelectorAll(".blurr");

const inputObj = {
  inputEmail: "",
  inputName: "",
};

window.addEventListener("load", () => {
  let outputObj = "";
  outputObj = JSON.parse(localStorage.getItem("object"));
  if (inputname.value === "") {
    inputname.value = outputObj.inputName;
    email.value = outputObj.inputEmail;
  }
});

const openMenu = () => {
  menuList.style.top = "0";
  disappear.style.display = "none";
  rotateRight.style.transform =
    "rotate(45deg) translateX(20%) translateY(250%)";
  rotateLeft.style.transform = "rotate(-45deg) translateX(-20%)";
  rotateRight.style.backgroundColor = "#fff";
  rotateLeft.style.backgroundColor = "#fff";
  rotateRight.style.borderColor = "#fff";
  rotateLeft.style.borderColor = "#fff";
  activeMenu = true;
};
const closeMenu = () => {
  activeMenu = false;
  menuList.style.top = "-200vh";
  disappear.style.display = "block";
  rotateRight.style.transform = "rotate(0deg) translateX(0%) translateY(0%)";
  rotateLeft.style.transform = "rotate(0deg) translateX(0%)";
  rotateRight.style.backgroundColor = "#6070ff";
  rotateLeft.style.backgroundColor = "#6070ff";
  rotateRight.style.borderColor = "#6070ff";
  rotateLeft.style.borderColor = "#6070ff";
};

menuList.addEventListener("click", (e) => {
  if (
    e.target.id === "menuButton1" ||
    e.target.id === "menuButton2" ||
    e.target.id === "menuButton3"
  ) {
    document.querySelector("body").classList.remove("no-overflow");
    for (let i = 0; i < tryme.length; i++) {
      tryme[i].classList.remove("show-blur");
    }
    closeMenu();
  }
});

const works = document.querySelector("#works");

const projectCards = [
  card9,
  card1,
  card3,
  card4,
  card6,
  card5,
  card2,
  card7,
  card8,
];
projectCards.map((card, index) => {
  card.id = index + 1;
  card.buttonId = index + 1;
  card.hero = "tonic";
  if (index % 2 === 0) {
    card.classes = "projects";
  } else {
    card.classes = "projects reverse";
  }
});

let defaultLoopValue = 4;

function createCards() {
  let techItems = "";
  let languages = "";
  if (techItems === "") {
    for (let item = 0; item < defaultLoopValue; item += 1) {
      if (languages === "") {
        for (let i = 0; i < projectCards[item].technology.length; i += 1) {
          techItems += `<li class=${projectCards[item].techClass[i]}>${projectCards[item].technology[i]}</li>`;
        }
        const screenWidth = window.innerWidth;
        if (screenWidth <= 768) {
          // Mobile screen size
          for (let i = 0; i <= 3; i += 1) {
            languages += `<ul class='popuplang-ul'><li class="html">${projectCards[item].languages[i]}</li></ul>`;
          }
        } else {
          // Desktop screen size
          for (let i = 0; i < projectCards[item].languages.length; i += 1) {
            languages += `<ul class='popuplang-ul'><li class="html">${projectCards[item].languages[i]}</li></ul>`;
          }
        }
      }
      const projects = `<div class= "${projectCards[item].classes}" id=${projectCards[item].id}><img class = 'img' src = ${projectCards[item].url}alt = 'project image'></img><ul class = 'projectInfo'><li class =${projectCards[item].hero}><h3>${projectCards[item].name}</h3></li><li class = 'techstack'><div>
      <ul>${techItems}</ul></div></li><p class='aboutProject'>${projectCards[item].description}</p><li class = 'lang'>
      <ul>${languages}</ul><li class= 'view'><a href = #${projectCards[item].id} class = 'buttons project-buttons' id=${projectCards[item].buttonId}>
       See Project</a></li></ul></div>`;
      techItems = "";
      languages = "";
      works.innerHTML += projects;
    }
  }
}
createCards();

const displayPopup = (array, target) => {
  array.map((element) => {
    if (target.id.toString() === element.id.toString()) {
      document.querySelector(".popup").innerHTML = `
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
        <p id="popup-lorem">${element.description}</p>
    </li>
    <li class="popuplang lang">
        <ul class="popuplang-ul popup-justify" id="popuplang">
${element.languages.map((language) => {
  return `<li class="html">${language}</li>`;
})}
        </ul>
        <div class="thinline"></div>
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

window.addEventListener("click", (e) => {
  const { target } = e;
  if (
    target.id === "menu" ||
    target.id === "rotate-right" ||
    target.id === "rotate-left" ||
    target.id === "disappear"
  ) {
    if (activeMenu === false) {
      openMenu();
      document.querySelector("body").classList.add("no-overflow");
      for (let i = 0; i < tryme.length; i++) {
        tryme[i].classList.add("show-blur");
      }
    } else if (activeMenu === true) {
      for (let i = 0; i < tryme.length; i++) {
        tryme[i].classList.remove("show-blur");
      }
      document.querySelector("body").classList.remove("no-overflow");
      closeMenu();
    }
  }
  if (target.id === "langs-dropdown" || target.id === "langs") {
    document.querySelector(".plangsContainer").classList.toggle("move-away");
    document.querySelector(".v").classList.toggle("v-active");
  } else if (target.id === "framework-dropdown" || target.id === "framework") {
    document.querySelector(".frameworkContainer").classList.toggle("move-away");
    document.querySelector(".frame-v").classList.toggle("v-active");
  } else if (target.id === "skills-dropdown" || target.id === "skills") {
    document.querySelector(".skillsContainer").classList.toggle("move-away");
    document.querySelector(".skill-v").classList.toggle("v-active");
  }
  if (
    target.id === "langs-dropdown" ||
    target.id === "langs" ||
    target.id === "framework-dropdown" ||
    target.id === "framework" ||
    target.id === "skills-dropdown" ||
    target.id === "skills"
  ) {
    if (
      document
        .querySelector(".plangsContainer")
        .classList.contains("move-away") === false ||
      document
        .querySelector(".frameworkContainer")
        .classList.contains("move-away") === false ||
      document
        .querySelector(".skillsContainer")
        .classList.contains("move-away") === false
    ) {
      document.querySelector(".lanzz").style.display = "none";
    } else if (
      document
        .querySelector(".plangsContainer")
        .classList.contains("move-away") === true ||
      document
        .querySelector(".frameworkContainer")
        .classList.contains("move-away") === true ||
      document
        .querySelector(".skillsContainer")
        .classList.contains("move-away") === true
    ) {
      document.querySelector(".lanzz").style.display = "block";
    }
  }

  if (target.className.includes("project-buttons")) {
    e.preventDefault();
    displayPopup(projectCards, target);
    document.querySelector(".blur").classList.add("show-blur");
    document.querySelector("body").classList.add("no-overflow");
    if (window.screen.width < 710) {
      document.querySelector(".popup-container").classList.add("display-popup");
    } else {
      document
        .querySelector(".popup-container")
        .classList.add("display-popup-desktop");
    }
  }
  if (target.id === "submit" && email.value !== email.value.toLowerCase()) {
    e.preventDefault();
    emailError.style.visibility = "visible";
    setTimeout(() => {
      emailError.style.visibility = "hidden";
    }, 2000);
  } else if (
    target.id === "submit" &&
    email.value === email.value.toLowerCase()
  ) {
    emailError.style.visibility = "hidden";
    inputObj.inputEmail = email.value;
    inputObj.inputName = inputname.value;
    localStorage.clear();
    localStorage.setItem("object", JSON.stringify(inputObj));
  }
  if (target.id === "cancel-popup") {
    e.preventDefault();
    document
      .querySelector(".popup-container")
      .classList.remove("display-popup");
    document
      .querySelector(".popup-container")
      .classList.remove("display-popup-desktop");
    document.querySelector(".blur").classList.remove("show-blur");
    document.querySelector("body").classList.remove("no-overflow");
  }
  if (target.id === "see-all") {
    e.preventDefault();
    works.innerHTML = "";
    defaultLoopValue = projectCards.length;
    createCards();
    e.target.style.display = "none";
  }
});
