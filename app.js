let randomNumber = Math.floor(Math.random() * 100);
let guesses = ['Guesses: '];

const form = document.querySelector('form');
const inputElement = document.querySelector('#input');
const guessesElement = document.querySelector('#guesses');
const errorElement = document.querySelector('#error');
const repeatElement = document.querySelector('#repeat');
const winnerElement = document.querySelector('#win');
const loseElement = document.querySelector('#lose');
const submitBtn = document.querySelector('.submit');
const restartBtn = document.querySelector('#restart');

form.addEventListener('submit', (e) => checkGuess(e));

function checkGuess(e) {
    e.preventDefault();
    repeatElement.style.display = 'none';
    errorElement.style.display = 'none';

    let input = Number(inputElement.value);
    let symbol = '';

    if(input <= 0 || input > 100) {
        errorElement.style.display = 'inline';
        return;
    }

    if(guesses.includes(input)) {
        repeatElement.style.display = 'inline';
        return;
    }

    if(randomNumber > input) {
        symbol = '↑';
    } else if (randomNumber < input) {
        symbol = '↓';
    } else if (randomNumber == input) {
        // WIN
        submitBtn.disabled = true;
        submitBtn.className = 'noHover';
        inputElement.disabled = true;
        winnerElement.style.display = 'inline-block';
        restartBtn.style.display = 'block';
        restartBtn.addEventListener('click',restart);
        inputElement.value = '';
        return;
    }

    guesses.push(input,symbol);
    guessesElement.textContent = guesses.join('    ');
    inputElement.value = '';

    // LOSE
    if (guesses.length == 21) {
        loseElement.style.display = 'inline-block';
        restartBtn.style.display = 'block';
        restartBtn.addEventListener('click',restart);
        submitBtn.disabled = true;
        submitBtn.className = 'noHover';
        inputElement.disabled = true;
    }
}

function restart() {
    location.reload();
}
