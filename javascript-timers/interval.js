var $countdown = document.querySelector('h1');
var countNumber = parseInt($countdown.textContent);

function countdown() {
  countNumber--;
  if (countNumber < 1) {
    clearInterval(intervalId);
    $countdown.textContent = '~Earth Beeeelooowww Us~';
  } else {
    $countdown.textContent = countNumber;
  }
}

var intervalId = setInterval(countdown, 1000);
