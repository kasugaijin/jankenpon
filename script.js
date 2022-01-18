let playerScore = 0;
let computerScore = 0;
let games = 0;

let result = document.getElementById('result');

let gameButton = document.getElementById('play-game');
gameButton.addEventListener('click', game)

function game() {

let choice = ["rock", "paper", "scissors"];
let computerSelection = choice[Math.floor(Math.random() * choice.length)];

let getPlayerChoice = prompt('Enter rock paper or scissors')

//make a function to house user prompt and then have a play button on the page, on click executes this function and nested playRound?


 function playRound (player, computer) {
    if (player == "paper" && computer == "rock") {
        result.textContent = "Paper beats " + computerSelection + ", you win!";
        playerScore ++;
        games ++;
    } else if (player == "rock" && computer == "paper") {
        result.textContent = "Paper beats " + getPlayerChoice + ", you lose!";
        computerScore ++;
        games ++;
    } else if (player == "rock" && computer == "rock") {
        alert("It\'s a tie! Play again!");
        //play again don't count game
    } else if (player == "paper" && computer == "paper") {
        alert("It\'s a tie! Play again!");
        //play again don't count game
    } else if (player == "paper" && computer == "scissors") {
        result.textContent = "Scissors beats " + getPlayerChoice + ", you lose!";
        computerScore ++;
        games ++;
    } else if (player == "scissors" && computer == "paper") {
        result.textContent = "Scissors beats " + computerSelection + ", you win!";
        playerScore ++;
        games ++;
    } else if (player == "scissors" && computer == "scissors") {
        alert("It\'s a tie! Play again!");
        //play again don't count game
    } else if (player == "rock" && computer == "scissors") {
        result.textContent = "Rock beats " + computerSelection + ", you win!";
        playerScore ++;
        games ++;
    } else if (player == "scissors" && computer == "rock") {
        result.textContent = "Rock beats " + getPlayerChoice + ", you lose!";
        computerScore ++;
        games ++;
    } else {
        alert("make sure you enter 'rock' 'paper' or 'scissors'!");
        //back to start
    }
 }

 playRound(getPlayerChoice, computerSelection);

 computerSelection = choice[Math.floor(Math.random() * choice.length)];
 getPlayerChoice = prompt('Enter rock paper or scissors');
 

//make a function to house user prompt and then have a play button on the page, on click executes this function and nested playRound?


 function playRound (player, computer) {
    if (player == "paper" && computer == "rock") {
        result.textContent = "Paper beats " + computerSelection + ", you win!";
        playerScore ++;
        games ++;
    } else if (player == "rock" && computer == "paper") {
        result.textContent = "Paper beats " + getPlayerChoice + ", you lose!";
        computerScore ++;
        games ++;
    } else if (player == "rock" && computer == "rock") {
        alert("It\'s a tie! Play again!");
        //play again don't count game
    } else if (player == "paper" && computer == "paper") {
        alert("It\'s a tie! Play again!");
        //play again don't count game
    } else if (player == "paper" && computer == "scissors") {
        result.textContent = "Scissors beats " + getPlayerChoice + ", you lose!";
        computerScore ++;
        games ++;
    } else if (player == "scissors" && computer == "paper") {
        result.textContent = "Scissors beats " + computerSelection + ", you win!";
        playerScore ++;
        games ++;
    } else if (player == "scissors" && computer == "scissors") {
        alert("It\'s a tie! Play again!");
        //play again don't count game
    } else if (player == "rock" && computer == "scissors") {
        result.textContent = "Rock beats " + computerSelection + ", you win!";
        playerScore ++;
        games ++;
    } else if (player == "scissors" && computer == "rock") {
        result.textContent = "Rock beats " + getPlayerChoice + ", you lose!";
        computerScore ++;
        games ++;
    } else {
        alert("make sure you enter 'rock' 'paper' or 'scissors'!");
        //back to start
    }
 }
 playRound(getPlayerChoice, computerSelection);

 computerSelection = choice[Math.floor(Math.random() * choice.length)];
 getPlayerChoice = prompt('Enter rock paper or scissors');
 

//make a function to house user prompt and then have a play button on the page, on click executes this function and nested playRound?


 function playRound (player, computer) {
    if (player == "paper" && computer == "rock") {
        result.textContent = "Paper beats " + computerSelection + ", you win!";
        playerScore ++;
        games ++;
    } else if (player == "rock" && computer == "paper") {
        result.textContent = "Paper beats " + getPlayerChoice + ", you lose!";
        computerScore ++;
        games ++;
    } else if (player == "rock" && computer == "rock") {
        alert("It\'s a tie! Play again!");
        games ++;
        //play again 
    } else if (player == "paper" && computer == "paper") {
        alert("It\'s a tie! Play again!");
        games ++;
        //play again don't count game
    } else if (player == "paper" && computer == "scissors") {
        result.textContent = "Scissors beats " + getPlayerChoice + ", you lose!";
        computerScore ++;
        games ++;
    } else if (player == "scissors" && computer == "paper") {
        result.textContent = "Scissors beats " + computerSelection + ", you win!";
        playerScore ++;
        games ++;
    } else if (player == "scissors" && computer == "scissors") {
        alert("It\'s a tie! Play again!");
        games ++;
        //play again don't count game
    } else if (player == "rock" && computer == "scissors") {
        result.textContent = "Rock beats " + computerSelection + ", you win!";
        playerScore ++;
        games ++;
    } else if (player == "scissors" && computer == "rock") {
        result.textContent = "Rock beats " + getPlayerChoice + ", you lose!";
        computerScore ++;
        games ++;
    } else {
        alert("make sure you enter 'rock' 'paper' or 'scissors'!");
        //back to start
    }
 }

 playRound(getPlayerChoice, computerSelection);

 let cmpScrDisplay = document.getElementById('computer-score');
 cmpScrDisplay.textContent = "Computer score: " + computerScore; 
 
 let gamesPlayed = document.getElementById('games-played');
 gamesPlayed.textContent = "Games played: " + games;
 
 let plyScrDisplay = document.getElementById("player-score");
 plyScrDisplay.textContent = "Your score: " + playerScore;

 result.textContent = "";
}
 

//let plyChDisplay = document.getElementById("player-choice");
//plyChDisplay.textContent = "Your choice: " + getPlayerChoice;



//let cmpChDisplay = document.getElementById('computer-choice')
//cmpChDisplay.textContent = "Computer choice: " + computerSelection;










