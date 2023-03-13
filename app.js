let randomNumber = Math.floor(Math.random() * 100);

const input = document.getElementById('input');
const submitBtn = document.getElementById('submit');

submitBtn.addEventListener('click', () => {
    console.log(input.value);
})
