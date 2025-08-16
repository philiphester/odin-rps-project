// Odin Foundtations JavaScript Project: Rock, Paper, Scissors

// Get computer's choice
// Randomly return Rock, Paper, or Scissors and return answer
function getComputerChoice() {
    let computerChoice;
    let randomNum = Math.floor(Math.random() * 3);

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

console.log(getComputerChoice());

// Get player's choice
// Prompt user to enter Rock, Paper, or Scissors, and return answer
function getHumanChoice() {
    let humanChoice = prompt("Please enter your choice (Rock, Paper, or Scissors): ");
    return humanChoice;
}

console.log(getHumanChoice());

// Declare the players score variables

// Write logic to play single round

// Write logic to play entire game