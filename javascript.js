// Game() function (5 rounds of game)
function game() {
    // Generate point
    let playerPoint = 0;
    let computerPoint = 0;
    // Begin the game, the game will have 5 rounds	(game)
    for (let i = 0; i < 5; i++) {
        // Begin each round	(playRound)
        // Generate computer's choice
        const computerSelection = getComputerChoice();
        // Ask the user to choose a choice
        const playerSelection = getPlayerChoice();
        // Get result
        const roundResult = playRound(playerSelection, computerSelection);
        console.log(roundResult);
        // If the user wins, give the user 1 point and declare the user win
        if (roundResult.search(/win/i) != -1) {
            playerPoint += 1;
        }
        // If computer wins, give the computer 1 point and declare the user loose
        else if (roundResult.search(/lose/i) != -1) {
            computerPoint += 1;
        }
        // If tie, no point given
        // Show the score board to the user
        const scoreBoard = `User ${playerPoint} : ${computerPoint} Computer`;
        console.log(scoreBoard);
    }
    // Finish the game and announce the winner
    if (playerPoint > computerPoint) {
        console.log("Yay! You win the game ^_^")
    }
    else if (playerPoint < computerPoint) {
        console.log("Noo! You lose the game :'(")
    }
    else {
        console.log("It's a tie. That was a good game. Let's play again ^^");
    }
}

// Generate computer's choice
function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    return computerChoice;
}

// Ask the user to choose a choice
function getPlayerChoice() {
    let playerChoice = prompt("What's your choice (rock - paper - scissors)");
    while (playerChoice.toLowerCase() != 'rock' && playerChoice.toLowerCase() != 'paper' && playerChoice.toLowerCase() != 'scissors') {
        playerChoice = prompt("Invalid input! \nEnter your choice again (rock - paper - scissors)");
    }
    return playerChoice.toLowerCase();
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
