// Function to generate a random computer move
//after game is readed it automatically manage next move for the computer
function getComputerMove() {
    const moves = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * 3);
    return moves[randomIndex];
  }
  
  // Function to determine the winner
  //It deteremine draw
  //It determine Deafeat
  function determineWinner(playerMove, computerMove) {
    if (playerMove === computerMove) {
      return 'Its draw';
    } else if (
      (playerMove === 'rock' && computerMove === 'scissors') ||
      (playerMove === 'paper' && computerMove === 'rock') ||
      (playerMove === 'scissors' && computerMove === 'paper')
    ) {
      return 'You win!';
    } else {
      return 'Defeat!';
    }
  }
  
  // Function to update the move display
  //It look inside main container.
  function updateMoveDisplay(playerMove, computerMove, result) {
    const moveDisplay = document.querySelector('.move-display');
    moveDisplay.innerHTML = `
      <p>You chosed: ${playerMove}</p>
      <p>Computer chosed: ${computerMove}</p>
      
    `;
  }
  
  // Function to display the winner or defeat page
  function showResultPage(result) {
    const statusHead = document.getElementById('status-head');
    statusHead.innerText = result;
  }
  
  // Event listeners for game buttons
  document.getElementById('rock-button').addEventListener('click', function() {
    const playerMove = 'rock';
    const computerMove = getComputerMove();
    const result = determineWinner(playerMove, computerMove);
    updateMoveDisplay(playerMove, computerMove, result);
    showResultPage(result);
  });
  
  document.getElementById('paper-button').addEventListener('click', function() {
    const playerMove = 'paper';
    const computerMove = getComputerMove();
    const result = determineWinner(playerMove, computerMove);
    updateMoveDisplay(playerMove, computerMove, result);
    showResultPage(result);
  });
  
  document.getElementById('scissors-button').addEventListener('click', function() {
    const playerMove = 'scissors';
    const computerMove = getComputerMove();
    const result = determineWinner(playerMove, computerMove);
    updateMoveDisplay(playerMove, computerMove, result);
    showResultPage(result);
  });