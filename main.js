let minutes = 00;
let seconds = 00;
let milliseconds = 00;
let appendMinutes = document.getElementById("minutes");
let appendSeconds = document.getElementById("seconds");
let appendMilliseconds = document.getElementById("milliseconds");
let buttonStart = document.querySelectorAll("a")[0];
let buttonStop = document.querySelectorAll("a")[1];
let buttonReset = document.querySelectorAll("a")[2];
let Interval;

function startTimer() {
    milliseconds++;
    if (milliseconds < 9) {
        appendMilliseconds.textContent = "0" + milliseconds;
    }

    if (milliseconds > 9) {
        appendMilliseconds.textContent = milliseconds;
    }

    if (milliseconds > 99) {
        console.log("seconds");
        seconds++;
        appendSeconds.textContent = "0" + seconds;
        milliseconds = 0;
        appendMilliseconds.textContent = "0" + 0;
    }

    if (seconds > 9) {
        appendSeconds.textContent = seconds;
    }

    if (seconds > 59) {
        minutes++;
        appendMinutes.textContent = "0" + minutes;
        seconds = 0;
        appendSeconds.textContent = "0" + 0;
    }

    if (minutes > 9) {
        appendMinutes.textContent = minutes;
    }
}

buttonStart.onclick = () => {
    clearInterval(Interval);
    Interval = setInterval(startTimer, 10);
}

buttonStop.onclick = () => {
    clearInterval(Interval);
}

buttonReset.onclick = () => {
    clearInterval(Interval);
    appendMinutes.textContent = "00";
    appendSeconds.textContent = "00";
    appendMilliseconds.textContent = "00";
}
