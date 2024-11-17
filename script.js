// script.js

// Initialize scores
let userScore = 0;
let computerScore = 0;

function playGame(userChoice) {
  const choices = ['rock', 'paper', 'scissors'];
  const computerChoice = choices[Math.floor(Math.random() * choices.length)];
  
  // Update choices
  document.getElementById('user-choice').textContent = `Your choice: ${userChoice}`;
  document.getElementById('computer-choice').textContent = `Computer's choice: ${computerChoice}`;
  
  let winner = '';

  // Determine winner
  if (userChoice === computerChoice) {
    winner = "It's a tie!";
  } else if (
    (userChoice === 'rock' && computerChoice === 'scissors') ||
    (userChoice === 'paper' && computerChoice === 'rock') ||
    (userChoice === 'scissors' && computerChoice === 'paper')
  ) {
    winner = 'You win!';
    userScore++;
  } else {
    winner = 'Computer wins!';
    computerScore++;
  }

  // Update scores
  document.getElementById('user-score').textContent = userScore;
  document.getElementById('computer-score').textContent = computerScore;

  // Display winner
  document.getElementById('winner').textContent = `Winner: ${winner}`;
}
