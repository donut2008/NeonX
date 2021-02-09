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