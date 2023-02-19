let randomNumber = Math.floor(Math.random() * 100);
const inputElement = document.querySelector('#input');
const guessesElement = document.querySelector('#guesses');
const winnerElement = document.querySelector('#win');
const submitBtn = document.querySelector('#submit');
console.log(randomNumber);
submitBtn.addEventListener('click',checkGuess);

function checkGuess() {
    let symbol = '';
    if(randomNumber > inputElement.value) {
        symbol = '↑';
    } else if (randomNumber < inputElement.value) {
        symbol = '↓';
    } else if (randomNumber == inputElement.value) {
        submitBtn.disabled = true;
        winnerElement.style.display = 'block';
        inputElement.value = '';
        return;
    }

    guessesElement.textContent += `${inputElement.value} ${symbol}`;
    inputElement.value = '';
}