// # DATI
const gameTimeEl = document.getElementById("time");
const gameNumber1El = document.getElementById("number-1");
const gameNumber2El = document.getElementById("number-2");
const gameNumber3El = document.getElementById("number-3");
const gameNumber4El = document.getElementById("number-4");
const gameNumber5El = document.getElementById("number-5");
const gameButtonEl = document.getElementById("game-button");
const gameResult = document.getElementById("result");
let seconds = 30;

// * FUNZIONE RANDOMICA
function random(min, max) {
  const randomNumber = Math.floor(Math.random() * max - min + 1) + 1;
  return randomNumber;
}

// * FUNZIONE SVUOTAMENTO
const emptyValue = () => {
  gameNumber1El.value = "";
  gameNumber2El.value = "";
  gameNumber3El.value = "";
  gameNumber4El.value = "";
  gameNumber5El.value = "";
};

// * FUNZIONE PER CONTROLLARE I DATI CON IL BOTTONE
const buttonVerify = () => {
  gameButtonEl.addEventListener("click", () => {
    userNumbers = [
      gameNumber1El.value,
      gameNumber2El.value,
      gameNumber3El.value,
      gameNumber4El.value,
      gameNumber5El.value,
    ];

    console.log(userNumbers);

    let numberCounter = 0;
    for (let i = 0; i < gameNumbers.length; i++) {
      if (gameNumbers.includes(userNumbers[i])) {
        numberCounter++;
      }
    }
    gameResult.innerText = `HAI INDOVINATO ${numberCounter} NUMERI`;
    emptyValue();
  });
};

// * GENERO I NUMERI E LI STAMPO IN PAGINA
gameNumber1El.value = random(1, 100);
gameNumber2El.value = random(1, 100);
gameNumber3El.value = random(1, 100);
gameNumber4El.value = random(1, 100);
gameNumber5El.value = random(1, 100);

// * SALVO I NUMERI GENERATI
const gameNumbers = [
  gameNumber1El.value,
  gameNumber2El.value,
  gameNumber3El.value,
  gameNumber4El.value,
  gameNumber5El.value,
];

console.log(gameNumbers);

let userNumbers = [];

// * GENERO FUNZIONE INPUT
const userInput = () => {
  // * ABILITO GLI INPUT
  gameNumber1El.removeAttribute("disabled");
  gameNumber2El.removeAttribute("disabled");
  gameNumber3El.removeAttribute("disabled");
  gameNumber4El.removeAttribute("disabled");
  gameNumber5El.removeAttribute("disabled");

  //  * SVUOTO GLI INPUT
  emptyValue();
};

// * GENERO IL COUNTDOWN
const countdown = () => {
  if (seconds <= 0) {
    gameTimeEl.innerText = "Tempo Scaduto!";
    userInput();
    clearInterval(countdownInterval);
    buttonVerify();
  } else gameTimeEl.innerText = seconds--;
};

// * SETTO L'INTERVALLO E AVVIO IL COUNTDOWN
countdown();
const countdownInterval = setInterval(countdown, 1000);
