const hamburger = document.querySelector('#menu');
const disappear = document.querySelector('#disappear');
const rotateRight = document.querySelector('#rotate-right');
const rotateLeft = document.querySelector('#rotate-left');
const menuList = document.querySelector('#menuList');
const menuButton1 = document.querySelector('#menuButton1');
const menuButton2 = document.querySelector('#menuButton2');
const menuButton3 = document.querySelector('#menuButton3');
const mainSection = document.querySelector('#main-section');
const logo = document.querySelector('#logo');
const popup = document.querySelector('#popup');
const firstBtn = document.querySelector('#firstBtn');
let activeMenu = false;
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
    logo.style.color = '#6070ff';
    activeMenu = false;
  }
});

menuButton1.addEventListener('click', () => {
  menuList.style.top = '-200vh';
  disappear.style.display = 'block';
  rotateRight.style.transform = 'rotate(0deg) translateX(0%) translateY(0%)';
  rotateLeft.style.transform = 'rotate(0deg) translateX(0%)';
  rotateRight.style.backgroundColor = '#6070ff';
  rotateLeft.style.backgroundColor = '#6070ff';
  rotateRight.style.borderColor = '#6070ff';
  rotateLeft.style.borderColor = '#6070ff';
  mainSection.style.filter = 'blur(0)';
  logo.style.color = '#6070ff';
  activeMenu = false;
});

menuButton2.addEventListener('click', () => {
  menuList.style.top = '-200vh';
  disappear.style.display = 'block';
  rotateRight.style.transform = 'rotate(0deg) translateX(0%) translateY(0%)';
  rotateLeft.style.transform = 'rotate(0deg) translateX(0%)';
  rotateRight.style.backgroundColor = '#6070ff';
  rotateLeft.style.backgroundColor = '#6070ff';
  rotateRight.style.borderColor = '#6070ff';
  rotateLeft.style.borderColor = '#6070ff';
  mainSection.style.filter = 'blur(0)';
  logo.style.color = '#6070ff';
  activeMenu = false;
});
menuButton3.addEventListener('click', () => {
  menuList.style.top = '-200vh';
  disappear.style.display = 'block';
  rotateRight.style.transform = 'rotate(0deg) translateX(0%) translateY(0%)';
  rotateLeft.style.transform = 'rotate(0deg) translateX(0%)';
  rotateRight.style.backgroundColor = '#6070ff';
  rotateLeft.style.backgroundColor = '#6070ff';
  rotateRight.style.borderColor = '#6070ff';
  rotateLeft.style.borderColor = '#6070ff';
  mainSection.style.filter = 'blur(0)';
  logo.style.color = '#6070ff';
  activeMenu = false;
});

const popupHeader = document.querySelector('#popup-header');
const popupstack1 = document.querySelector('#popupstack1');
const popupstack2 = document.querySelector('#popupstack2');
const popupstack3 = document.querySelector('#popupstack3');
const popuplorem = document.querySelector('#popup-lorem');
const popupImg = document.querySelector('#popup-img');
const secondBtn = document.querySelector('#second-button');
const thirdBtn = document.querySelector('#third-button');
const fourthBtn = document.querySelector('#fourth-button');
const cancelPopup = document.querySelector('#cancel-popup');
const firstCard = document.querySelector('#firstCard');
const secondCard = document.querySelector('#secondCard');
const thirdCard = document.querySelector('#thirdCard');
const fourthCard = document.querySelector('#fourthCard');
const aboutCard = document.querySelector('#aboutme');
const contactCard = document.querySelector('#contact');
const card1 = {
  header: 'Tonic',
  stack1: 'CANOPY',
  stack2: 'Back End Dev',
  stack3: '2015',
  lorem: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,but also the leap into electronic typesetting, remaining essent",
};
const card2 = {
  header: 'Uber Navigation',
  stack1: 'UBER',
  stack2: 'Lead Developer',
  stack3: '2018',
  lorem: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,but also the leap into electronic typesetting, remaining essent",
};
const card3 = {
  header: 'Facebook 360',
  stack1: 'FACEBOOK',
  stack2: 'Full Stack Dev',
  stack3: '2015',
  lorem: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,but also the leap into electronic typesetting, remaining essent",
};
const card4 = {
  header: 'Multi-Post Stories',
  stack1: 'FACEBOOK',
  stack2: 'Full Stack Dev',
  stack3: '2015',
  lorem: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,but also the leap into electronic typesetting, remaining essent",
};


firstBtn.addEventListener('click',function(){
  if(screen.width < '768') {
    popup.style.width = '327px'
    popup.style.height = '95vh'
  }
  else {
    popup.style.width = '800px'
    popup.style.height = '95vh'
    popup.style.marginLeft = '4%'
  }
  popupImg.style.backgroundImage = "url('./images/new.png')";
  popup.style.bottom = '0';
  popupHeader.textContent = card1.header;
  popupstack1.textContent = card1.stack1;
  popupstack2.textContent = card1.stack2;
  popupstack3.textContent = card1.stack3;
  popuplorem.textContent = card1.lorem;
  mainSection.style.filter = 'blur(6px)';
  firstCard.style.filter = 'blur(6px)';
  secondCard.style.filter = 'blur(6px)';
  thirdCard.style.filter = 'blur(6px)';
  fourthCard.style.filter = 'blur(6px)';
  aboutCard.style.filter = 'blur(6px)';
  contactCard.style.filter = 'blur(6px)';
});

secondBtn.addEventListener('click', () => {
  if (window.screen.width < '768') {
    popup.style.width = '327px';
    popup.style.height = '95vh';
  } else {
    popup.style.width = '800px';
    popup.style.height = '95vh';
    popup.style.marginLeft = '4%';
  }
  popupImg.style.backgroundImage = "url('./images/second.png')";
  popup.style.bottom = '0';
  popupHeader.textContent = card2.header;
  popupstack1.textContent = card2.stack1;
  popupstack2.textContent = card2.stack2;
  popupstack3.textContent = card2.stack3;
  popuplorem.textContent = card2.lorem;
  mainSection.style.filter = 'blur(6px)';
  firstCard.style.filter = 'blur(6px)';
  secondCard.style.filter = 'blur(6px)';
  thirdCard.style.filter = 'blur(6px)';
  fourthCard.style.filter = 'blur(6px)';
  aboutCard.style.filter = 'blur(6px)';
  contactCard.style.filter = 'blur(6px)';
});
thirdBtn.addEventListener('click', () => {
  if (window.screen.width < '768') {
    popup.style.width = '327px';
    popup.style.height = '95vh';
  } else {
    popup.style.width = '800px';
    popup.style.height = '95vh';
    popup.style.marginLeft = '4%';
  }
  popupImg.style.backgroundImage = "url('./images/third.png');";
  popup.style.bottom = '0';
  popupHeader.textContent = card3.header;
  popupstack1.textContent = card3.stack1;
  popupstack2.textContent = card3.stack2;
  popupstack3.textContent = card3.stack3;
  popuplorem.textContent = card3.lorem;
  mainSection.style.filter = 'blur(6px)';
  firstCard.style.filter = 'blur(6px)';
  secondCard.style.filter = 'blur(6px)';
  thirdCard.style.filter = 'blur(6px)';
  fourthCard.style.filter = 'blur(6px)';
  aboutCard.style.filter = 'blur(6px)';
  contactCard.style.filter = 'blur(6px)';
});
fourthBtn.addEventListener('click', () => {
  if (window.screen.width < '768') {
    popup.style.width = '327px';
    popup.style.height = '99vh';
  } else {
    popup.style.width = '800px';
    popup.style.height = '95vh';
    popup.style.marginLeft = '4%';
  }
  popupImg.style.backgroundImage = "url('./images/fourth.png')";
  popup.style.bottom = '0';
  popupHeader.textContent = card4.header;
  popupHeader.style.fontSize = '1.5rem';
  popupHeader.style.lineHeight = '1.8rem';
  popupstack1.textContent = card4.stack1;
  popupstack2.textContent = card4.stack2;
  popupstack3.textContent = card4.stack3;
  popuplorem.textContent = card4.lorem;
  mainSection.style.filter = 'blur(6px)';
  firstCard.style.filter = 'blur(6px)';
  secondCard.style.filter = 'blur(6px)';
  thirdCard.style.filter = 'blur(6px)';
  fourthCard.style.filter = 'blur(6px)';
  aboutCard.style.filter = 'blur(6px)';
  contactCard.style.filter = 'blur(6px)';
});

cancelPopup.addEventListener('click', () => {
  popup.style.bottom = '200rem';
  popup.style.width = '10px';
  popup.style.height = '10px';
  mainSection.style.filter = 'blur(0)';
  firstCard.style.filter = 'blur(0)';
  secondCard.style.filter = 'blur(0)';
  thirdCard.style.filter = 'blur(0)';
  fourthCard.style.filter = 'blur(0)';
  aboutCard.style.filter = 'blur(0)';
  contactCard.style.filter = 'blur(0)';
});