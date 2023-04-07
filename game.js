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
        return "Winner, winner, chicken dinner!";
    }
    else {
        return "You lose, try again!";
    }
}
// Paper beats Rock
// Rock beats scissors
// If same choice, return draw message
// If win, return win message
// If lose, return lose message
}
