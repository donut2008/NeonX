var i = document.getElementById("menu").style;
if (document.addEventListener) {
  document.addEventListener('contextmenu', function(e) {
    var posX = e.clientX;
    var posY = e.clientY;
    menu(posX, posY);
    e.preventDefault();
  }, false);
  document.addEventListener('click', function(e) {
    i.opacity = "0";
    setTimeout(function() {
      i.visibility = "hidden";
    }, 501);
  }, false);
} else {
  document.attachEvent('oncontextmenu', function(e) {
    var posX = e.clientX;
    var posY = e.clientY;
    menu(posX, posY);
    e.preventDefault();
  });
  document.attachEvent('onclick', function(e) {
    i.opacity = "0";
    setTimeout(function() {
      i.visibility = "hidden";
    }, 501);
  });
}

function menu(x, y) {
  i.top = y + "px";
  i.left = x + "px";
  i.visibility = "visible";
  i.opacity = "1";
}

// change accent color
// Get the root element
var r = document.querySelector(':root');

// Create a function for getting a variable value
function myFunction_get() {
  // Get the styles (properties and values) for the root
  var rs = getComputedStyle(r);
  // Alert the value of the --blue variable
  alert("The value of --accentcolor is: " + rs.getPropertyValue('--accentcolor'));
}

// Create a function for setting a variable value
function myFunction_set() {
  // Set the value of variable --blue to another value (in this case "lightblue")
  r.style.setProperty('--accentcolor', 'red');
}