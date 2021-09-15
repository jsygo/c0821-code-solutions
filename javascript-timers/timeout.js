var $heading = document.querySelector('h1');

function changeHeading() {
  $heading.textContent = 'Hello There';
}

setTimeout(changeHeading, 2 * 1000);
