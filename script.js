
let computerScore = 0;
let playerScore = 0;
let scoreCount = 0;

const userScore = document.querySelector('.user-score');
const compScore = document.querySelector('.computer-score');

const rockBtn = document.querySelector('#rock');
const paperBtn = document.querySelector('#paper');
const scissorsBtn = document.querySelector('#scissors');






function computerPlay() {
    let items = ['rock', 'paper', 'scissors'];
    const randomChoice = Math.floor(Math.random() * items.length);
    return items[randomChoice];
};

rockBtn.addEventListener('click', () => {
	playerSelection = 'rock';
	computerPlay();
	playRound();
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
	
    if (
		player == 'rock' && computer == 'scissors' ||
		player == 'paper' && computer == 'rock' || 
		player == 'scissors' && computer == 'paper'
	) {
        playerScore++;
		userScore.textContent = `${playerScore}`;
        return 'Win';

    } 
	else if (
		player == 'rock' && computer == 'paper' ||
		player == 'paper' && computer == 'scissors' ||
		player == 'scissors' && computer == 'rock'
	) {
        computerScore++;
		compScore.textContent = `${computerScore}`;
        return 'Lose';
    } 
	else 
	return 'Draw';
};


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
