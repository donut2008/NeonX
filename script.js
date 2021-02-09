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

