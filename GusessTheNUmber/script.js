let randomNumber = parseInt(Math.random() * 100 + 1);
console.log(randomNumber);

const submit = document.querySelector("#submit");
const userInput = document.querySelector("#guessField");
const guessSlot = document.querySelector(".guesses");
const remaining = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");
const startOver = document.querySelector(".resultParas");

const p = document.createElement("p");

let preGuess = [];
let numGuess = 1;
let playGame = true;

if (playGame) {
  submit.addEventListener("click", (event) => {
  event.preventDefault();
    const guess = parseInt(userInput.value);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert("please Enter a Valid Number");
  } else if (guess < 0) {
    alert("please enter the number more than 1");
  } else if (guess > 100) {
    alert("please enter the number less than 100");
  } else {
    preGuess.push(guess);
    if (numGuess == 11) {
      displayGuess(guess);
      displayGuess(`Game over , The random number is${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}
function checkGuess(guess) {
  if (guess == randomNumber) {
    displayMessage(`you guested right`);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage("the Number is too low");
  } else if (guess > randomNumber) {
    displayMessage("the Number is too high");
  }
}
function displayGuess(guess) {
  userInput.value = "";
  guessSlot.innerHTML += `${guess} ,`;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess}`;
}

function displayMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  userInput.value = ''
  userInput.setAttribute('disabled','')
  p.classList.add('button')
  p.innerHTML = `<h2 class="newGame">Start new Game</h2>`
  startOver.appendChild(p);
  playGame = false;
  newGame()
}
function newGame() {
  const newGameButton = document.querySelector('.newGame');
  newGameButton.addEventListener('click',(e)=>{
    randomNumber = parseInt(Math.random() * 100 + 1);
    preGuess=[]
    numGuess = 1
    guessSlot.innerHTML='';
    remaining.innerHTML = `${11 - numGuess}`;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p)

    playGame = true;
  })
}
