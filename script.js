// this is a variable and is good for stuff
let computerScore = 0;
let playerScore = 0;
let roundCount = 1;

const userScore = document.querySelector('.user-score');
const compScore = document.querySelector('.computer-score');
const result = document.querySelector('.result');
const roundNum = document.querySelector('.round-number');
const resultContent = document.querySelector('.result-content');

const btns = document.querySelectorAll('button[data-selection]');

const rockButton = document.querySelector('.rock');
const paperButton = document.querySelector('.paper');
const scissorsButton = document.querySelector('.scissors');

const computerRock = document.querySelector('.computer-rock');
const computerPaper = document.querySelector('.computer-paper');
const computerScissors = document.querySelector('.computer-scissors');

function refreshHover() {
    newGame.classList.add('userHover');
}

function removeClick() {
    this.classList.remove('userClick');
    this.classList.remove('userHover');
}

function removeHover() {
    this.classList.remove('userHover');
}

function refreshPage() {
    window.location.reload(true);
}

function userHover() {
    if (playerScore <= 4 && computerScore <= 4) {
        this.classList.add('userHover');
    }
}

function removeUserColor() {
    rockButton.classList.remove('userClick');
    paperButton.classList.remove('userClick');
    scissorsButton.classList.remove('userClick');
}

function disableButtons() {
    btns.forEach((elem) => {
        elem.disabled = true;
    });
}

[...btns].forEach((btn) => {
    let choice = btn.getAttribute('data-selection');
    btn.addEventListener('click', () => {
        playRound(choice);
        btn.classList.add('userClick');
    });
});

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
    removeUserColor();
    computerColor(computer);

    if (
        (player == 'rock' && computer == 'scissors') ||
        (player == 'paper' && computer == 'rock') ||
        (player == 'scissors' && computer == 'paper')
    ) {
        playerScore++;
        userScore.textContent = `${playerScore}`;
        result.textContent = `You won round #${roundCount}`;

        if (playerScore == 5) {
            result.textContent = `You WON! You got 5 points in ${roundCount} rounds!`;
            resultContent.insertAdjacentElement('afterend', newGame);
            disableButtons();
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
            result.textContent = `You suck! You lost to a Computer in ${roundCount} rounds! Go and do something useful!`;
            resultContent.insertAdjacentElement('afterend', newGame);
            disableButtons();
        }

        roundCount++;
        roundNum.textContent = `${roundCount}`;
    }
}

function computerColor(computer) {
    if (computer === 'rock') {
        removeColor();
        computerRock.classList.add('computerPick');
    } else if (computer === 'paper') {
        removeColor();
        computerPaper.classList.add('computerPick');
    } else {
        removeColor();
        computerScissors.classList.add('computerPick');
    }
}

function removeColor() {
    computerRock.classList.remove('computerPick');
    computerPaper.classList.remove('computerPick');
    computerScissors.classList.remove('computerPick');
}

computerRock.addEventListener('transitionend', removeColor);
computerPaper.addEventListener('transitionend', removeColor);
computerScissors.addEventListener('transitionend', removeColor);

rockButton.addEventListener('transitionend', removeClick);
paperButton.addEventListener('transitionend', removeClick);
scissorsButton.addEventListener('transitionend', removeClick);

rockButton.addEventListener('mouseover', userHover);
paperButton.addEventListener('mouseover', userHover);
scissorsButton.addEventListener('mouseover', userHover);

rockButton.addEventListener('mouseleave', removeHover);
paperButton.addEventListener('mouseleave', removeHover);
scissorsButton.addEventListener('mouseleave', removeHover);

const newGame = document.createElement('button');
newGame.textContent = 'Play again!';
newGame.classList.add('button', 'refresh');

newGame.addEventListener('mouseover', refreshHover);
newGame.addEventListener('mouseleave', removeHover);
newGame.addEventListener('click', refreshHover);
newGame.addEventListener('click', refreshPage);
