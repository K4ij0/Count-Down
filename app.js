/*const startTiming = 20
let time = startTiming * 60

const count = document.getElementById("countdownTimer")

setInterval(updateTimer, 1000)

function updateTimer(){
    const minutes = Math.floor(time/60)
    let seconds = time % 60

    seconds = seconds < 10 ? '0' + seconds : seconds 
    count.innerHTML = `${minutes}:${seconds}`;

    time--


}*/

const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minsEl = document.getElementById("mins");
const secondsEl = document.getElementById("seconds");

const newYears = "15 January 2022";

function countdown() {
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();

    const totalSeconds = (newYearsDate - currentDate) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const mins = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    daysEl.innerHTML = days;
    hoursEl.innerHTML = formatTime(hours);
    minsEl.innerHTML = formatTime(mins);
    secondsEl.innerHTML = formatTime(seconds);
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

// initial call
countdown();

setInterval(countdown, 1000);

// SNOWFLAKES
function createHeart(){
    const heart = document.createElement
    ('div');
    heart.classList.add('heart')

    heart.style.left= Math.random(0,150) * 100 + 'vw';
    heart.style.animationDuration = Math.random() * 2 + 5 + 's';

    heart.innerText = ['❄️'];
    

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 10000);
}

setInterval(createHeart, 800);
