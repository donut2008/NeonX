// add new todo when enter is pressed. code by emeraldvideos2
document.getElementById("myInput").addEventListener("keyup", (event) => {
  if (event.keyCode === 13) {
    event.preventDefault();
    newElement()
    }
});
// todo code.
// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);


//window code
// Make the DIV element draggable:
dragElement(document.getElementById("window"));

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    // if present, the header is where you move the DIV from:
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV:
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}


//window code
// Make the DIV element draggable:
dragElement(document.getElementById("windowexceed"));

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    // if present, the header is where you move the DIV from:
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV:
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

// Create a new list item when clicking on the "Add" button
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("Your To-Do can't be empty.");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}

//normal clock
function startTime() {
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  m = checkTime(m);
  document.getElementById('clock').innerHTML =
  h + ":" + m;
  var t = setTimeout(startTime, 500);
}
function checkTime(i) {
  if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
  return i;
}
//longclock
function longTime() {
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById('longclock').innerHTML =
  h + ":" + m + ":" + s;
  var t = setTimeout(longTime, 500);
}
function checkTime(i) {
  if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
  return i;
}
//date
function dateTime() {
  var dateObj = new Date();
  var month = dateObj.getUTCMonth() + 1; //months from 1-12
  var day = dateObj.getUTCDate();
  var year = dateObj.getUTCFullYear();
  document.getElementById('date').innerHTML =
  day + "/" + month + "/" + year;
}
function exceedapp(){
    document.getElementById("windowexceed").style.display = "block";
    document.getElementById("searchoverlay").style.display = "none";
    document.getElementById("calendaroverlay").style.display = "none";
    document.getElementById("launcher").style.display = "none";
}
function openapp(){
  document.getElementById("window").style.display = "block";
  document.getElementById("searchoverlay").style.display = "none";
  document.getElementById("calendaroverlay").style.display = "none";
  document.getElementById("launcher").style.display = "none";
}
function closeexceed(){
  document.getElementById("windowexceed").style.display = "none";
}
function exit(){
    document.getElementById("window").style.display = "none";
}
function on() {
    document.getElementById("launcher").style.display = "block";
    document.getElementById("closeoverlays").style.display = "block";
    document.getElementById('launcherbutton').setAttribute( "onClick", "off()" );
    document.getElementById("searchoverlay").style.display = "none";
    document.getElementById("calendaroverlay").style.display = "none";
  }
  function off() {
    document.getElementById("searchoverlay").style.display = "none";
    document.getElementById("launcher").style.display = "none";
    document.getElementById('launcherbutton').setAttribute( "onClick", "on()" );
    document.getElementById("calendaroverlay").style.display = "none";
    document.getElementById("closeoverlays").style.display = "none";
    document.getElementById('clockcontainer').setAttribute( "onClick", "calendaroverlay()" );
  }
  function searchoverlay() {
    document.getElementById('searchoverlay').style.display = "block";
    document.getElementById("closeoverlays").style.display = "block";
    document.getElementById("launcher").style.display = "none";
    document.getElementById("calendaroverlay").style.display = "none";
    }
  function calendaroverlay() {
    document.getElementById("calendaroverlay").style.display = "block";
    document.getElementById("closeoverlays").style.display = "block";
    document.getElementById('searchoverlay').style.display = "none";
    document.getElementById("launcher").style.display = "none";
    document.getElementById('clockcontainer').setAttribute( "onClick", "off()" );
  }



  //todo code improve!
  // Create a "close" button and append it to each list item
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

