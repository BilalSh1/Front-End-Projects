let hoursText = document.querySelector("#hours");
let minutesText = document.querySelector("#minutes");
let secondsText = document.querySelector("#seconds");


setInterval(() => {
    const currentTime = new Date();
    hoursText.textContent =  currentTime.getHours();
    minutesText.textContent =  currentTime.getMinutes();
    secondsText.textContent =  currentTime.getSeconds() > 9 ? currentTime.getSeconds() : '0' + currentTime.getSeconds();
}, 1000)
