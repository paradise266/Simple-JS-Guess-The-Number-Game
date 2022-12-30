'use strict';

// document.querySelector('.message')

document.querySelector('.check').addEventListener('click', checkAnswer);

document.querySelector('.again').addEventListener('click', resetGame);



let secret_number = Math.trunc(Math.random()*20) + 1;
let score = 20;


function checkAnswer() {
    console.log(document.querySelector('.guess').value);
    const guess = Number(document.querySelector('.guess').value);
    // guess will be returned as string first so you have to convert it
    // console.log(guess, typeof guess);

    if (!guess) {
        document.querySelector('.message').textContent = 'No number!';
    }
    else if (guess === secret_number) {
        document.querySelector('.message').textContent = "Correct number!";
        document.querySelector('body').style.backgroundColor = '#60b347'; // change background to green
        document.querySelector('.number').style.width = '30rem'; // make the number box wider
        document.querySelector('.number').textContent = secret_number; // change from ? to the correct number
    }
    else if (guess > secret_number) {
        if (score > 1) {
            document.querySelector('.message').textContent = "Number is too large";
            score--;
            document.querySelector('.score').textContent = score;
        }
        else {
            document.querySelector('.message').textContent = "You lost!";
            document.querySelector('.score').textContent = 0;
        }
    }
    else if (guess < secret_number) {
        if (score > 1) {
            document.querySelector('.message').textContent = "Number is too low";
            score--;
            document.querySelector('.score').textContent = score;
        }
        else {
            document.querySelector('.message').textContent = "You lost!";
            document.querySelector('.score').textContent = 0;
        }
    }
}

function resetGame() {
    document.querySelector('body').style.backgroundColor = '#222';
    score = 20;
    document.querySelector('.score').textContent = score;
    secret_number = Math.trunc(Math.random()*20) + 1;
    document.querySelector('.message').textContent = "Start guessing...";
    document.querySelector('.guess').value = '';
    document.querySelector('.number').textContent = '?';
    document.querySelector('.number').style.width = '15rem';
}

