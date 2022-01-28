//Coded by Kasugaijin Jan, 2022 for the Odin Project - version 2

let playerScore = 0
let computerScore = 0
let selection = ["rock", "paper", "scissors"];

let rockButton = document.getElementById('rock');
let paperButton = document.getElementById('paper');
let scissorsButton = document.getElementById('scissors');
let commentary = document.getElementById('commentary');
let playerScoreboard = document.getElementById('player-score');
let computerScoreboard = document.getElementById('computer-score');
let reset = document.getElementById('reset-game');

reset.addEventListener('click', resetGame);
rockButton.addEventListener('click', playGameRock);
paperButton.addEventListener('click', playGamePaper)
scissorsButton.addEventListener('click', playGameScissors)

function playGameRock() {
   let computerSelection = selection[Math.floor(Math.random() * selection.length)];

    if (computerSelection == "rock") {
        commentary.textContent = "It's a tie!"
    } else if (computerSelection == "paper") {
        commentary.textContent = "Paper beats rock, you lose!"
        computerScore ++; 
    } else {
        commentary.textContent = "Rock beats scissors, you win!"
        playerScore ++;
    }
    playerScoreboard.textContent = "You: " + playerScore;
    computerScoreboard.textContent = "Computer: " + computerScore;
    if (playerScore == 5 || computerScore == 5) {
        stopGame();
    }
}

function playGamePaper() {
    let computerSelection = selection[Math.floor(Math.random() * selection.length)];
    
    if (computerSelection == "paper") {
        commentary.textContent = "It's a tie!";
    } else if (computerSelection == "rock") {
        commentary.textContent = "Paper beats rock, you win!"
        playerScore ++;
    } else {
        commentary.textContent = "Scissors beats paper, you lose!"
        computerScore++;
    }
    playerScoreboard.textContent = "You: " + playerScore;
    computerScoreboard.textContent = "Computer: " + computerScore;
    if (playerScore == 5  || computerScore == 5) {
        stopGame();
    }
}

function playGameScissors() {
    let computerSelection = selection[Math.floor(Math.random() * selection.length)];

    if (computerSelection == "scissors") {
        commentary.textContent = "It's a tie!"; 
    } else if (computerSelection == "rock") {
        commentary.textContent = "Rock beats scissors, you lose!";
        computerScore ++;
    } else {
        commentary.textContent = "Scissors beats paper, you win!"
        playerScore ++;
    }
    playerScoreboard.textContent = "You: " + playerScore;
    computerScoreboard.textContent = "Computer: " + computerScore;

    if (playerScore == 5 || computerScore == 5) {
        stopGame();
}
}

function stopGame() { 
    if (computerScore > playerScore) {
        commentary.textContent = "The computer outdanced you!";
    }   else {
    commentary.textContent = "You outdanced the computer!";
    }
    playerScore = 0; 
    computerScore = 0; 
    playerScoreboard.textContent = "";
    computerScoreboard.textContent = "";
    rockButton.removeEventListener('click', playGameRock);
    paperButton.removeEventListener('click', playGamePaper);
    scissorsButton.removeEventListener('click', playGameScissors);
    reset.className = ('reset-focus');
    reset.id = ("");
}

function resetGame(){
    playerScore = 0; 
    computerScore = 0; 
    playerScoreboard.textContent = "";
    computerScoreboard.textContent = "";
    commentary.textContent = "";
    rockButton.addEventListener('click', playGameRock);
    paperButton.addEventListener('click', playGamePaper);
    scissorsButton.addEventListener('click', playGameScissors);
    reset.className = ('');
    reset.id = ('reset-game');
}

let music = document.getElementById('my-music');
let control = document.getElementById('music-div');

control.addEventListener('click', controlMusic);

function controlMusic() {
  return music.paused ? music.play () : music.pause()
}
