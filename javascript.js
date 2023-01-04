const roundResult = document.querySelector('.round-result');
// Call the game() function 
game();
// Game() function (play till one gets 5 points)
function game() {
    // Generate point
    let playerPoint = 0;
    let computerPoint = 0;
    // Buttons' event when click
    const buttons = document.querySelectorAll('.selection-button');
    buttons.forEach(button => button.addEventListener('click', function(e) {
        // Generate computer's choice
        const computerSelection = getComputerChoice();
        // Get result
         const result = playRound(button.id, computerSelection);
         roundResult.textContent = result;
        // Point giving
        if (result.search(/win/i) != -1) {
            playerPoint += 1;
        }
        else if (result.search(/lose/i) != -1) {
            computerPoint += 1;
        }
    }))
    // Show the score board to the user
    const scoreBoard = `User ${playerPoint} : ${computerPoint} Computer`;
    console.log(scoreBoard);
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
