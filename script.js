// this is a variable and is good for stuff
let computerScore = 0;
let playerScore = 0;
let roundCount = 1;

const userScore = document.querySelector('.user-score');
const compScore = document.querySelector('.computer-score');
const result = document.querySelector('.result');
const roundNum = document.querySelector('.round-number');


const btns = document.querySelectorAll('button[data-selection]');
[...btns].forEach(btn => {
	let choice = btn.getAttribute('data-selection');
	btn.addEventListener('click', () => {
		playRound(choice)
	})
})

function computerPlay() {
	let result = 'scissors';
	const number = Math.floor(Math.random() * 999);

	if (number % 3 === 0) {
		result = 'rock';
	}
	if (number % 3 === 1) {
		result = 'paper';
	}

	return result;
}

function playRound(playerSelection) {
	computer = computerPlay();
	player = playerSelection;

	if (
		(player == 'rock' && computer == 'scissors') ||
		(player == 'paper' && computer == 'rock') ||
		(player == 'scissors' && computer == 'paper')
	) {
		playerScore++;
		userScore.textContent = `${playerScore}`;
		result.textContent = `You won round #${roundCount}`;

		if (playerScore == 5) {
			result.textContent = `You WON! You got 5 points in ${roundCount} rounds`
		}
		
		roundCount++;
		roundNum.textContent = `${roundCount}`;
	} else if (player == computer) {
		roundCount++;
		roundNum.textContent = `${roundCount}`;
		result.textContent = `This round is draw. You both choose same.`;
	} else {
		computerScore++;
		compScore.textContent = `${computerScore}`;
		result.textContent = `You lost round #${roundCount}`;

		if (computerScore == 5) {
			result.textContent = `You suck! You lost to Computer in ${roundCount} rounds! Go and do something useful!`
		}

		roundCount++;
		roundNum.textContent = `${roundCount}`;
	}
}