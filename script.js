const days = document.getElementById("Days");
const hours = document.getElementById("Hours");
const minutes = document.getElementById("Minutes");
const seconds = document.getElementById("Seconds");
function countdown() {
  const eveTime = new Date(2021, 11, 31);
  const currTime = new Date();
  const remTime = eveTime - currTime;
  let sec = Math.floor(remTime / 1000);
  let min = Math.floor(sec / 60);
  let hrs = Math.floor(min / 60);
  let day = Math.floor(hrs / 24);
  days.innerHTML = day;
  hours.innerHTML = hrs % 60;
  minutes.innerHTML = min % 60;
  seconds.innerHTML = sec % 60;

  setTimeout(countdown, 1000);
}
countdown();
