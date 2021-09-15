var imgUrls = [
  { url: 'images/001.png', imgId: '1' },
  { url: 'images/004.png', imgId: '2' },
  { url: 'images/007.png', imgId: '3' },
  { url: 'images/025.png', imgId: '4' },
  { url: 'images/039.png', imgId: '5' }
];

// DOM elements
var $carouselImg = document.querySelector('img');
var $tabContainer = document.querySelector('.tab-container');
var $tabList = document.querySelectorAll('.tab-container i');
var $leftArrow = document.querySelector('.fa-chevron-left');
var $rightArrow = document.querySelector('.fa-chevron-right');

// global variables
var currentImgId = 1;
var currentIntervalId = setInterval(carouselScroll, 3 * 1000);

// functions
function switchImg(imgId) {
  for (var i = 0; i < imgUrls.length; i++) {
    if (imgUrls[i].imgId === imgId) {
      $carouselImg.setAttribute('src', imgUrls[i].url);
    }
  }
}

function getNextImg() {
  if (currentImgId === imgUrls.length) {
    currentImgId = 1;
  } else {
    currentImgId++;
  }
  switchImg(currentImgId.toString());
}

function getPreviousImg() {
  if (currentImgId === 1) {
    currentImgId = imgUrls.length;
  } else {
    currentImgId--;
  }
  switchImg(currentImgId.toString());
}

function highlightCurrentTab(imgId) {
  for (var i = 0; i < $tabList.length; i++) {
    if ($tabList[i].getAttribute('data-img-id') === imgId) {
      $tabList[i].setAttribute('class', 'fas fa-circle');
    } else {
      $tabList[i].setAttribute('class', 'far fa-circle');
    }
  }
}

function carouselScroll() {
  getNextImg();
  highlightCurrentTab(currentImgId.toString());
}
// event handlers

function tabClick(event) {
  if (!event.target.matches('i')) {
    return;
  }
  clearInterval(currentIntervalId);
  currentIntervalId = setInterval(carouselScroll, 3 * 1000);
  currentImgId = parseInt(event.target.getAttribute('data-img-id'));
  switchImg(currentImgId.toString());
  highlightCurrentTab(currentImgId.toString());
}

function arrowClickLeft(event) {
  clearInterval(currentIntervalId);
  currentIntervalId = setInterval(carouselScroll, 3 * 1000);
  getPreviousImg();
  highlightCurrentTab(currentImgId.toString());
}

function arrowClickRight(event) {
  clearInterval(currentIntervalId);
  currentIntervalId = setInterval(carouselScroll, 3 * 1000);
  getNextImg();
  highlightCurrentTab(currentImgId.toString());
}

// event listeners
$tabContainer.addEventListener('click', tabClick);
$leftArrow.addEventListener('click', arrowClickLeft);
$rightArrow.addEventListener('click', arrowClickRight);
