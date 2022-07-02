
let computerScore = 0;
let playerScore = 0;
// const buttons = document.querySelectorAll('button');
let playerSelection;
let scoreCount = 0;



const rockBtn = document.querySelector('#rock');
const paperBtn = document.querySelector('#paper');
const scissorsBtn = document.querySelector('#scissors');

// const buttons = document.querySelectorAll('button');




function computerPlay() {
    let items = ['rock', 'paper', 'scissors'];
    const randomChoice = Math.floor(Math.random() * items.length);
    return items[randomChoice];
};

rockBtn.addEventListener('click', () => {
	playerSelection = 'rock';
	computerPlay();
	game();
});

paperBtn.addEventListener('click', () => {
	playerSelection = 'paper';
	computerPlay();
	game();
});

scissorsBtn.addEventListener('click', () => {
	playerSelection = 'scissors';
	computerPlay();
	game();
});

function playRound(playerSelection) {
    let player = playerSelection;
    let computer = computerPlay();

    if (player == 'rock' && computer == 'scissors') {
        playerScore++;
        return 'Win';

    } 
	else if (player == 'rock' && computer == 'paper') {
        computerScore++;
        return 'Lose';

    } 
	else if (player == 'paper' && computer == 'scissors') {
        computerScore++;
        return 'Lose';

    } 
	else if (player == 'paper' && computer == 'rock') {
        playerScore++;
        return 'Win';

    } 
	else if (player == 'scissors' && computer == 'rock') {
        computerScore++;
        return 'Lose';

    } 
	else if (player == 'scissors' && computer == 'paper') {
        playerScore++;
        return 'Win';
    }
    else 
	return 'Draw';
};


function game() {
		let computerSelection = computerPlay();
		console.log(playRound(playerSelection, computerSelection));

		if (playerScore > computerScore) {
			console.log(`You win!`);
		} 
		else if (computerScore > playerScore) {
			console.log(`You suck!`);
		} 
		else if (playerScore = computerScore) {
			console.log(`You tied.`);
		}
		else if (playerScore === 5 ) {
			console.log("Win!");
		}
		else (computerScore === 5) 
			console.log("You suck!");
		
	}
	
// game();
				
// function game() {
// 	if (playerScore === 5) {
// 		console.log("Win!");
// 	}
// 	else if (computerScore === 5) {
// 		console.log("You suck!");
// 	}
// }

function game() {
	let computerSelection = computerPlay();
	console.log(playRound(playerSelection, computerSelection));

	if (scoreCount >= 4) {
		if (computerScore > playerScore) {
			console.log('You Lost this Game')
		}
		else if (computerScore < playerScore) {
			console.log('You Won this Game')
		}
		else {
			console.log('Tie');
		}
		// endGame()
	}
	else {
		scoreCount++;
	}

};
