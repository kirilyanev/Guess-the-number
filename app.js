let randomNumber = Math.floor(Math.random() * 100);
const inputElement = document.querySelector('#input');
const guessesElement = document.querySelector('#guesses');
const winnerElement = document.querySelector('#win');
const errorElement = document.querySelector('#error');
const repeatElement = document.querySelector('#repeat');
const submitBtn = document.querySelector('#submit');
console.log(randomNumber);
submitBtn.addEventListener('click',checkGuess);
let guesses = [];

function checkGuess() {
    repeatElement.style.display = 'none';
    errorElement.style.display = 'none';

    let input = Number(inputElement.value);
    let symbol = '';

    if(input < 0 || input > 100) {
        errorElement.style.display = 'block';
        return;
    }

    if(guesses.includes(input)) {
        repeatElement.style.display = 'block';
        return;
    }
    if(randomNumber > input) {
        symbol = '↑';
    } else if (randomNumber < input) {
        symbol = '↓';
    } else if (randomNumber == input) {
        submitBtn.disabled = true;
        winnerElement.style.display = 'block';
        inputElement.value = '';
        return;
    }

    guesses.push(input,symbol);
    guessesElement.textContent = guesses.join(' ');
    inputElement.value = '';
}

function inputValidation(input) {
    
}