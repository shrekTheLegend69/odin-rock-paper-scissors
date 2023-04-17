// Make a function returning Rock, Paper or Scissors randomly
function getComputerChoice() {
    // Make a function randomly generating a number between 1 to 3
    const number = randomThree();
    // If number is 1, return rock
    if (number === 1) {
        return "Rock";
    }
    // If number is 2, return paper
    else if (number === 2) {
        return "Paper";
    }
    // If number is 3, return scissors
    else {
        return "Scissors";
    }
}

// Generates random whole int between 1 and 3 
function randomThree() {
    const randomThree = Math.floor(Math.random() * 3) + 1;
    return randomThree;
}

// Make a function that plays a single round of Rock, Paper and Scissors with two parameters - playerSelection, computerSelection
function singleRound(playerSelection, computerSelection) {
    // Compare playerSelection and computerSelection
    // Make playerSelection and computerSelection lower case to avoid problems when comparing
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    // Scissors beats paper
    if ((playerSelection === "scissors" && computerSelection === "paper") || (playerSelection === "paper" && computerSelection === "scissors")) {
        if (playerSelection === "scissors") {
            return true;
        }
        else {
            return false;
        }
    }
    // Paper beats Rock
    else if ((playerSelection === "paper" && computerSelection === "rock") || (playerSelection === "rock" && computerSelection === "paper")) {
        if (playerSelection === "paper") {
            return true;
        }
        else {
            return false;
        }
    }
    // Rock beats scissors
    else if ((playerSelection === "rock" && computerSelection === "scissors") || (playerSelection === "scissors" && computerSelection === "rock")) {
        if (playerSelection === "rock") {
            return true;
        }
        else {
            return false;
        }
    }
    // If same choice, return draw message
    else {
        return 0;
    }
    // If win, return win message
    // If lose, return lose message
}

// Checks if someone won 5 rounds and displays an according messsage
function checkWinner() {
    if (playerScore === 5) {
        score.textContent = `You won! Final score is ${playerScore}:${computerScore}!`;
        playerScore = 0;
        computerScore = 0;
    }
    else if (computerScore === 5) {
        score.textContent = `You lose! Final score is ${playerScore}:${computerScore}!`;
        playerScore = 0;
        computerScore = 0;
    }
}


// Track score globally
let computerScore = 0;
let playerScore = 0;

// Create p element to keep score inside
const scoreDiv = document.querySelector('#score');
const score = document.createElement('p');
scoreDiv.appendChild(score);

const rck = document.querySelector('#rock');
rck.addEventListener('click', function(e) {
    const victory = singleRound("rock", getComputerChoice());
    if (victory === true) playerScore += 1;
    else if (victory === false) computerScore += 1;
    score.textContent = `Curent Score is Player ${playerScore}:${computerScore} Computer`;
    checkWinner();
});

const ppr = document.querySelector('#paper');
ppr.addEventListener('click', function(e) {
    const victory = singleRound("paper", getComputerChoice());
    if (victory === true) playerScore += 1;
    else if (victory === false) computerScore += 1;
    score.textContent = `Curent Score is Player ${playerScore}:${computerScore} Computer`;
    checkWinner();
});

const scisrs = document.querySelector('#scissors');
scisrs.addEventListener('click', function(e) {
    const victory = singleRound("scissors", getComputerChoice());
    if (victory === true) playerScore += 1;
    else if (victory === false) computerScore += 1;
    score.textContent = `Curent Score is Player ${playerScore}:${computerScore} Computer`;
    checkWinner();
});

