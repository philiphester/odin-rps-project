// Odin Foundtations JavaScript Project: Rock, Paper, Scissors

// Get computer's choice
// Randomly return Rock, Paper, or Scissors and return answer
function getComputerChoice() {
    let computerChoice;
    // Get random number between 0 and 2
    let randomNum = Math.floor(Math.random() * 3);

    // Set computerchoice based on the random number set to variable randomNum
    if (randomNum === 0) {
        computerChoice = "Rock";
    } else if (randomNum === 1) {
        computerChoice = "Paper";
    } else if (randomNum === 2) {
        computerChoice = "Scissors";
    } else {
        console.log("An error occured");
    }
    return computerChoice;
}

// Get player's choice
// Prompt user to enter Rock, Paper, or Scissors, and return answer
function getHumanChoice() {
    let humanChoice = prompt("Please enter your choice (Rock, Paper, or Scissors): ");
    return humanChoice;
}

// Declare the players score variables
let computerScore = 0;
let humanScore = 0;

// Write logic to play single round
function playRound(humanChoice, computerChoice) {
    // Correct humanChoice so first letter is capitalized and remainder is lowercase
    humanChoice = humanChoice.slice(0,1).toUpperCase() + humanChoice.slice(1).toLowerCase();
    
    if (humanChoice == "Rock" && computerChoice == "Scissors") {
        console.log("Congrats, Rock beats Scissors");
    } else if (humanChoice == "Paper" && computerChoice == "Rock") {
        console.log("You win! Paper beats Rock.");
    } else if (humanChoice == "Scissors" && computerChoice == "Paper") {
        console.log("You win! Scissors beats Paper!");
    }

}


playRound(getHumanChoice(), getComputerChoice());

// Write logic to play entire game