let hours = 0,
  minutes = 0,
  seconds = 0,
  milisec = 0;
var updateTime = null;
let action = true;

function countTime() {
  milisec += 100;
  hours = Math.floor(milisec / 1000 / 60 / 60);
  minutes = Math.floor(milisec / 1000 / 60) % 60;
  seconds = Math.floor(milisec / 1000) % 60;
  document.getElementById("time-div").innerHTML = `${formatTime(
    hours
  )}:${formatTime(minutes)}:${formatTime(seconds)}`;
}

function onClickStartStop() {
  if (action == true) {
    updateTime = setInterval(countTime, 100);
    setButtonStop();
  } else if (action == false) {
    clearTimeout(updateTime);
    setButtonStart();
  }
}

function onClickResetStopWatch() {
  window.clearInterval(updateTime);
  updateTime = null;
  seconds = 0;
  minutes = 0;
  hours = 0;
  milisec = 0;
  document.getElementById("time-div").innerHTML = "00:00:00";
  document.getElementById("reset-time").style.display = "none";
  setButtonStart();
}
function setButtonStart() {
  action = true;
  document.getElementById("start-stop").innerHTML = "START";
  document.getElementById("start-stop").style.backgroundColor = "green";
}
function setButtonStop() {
  action = false;
  document.getElementById("start-stop").innerHTML = "STOP";
  document.getElementById("reset-time").style.display = "initial";
  document.getElementById("start-stop").style.backgroundColor = "red";
}
function formatTime(time) {
  if (time < 10) return `0${time}`;
  else return time;
}
