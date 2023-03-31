function updateTime() {
  const now = new Date();

  const hours = now.getHours().toString().padStart(2, "0");
  const minutes = now.getMinutes().toString().padStart(2, "0");
  const seconds = now.getSeconds().toString().padStart(2, "0");

  document.querySelector(".hours").textContent = hours;
  document.querySelector(".minutes").textContent = minutes;
  document.querySelector(".seconds").textContent = seconds;

  const day = now.getDate().toString().padStart(2, "0");
  const month = (now.getMonth() + 1).toString().padStart(2, "0");
  const year = now.getFullYear();

  document.querySelector(".day").textContent = day;
  document.querySelector(".month").textContent = month;
  document.querySelector(".year").textContent = year;
}

function setClockSize(fontSize) {
  var clock = document.querySelector(".clock");
  clock.style.fontSize = fontSize + 0.01;
  document.querySelector(".time").style.fontSize = fontSize + 0.01;
}

function changeBackground() {
  var body = document.getElementsByTagName("body")[0];
  if (body.style.backgroundImage === 'url("tempel.jpg")') {
    body.style.backgroundImage = 'url("pilt.jpg")';
  } else {
    body.style.backgroundImage = 'url("tempel.jpg")';
  }
  function changeColor(color) {
    var clock = document.querySelector(".clock");
    clock.style.color = color;
  
}



setInterval(updateTime, 1000);