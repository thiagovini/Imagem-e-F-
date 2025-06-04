const diceNum = document.getElementById("diceNum");
const diceChar = document.getElementById("diceChar");
const resultNum = document.getElementById("resultNum");
const resultChar = document.getElementById("resultChar");

const chars = ["P", "H", "O", "L", "A", "M"];

diceNum.addEventListener("click", () => {
  const number = Math.floor(Math.random() * 6) + 1;

  let xRot = 0, yRot = 0;
  switch (number) {
    case 1: xRot = 0; yRot = 0; break;
    case 2: xRot = 0; yRot = -90; break;
    case 3: xRot = 0; yRot = 180; break;
    case 4: xRot = 0; yRot = 90; break;
    case 5: xRot = -90; yRot = 0; break;
    case 6: xRot = 90; yRot = 0; break;
  }

  const extraX = Math.floor(Math.random() * 4) * 360;
  const extraY = Math.floor(Math.random() * 4) * 360;

  diceNum.style.transform = `rotateX(${xRot + extraX}deg) rotateY(${yRot + extraY}deg)`;

});

diceChar.addEventListener("click", () => {
  const index = Math.floor(Math.random() * 6);
  const letter = chars[index];

  let xRot = 0, yRot = 0;
  switch (index) {
    case 0: xRot = 0; yRot = 0; break;
    case 1: xRot = 0; yRot = -90; break;
    case 2: xRot = 0; yRot = 180; break;
    case 3: xRot = 0; yRot = 90; break;
    case 4: xRot = -90; yRot = 0; break;
    case 5: xRot = 90; yRot = 0; break;
  }

  const extraX = Math.floor(Math.random() * 4) * 360;
  const extraY = Math.floor(Math.random() * 4) * 360;

  diceChar.style.transform = `rotateX(${xRot + extraX}deg) rotateY(${yRot + extraY}deg)`;

});

let timer;
let timeLeft = 10; // 3 minutes in seconds
let isRunning = false;

const timerDisplay = document.getElementById("timer");
const startBtn = document.getElementById("startBtn");
const pauseBtn = document.getElementById("pauseBtn");
const resetBtn = document.getElementById("resetBtn");

function updateDisplay() {
  const minutes = String(Math.floor(timeLeft / 60)).padStart(2, "0");
  const seconds = String(timeLeft % 60).padStart(2, "0");
  timerDisplay.textContent = `${minutes}:${seconds}`;
}

function startTimer() {
  if (isRunning) return;
  isRunning = true;
  timer = setInterval(() => {
    if (timeLeft > 0) {
      timeLeft--;
      updateDisplay();
    } else {
      clearInterval(timer);
      isRunning = false;
    }
  }, 1000);
}

function pauseTimer() {
  clearInterval(timer);
  isRunning = false;
}

function resetTimer() {
  clearInterval(timer);
  timeLeft = 180;
  isRunning = false;
  updateDisplay();
}

startBtn.addEventListener("click", startTimer);
pauseBtn.addEventListener("click", pauseTimer);
resetBtn.addEventListener("click", resetTimer);

// Atualiza o display inicial
updateDisplay();

