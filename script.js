'use strict';
/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct Number🏆';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;
document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let high = 0;

const disp = function (message) {
  document.querySelector('.message').textContent = message;
};
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    disp('No number🤷‍♂️');
    // document.querySelector('.message').textContent = 'No number🤷‍♂️';
  } else if (guess == secretNumber) {
    // document.querySelector('.message').textContent = 'Correct Number🏆';
    disp('Correct Number🏆');
    document.querySelector('.number').textContent = secretNumber;

    score++;
    document.querySelector('.score').textContent = score;

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > high) {
      high = score;
      document.querySelector('.highscore').textContent = high;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      disp(guess > secretNumber ? 'Too High😲' : 'Too Low😶');
      // document.querySelector('.message').textContent =
      //   guess > secretNumber ? 'Too High😲' : 'Too Low😶';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      // document.querySelector('.message').textContent = 'You lost the game👀';
      disp('You lost the game👀');
      document.querySelector('.score').textContent = 0;
    }
  }
  // else if (guess > secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = 'Too High😲';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = 'You lost the game👀';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // } else if (guess < secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = 'Too Low😶';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = 'You lost the game👀';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }
});

document.querySelector('.again').addEventListener('click', function () {
  // document.querySelector('.message').textContent = 'Start guessing...';
  disp('Start guessing...');
  document.querySelector('.number').textContent = '?';
  score = 20;
  document.querySelector('.score').textContent = score;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.guess').value = '';
  secretNumber = Math.trunc(Math.random() * 20) + 1;
});
