// Begin the game, the game will have 5 rounds	(game)
// Begin each round	(playRound)
// Generate computer's choice
// Ask the user to choose a choice

// If the user wins, give the user 1 point and declare the user win
// If computer wins, give the computer 1 point and declare the user loose
// Show the score board to the user
// Move to next round if it hasn't reached 5 rounds
// Finish the game and announce the winner

// Generate computer's choice
function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    return computerChoice;
}

// Ask the user to choose a choice
function getPlayerChoice() {
    const playerChoice = prompt("What's your choice");
    return playerChoice.toLowerCase(playerChoice);
}

//Selections compare function 
function compareSelections(player1, player2) {
    let result = '';
    if (player1 === 'rock') {
        if (player2 === 'scissors') {
            result = 'win'; 
        }
        else {
            result = 'lose';
        }
    }
    else if (player1 === 'paper') {
        if (player2 === 'rock') {
            result = 'win'; 
        }
        else {
            result = 'lose';
        }
    }
    else {
        if (player2 === 'paper') {
            result = 'win'; 
        }
        else {
            result = 'lose';
        }
    }
    return result;
}

//Single round function
function playRound(playerSelection, computerSelection) {
    let result = '';
    // Compare user's choice with computer's choice
    if (playerSelection === computerSelection) {
        result = `Tie! Both are ${playerSelection}`;
    }
    else if (compareSelections(playerSelection, computerSelection) === 'win') {
        result = `You win! ${playerSelection} beats ${computerSelection}`;
    } else {
        result = `You lose! ${computerSelection} beats ${playerSelection}`;
    }
    return result;
}
