const timerDisplay = document.getElementById("timer-display");
const startButton = document.getElementById("start-button");
const resetButton = document.getElementById("reset-button");

let minutes = 25;
let seconds = 0;
let isRunning = false;
let intervalId;

function startTimer() {
  if (!isRunning) {
    isRunning = true;
    startButton.innerText = "Pause";
    intervalId = setInterval(updateTimer, 1000);
  } else {
    clearInterval(intervalId);
    isRunning = false;
    startButton.innerText = "Resume";
  }
}

function resetTimer() {
  clearInterval(intervalId);
  isRunning = false;
  startButton.innerText = "Start";
  minutes = 25;
  seconds = 0;
  updateDisplay();
}

function updateTimer() {
  if (minutes === 0 && seconds === 0) {
    clearInterval(intervalId);
    isRunning = false;
    startButton.innerText = "Start";
    // Optionally, add an alert or notification when the timer completes.
    return;
  }
  if (seconds === 0) {
    minutes--;
    seconds = 59;
  } else {
    seconds--;
  }
  updateDisplay();
}

function updateDisplay() {
  const formattedMinutes = minutes.toString().padStart(2, "0");
  const formattedSeconds = seconds.toString().padStart(2, "0");
  timerDisplay.textContent = `${formattedMinutes}:${formattedSeconds}`;
}

startButton.addEventListener("click", startTimer);
resetButton.addEventListener("click", resetTimer);
updateDisplay();
