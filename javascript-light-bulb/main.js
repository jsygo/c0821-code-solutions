// query the dom for both the container and the lightbulb
// add an a click event listener onto the lightbulb div
// add an event handler that:
//    checks if lightbulb is on or off
//        if off, change classes of both lightbulb and container to on
//        if on, turn both classes to off

var $container = document.querySelector('#container');
var $lightbulb = document.querySelector('#lightbulb');
var lightOn = false;

function lightSwitch(event) {
  if (lightOn) {
    $container.className = 'container-off';
    $lightbulb.className = 'bulb-off';
    lightOn = false;
  } else {
    $container.className = 'container-on';
    $lightbulb.className = 'bulb-on';
    lightOn = true;
  }
}

$lightbulb.addEventListener('click', lightSwitch);
