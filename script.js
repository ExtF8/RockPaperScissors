window.onload = () => {
	let computerScore = 0;
	let playerScore = 0;
	// let scoreCount = 0;
	let roundCount = 1;
	
	let userScore = document.querySelector('.user-score');
	let compScore = document.querySelector('.computer-score');
	
	const roundNum = document.querySelector('.round-number');
	
	const rockBtn = document.querySelector('#rock');
	const paperBtn = document.querySelector('#paper');
	const scissorsBtn = document.querySelector('#scissors');
	
	const compRockBtn = document.querySelector('.computer-rock');
	const compPaperBtn  = document.querySelector('.computer-paper');
	const compScissorsBtn = document.querySelector('.computer-scissors');
	
	let result = document.querySelector('.result');
	
	rockBtn.addEventListener('click', () => {playRound('rock')});
	paperBtn.addEventListener('click', () => {playRound('paper')});
	scissorsBtn.addEventListener('click', () => {playRound('scissors')});
	
	
	function computerPlay() {
		const number = Math.floor(Math.random() * 999);
		if (number % 3 === 0) {
			return 'rock';
		}
		if (number % 3 === 1) {
			return 'paper';
		}
		return 'scissors'; 
	}
	
	// function computerPlay() {
	//     let items = ['rock', 'paper', 'scissors'];
	//     const randomChoice = Math.floor(Math.random() * items.length);
	//     return items[randomChoice];
	// }
	
	
	
	
	
	function playRound(playerSelection) {
		computer = computerPlay();
		player = playerSelection;
		
		
		if (
			(player == 'rock' && computer == 'scissors') || 
			(player == 'paper' && computer == 'rock')|| 
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
		} 
		else if (player == computer) {
			roundCount++;
			roundNum.textContent = `${roundCount}`;
			result.textContent = `This round is draw. You both choose same.`;
		} 
		else {
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
}











