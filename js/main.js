const gameTimeEl = document.getElementById("time");
const gameNumber1El = document.getElementById("number-1");
const gameNumber2El = document.getElementById("number-2");
const gameNumber3El = document.getElementById("number-3");
const gameNumber4El = document.getElementById("number-4");
const gameNumber5El = document.getElementById("number-5");
let seconds = 30;

// * GENERO I NUMERI E LI STAMPO IN PAGINA
gameNumber1El.value = Math.floor(Math.random() * 99) + 1;
gameNumber2El.value = Math.floor(Math.random() * 99) + 1;
gameNumber3El.value = Math.floor(Math.random() * 99) + 1;
gameNumber4El.value = Math.floor(Math.random() * 99) + 1;
gameNumber5El.value = Math.floor(Math.random() * 99) + 1;

// * GENERO FUNZIONE INPUT
// const userInput = () => {};

// *GENERO IL COUNTDOWN
const countdown = () => {
  if (seconds <= 0) {
    gameTimeEl.innerText = "Tempo Scaduto!";
    clearInterval(countdownInterval);
    // userInput();
  } else gameTimeEl.innerText = seconds--;
};
countdown();

// * SETTO L'INTERVALLO
const countdownInterval = setInterval(countdown, 1000);
