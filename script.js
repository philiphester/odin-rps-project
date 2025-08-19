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

// Write logic to play entire game. A game is five rounds.
function playGame() {

    // Declare the players score variables
    let humanScore = 0;
    let computerScore = 0;
    
    // Write logic to play single round
    function playRound(humanChoice, computerChoice) {
        // Correct humanChoice so first letter is capitalized and remainder is lowercase
        humanChoice = humanChoice.slice(0,1).toUpperCase() + humanChoice.slice(1).toLowerCase();

        if ((humanChoice == "Rock" && computerChoice == "Scissors") ||
            (humanChoice == "Paper" && computerChoice == "Rock") ||
            (humanChoice == "Scissors" && computerChoice == "Paper")) {
                humanScore += 1;
                console.log("You win! " + humanChoice + " beats " + computerChoice + ".");
            } else if ((computerChoice == "Rock" && humanChoice == "Scissors") ||
            (computerChoice == "Paper" && humanChoice == "Rock") ||
            (computerChoice == "Scissors" && humanChoice == "Paper")) {
                computerScore += 1;
                console.log("You lose! " + humanChoice + " beats " + computerChoice + ".");
            } else {
                console.log("It's a tie! You both picked " + humanChoice + ".");
            }
    }

    // Play full five round game
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());

    // Anounce the winner
    if (humanScore > computerScore) {
        console.log("Congratulations! You won the game!");
    } else if (humanScore < computerScore) {
        console.log("You lost the game! Try again.");
    } else {
        console.log("It's a tie. Try again!");
    }
    console.log("You scored: " + humanScore + " wins. The computer scored " + computerScore + " wins.");
}

playGame();
