// get a list of each character
// I have to track which index im on somehow, and i also have to check whether or not the user typed
// the right key. the current index im on should have a class of .current. If the user types the correct key,
// i move on to the next index, and the index i was just on gets a class of .correct. If the user types
// the wrong key, the index gets a class of incorrect, which it keeps until the correct key is typed.

var $practiceText = document.querySelectorAll('span');
var $popupContainer = document.querySelector('.popup-container');
var $accuracy = document.querySelector('.accuracy');
var $evaluation = document.querySelector('.evaluation');
var $tryAgainButton = document.querySelector('.popup-window button');

var indexCounter = 0;
var keyStrokeCounter = 0;

$practiceText[indexCounter].className = 'current';

function keyCheck(event) {
  var correctKey = $practiceText[indexCounter].textContent;
  if (event.key === correctKey) {
    $practiceText[indexCounter].className = 'correct';
    indexCounter++;
    if (indexCounter < $practiceText.length) {
      $practiceText[indexCounter].className = 'current';
    }
  } else {
    // $practiceText[indexCounter].textContent = event.key;
    // document.addEventListener('keyup', function (event) {
    //   $practiceText[indexCounter].textContent = correctKey;
    // });
    $practiceText[indexCounter].className = 'incorrect';
  }
  keyStrokeCounter++;
  if (indexCounter === $practiceText.length) {
    $popupContainer.className = 'popup-container';
    var accuracyScore = Math.round(($practiceText.length / keyStrokeCounter) * 100);
    $accuracy.textContent = 'Accuracy: ' + accuracyScore + '%';
    if (accuracyScore === 100) {
      $evaluation.textContent = 'Perfect!!!';
    } else if (accuracyScore > 90) {
      $evaluation.textContent = 'Great job!';
    } else if (accuracyScore > 75) {
      $evaluation.textContent = 'Good job.';
    } else {
      $evaluation.textContent = 'Keep practicing.';
    }
  }
}

function reset(event) {
  $popupContainer.className = 'popup-container hidden';
  indexCounter = 0;
  keyStrokeCounter = 0;
  for (var i = 0; i < $practiceText.length; i++) {
    $practiceText[i].className = '';
  }
  $practiceText[indexCounter].className = 'current';
}

document.addEventListener('keydown', keyCheck);

$tryAgainButton.addEventListener('click', reset);
