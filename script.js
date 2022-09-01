let roundWinner;
let computerChoice;

var computerScore = 0;
var playerScore = 0;

let playRock;
let playPaper;
let playScissor;

let rockBtn = document.getElementById('rock')
let paperBtn = document.getElementById('paper')
let scissorBtn = document.getElementById('scissor')
let resultLabel = document.querySelector('.resultLabel')
let resultBox = document.querySelector('.resultBox')
let comChoice = document.querySelector('.compChoice')
let score = document.querySelector('#currentScore')

rockBtn.addEventListener('click', playRockNow);
paperBtn.addEventListener('click', playPaperNow);
scissorBtn.addEventListener('click', playScissorNow);

function playRockNow () {
    var computer = getComputerChoice();
    comChoice.textContent = computer.toUpperCase();
    if (computer === "scissor") {
        playRock = "You win! Rock beats Scissor!";
        resultLabel.textContent = "You win! Rock beats Scissor!";
        resultLabel.setAttribute('class', 'winLabel');
        resultBox.setAttribute('class', 'winBox');
        playerScore += 1;
    } else if (computer === "paper") {
        playRock = "You lose! Paper beats Rock!";
        resultLabel.textContent = "You lose! Paper beats Rock!";
        resultLabel.setAttribute('class', 'lossLabel');
        resultBox.setAttribute('class', 'lossBox');        
        computerScore += 1;
    } else if (computer === "rock") {
        playRock = "This round is a tie...";
        resultLabel.textContent = "This round is a tie...";
        resultLabel.setAttribute('class', 'resultLabel');
        resultBox.setAttribute('class', 'resultBox');        
    }
    
    if (computerScore >= 5) {
        score.textContent = "Computer Wins!"
    } else if (playerScore >= 5) {
        score.textContent = "You Win!"
    } else {
      score.textContent = (`${playerScore} - ${computerScore}`);
    }
}

function playPaperNow () {
    var computer = getComputerChoice();

    if (computer === "scissor") {
        resultLabel.textContent = "You lose! Scissor beats Paper!";
        resultLabel.setAttribute('class', 'lossLabel');
        resultBox.setAttribute('class', 'lossBox');    
        computerScore += 1;
    } else if (computer === "rock") {
        resultLabel.textContent = "You win! Paper beats Rock!";
        resultLabel.setAttribute('class', 'winLabel');
        resultBox.setAttribute('class', 'winBox');
        playerScore += 1;
    } else if (computer === "paper") {
        playPaper = "This round is a tie...";
        resultLabel.textContent = "This round is a tie...";
        resultLabel.setAttribute('class', 'resultLabel');
        resultBox.setAttribute('class', 'resultBox');    
    }
    if (computerScore >= 5) {
        score.textContent = "Computer Wins!"
    } else if (playerScore >= 5) {
        score.textContent = "You Win!"
    } else {
      score.textContent = (`${playerScore} - ${computerScore}`);
    }
}

function playScissorNow () {
    var computer = getComputerChoice();

    if (computer === "paper") {
        playScissor = "You win! Scissor beats Paper!";
        resultLabel.textContent = "You win! Rock beats Scissor!";
        resultLabel.setAttribute('class', 'winLabel');
        resultBox.setAttribute('class', 'winBox');
        playerScore += 1;
    } else if (computer === "rock") {
        playScissor = "You lose! Rock beats Scissor!";
        resultLabel.textContent = "You lose! Paper beats Rock!";
        resultLabel.setAttribute('class', 'lossLabel');
        resultBox.setAttribute('class', 'lossBox');    
        computerScore += 1;
    } else if (computer === "scissor") {
        playScissor = "This round is a tie...";
        resultLabel.textContent = "This round is a tie...";
        resultLabel.setAttribute('class', 'resultLabel');
        resultBox.setAttribute('class', 'resultBox');
    }
    if (computerScore >= 5) {
        score.textContent = "Computer Wins!"
    } else if (playerScore >= 5) {
        score.textContent = "You Win!"
    } else {
    score.textContent = (`${playerScore} - ${computerScore}`);
    }

}


function getComputerChoice (compChoice) {
    var value = Math.random();
    if (value < .33) {
        var compChoice = "rock";
    } else if (value > .66) {
        var compChoice = "paper";
    } else {
        var compChoice = "scissor";
    }
    return compChoice;
}
