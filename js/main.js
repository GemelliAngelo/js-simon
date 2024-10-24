const gameTimeEl = document.getElementById("time");
const gameNumber1El = document.getElementById("number-1");
const gameNumber2El = document.getElementById("number-2");
const gameNumber3El = document.getElementById("number-3");
const gameNumber4El = document.getElementById("number-4");
const gameNumber5El = document.getElementById("number-5");

// * GENERO I NUMERI E LI STAMPO IN PAGINA
gameNumber1El.innerText = Math.floor(Math.random() * 100) + 1;
gameNumber2El.innerText = Math.floor(Math.random() * 100) + 1;
gameNumber3El.innerText = Math.floor(Math.random() * 100) + 1;
gameNumber4El.innerText = Math.floor(Math.random() * 100) + 1;
gameNumber5El.innerText = Math.floor(Math.random() * 100) + 1;
