const items = ['Rock', ' Paper', ' Scissors']
        
        
function computerPlay() {
    const randomChoice = Math.floor(Math.random() * items.length);
    return items[randomChoice];
};


function playRound(playerSelection, computerSelection) {
    let player = playerSelection;
    let computer = computerSelection;
    if (player == 'rock' && computer == 'Scissors') {
        playerScore++;
        return 'Win';
    } else if (player == 'rock' && computer == 'Paper') {
        computerScore++;
        return 'Lose';
    } else if (player == 'paper' && computer == 'Scissors') {
        computerScore++;
        return 'Lose';
    } else if (player == 'paper' && computer == 'Rock') {
        playerScore++;
        return 'Win';
    } else if (player == 'scissors' && computer == 'Rock') {
        computerScore++;
        return 'Lose';
    } else if (player == 'scissors' && computer == 'Paper') {
        playerScore++;
        return 'Win';
    }
    else return 'Draw';
} 

let computerScore = 0;
let playerScore = 0;
    
function game() {
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt(`Choose one of these: ${items}`);
        playerSelection = playerSelection.toLowerCase();
        const computerSelection = computerPlay();
        console.log(playRound(playerSelection, computerSelection));
    }
    if (playerScore > computerScore) {
        console.log(`You win! Final Score: ${playerScore} to ${computerScore}`);
    } else if (computerScore > playerScore) {
        console.log(`You suck! Final Score: ${playerScore} to ${computerScore}`);
    } else
        console.log(`You tied. Final Score: ${playerScore} to ${computerScore}`);
}

game();