// query for both buttons and assign them to variables
// query for the modal div and assign to variable
// add event listeners to each
// the open button event handler will remove the display:none; property from the .modal div
// the NO button event handler will add display: none;

var $openButton = document.querySelector('.open-button');
var $closeButton = document.querySelector('.close-button');
var $modal = document.querySelector('.modal');

function openModal(event) {
  $modal.className = 'modal';
}

function closeModal(event) {
  $modal.className = 'modal hidden';
}

$openButton.addEventListener('click', openModal);

$closeButton.addEventListener('click', closeModal);
