// Begin the game, the game will have 5 rounds	(game)
// Begin each round	(playRound)
// Generate computer's choice
function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    return computerChoice;
}

// Ask the user to choose a choice
// Compare user's choice with computer's choice
// If the user wins, give the user 1 point and declare the user win
// If computer wins, give the computer 1 point and declare the user loose
// Show the score board to the user
// Move to next round if it hasn't reached 5 rounds
// Finish the game and announce the winner