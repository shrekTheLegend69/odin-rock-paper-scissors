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

//Make a function game, that will play 5 round game of rock, paper and scissors and keeps the score and report winner or loser at the end
function game()  {
    // Play single round game 5 times and keep a score inside
    let playerScore = 0;
    let computerScore = 0;
    for (i = 0; i < 5; i++) {
        // Get players input
        // Call singleRound function with player's and computer's choices
        const win = singleRound(playerInput(), getComputerChoice());
        // Keep score up to date
        if (win === true) {
            playerScore += 1;
        }
        else if (win === false) {
            computerScore += 1;
        }
        else {
            console.log("Draw!");
        }
        // Write score every round
        console.log(`Current score: Player ${playerScore}:${computerScore} Computer`);
        // Write who won in the end
    }
    if (playerScore > computerScore) {
        console.log(`Congrats, you won! Final score: ${playerScore}:${computerScore}`);
    }
    else if (playerScore === computerScore) {
        console.log(`Wow, it's a draw! Final score: ${playerScore}:${computerScore}`);
    }
    else {
        console.log(`You lose! Maybe try again? Final score ${playerScore}:${computerScore}`);
    }
}

// Gets players input
function playerInput() {
    // Get input from player, prompt again if input is invalid
    while (true) {
        let playerInput = prompt("Choose one: Rock, paper or scissors?!");
        // Make input lowercase to avoid problems after
        playerInput = playerInput.toLowerCase();
        // If invalid input, ask user for input again
        // If input is valid, return input
        if (playerInput === "rock" || playerInput === "paper" || playerInput === "scissors") {
            return playerInput;
        }
        else {
            continue;
        }
    }
}
