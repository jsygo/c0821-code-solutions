// data
// var imgUrls = [
//   { url: 'images/001.png', imgId: '1' },
//   { url: 'images/004.png', imgId: '2' },
//   { url: 'images/007.png', imgId: '3' },
//   { url: 'images/025.png', imgId: '4' },
//   { url: 'images/039.png', imgId: '5' }
// ];

var carouselData = {
  imgUrls: [
    { url: 'images/001.png', imgId: '1' },
    { url: 'images/004.png', imgId: '2' },
    { url: 'images/007.png', imgId: '3' },
    { url: 'images/025.png', imgId: '4' },
    { url: 'images/039.png', imgId: '5' }
  ],
  nextImgId: 6
};

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
  for (var i = 0; i < carouselData.imgUrls.length; i++) {
    if (carouselData.imgUrls[i].imgId === imgId) {
      $carouselImg.setAttribute('src', carouselData.imgUrls[i].url);
    }
  }
}

function getNextImg() {
  if (currentImgId === carouselData.imgUrls.length) {
    currentImgId = 1;
  } else {
    currentImgId++;
  }
  switchImg(currentImgId.toString());
}

function getPreviousImg() {
  if (currentImgId === 1) {
    currentImgId = carouselData.imgUrls.length;
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

function addImg(imgUrl) {
  var newImg = {};
  newImg.url = imgUrl;
  newImg.imgId = carouselData.nextImgId.toString();
  carouselData.imgUrls.push(newImg);

  // <i class="far fa-circle" data-img-id="carouselData.nextImgId"></i>

  var $tabIcon = document.createElement('i');
  $tabIcon.setAttribute('class', 'far fa-circle');
  $tabIcon.setAttribute('data-img-id', carouselData.nextImgId.toString());

  $tabContainer.append($tabIcon);

  $tabList = document.querySelectorAll('.tab-container i');

  carouselData.nextImgId++;
}

function removeImg(imgId) {
  for (var i = 0; i < carouselData.imgUrls.length; i++) {
    if (carouselData.imgUrls[i].imgId === imgId.toString()) {
      carouselData.imgUrls.splice(i, 1);
    }
    if ($tabList[i].getAttribute('data-img-id') === imgId.toString()) {
      $tabContainer.removeChild($tabList[i]);
    }
  }
  $tabList = document.querySelectorAll('.tab-container i');
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
