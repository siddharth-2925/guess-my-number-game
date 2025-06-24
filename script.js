'use strict';

//textContent and value is used in diff cases - value used only for input elements

let secretNumber = Math.trunc(Math.random() * 20) + 1; //random is inclusive of 0 and exlusive of 1.

let score = 20; // State variable that is required to go down by 1 for every wrong guess.

let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value); //input value is always returned as string.
  console.log(guess, typeof guess);
  if (!guess) {
    //Error message- no value. '!' negates the the falsy value here which is zero.
    // document.querySelector('.message').textContent = '⛔ No Value!';
    displayMessage('⛔ No Value!');
  }

  //  Equal Numbers
  else if (guess === secretNumber) {
    // document.querySelector('.message').textContent = '🎉 Correct Number!';
    displayMessage('🎉 Correct Number!');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  }

  // For wrong guess
  else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(score > secretNumber ? '📈 Too High!' : '📉 Too Low!');
      score--; //score reduces if there is a wrong guess
      document.querySelector('.score').textContent = score;
    } else {
      // displays when score hits zero.
      // document.querySelector('.message').textContent = '💥 You Lose!';
      displayMessage('💥 You Lose!');
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  //function for the Again button.
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
});
