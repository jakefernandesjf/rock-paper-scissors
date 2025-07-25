/*
javascript.js
*/

/*
Main
*/
const roundsToWin = 5;
const buttons = document.querySelector(".buttons");
const playerScoreValue = document.querySelector(".player-score-value");
const computerScoreValue = document.querySelector(".computer-score-value");
const statusElement = document.querySelector(".status");
let humanScore = 0;
let computerScore = 0;

buttons.addEventListener("click", (event) => {
    let targetId = event.target.id;
    return playRound(getHumanChoice(targetId), getComputerChoice());
});

/*
Functions
*/
function resetGame() {
    humanScore = 0;
    computerScore = 0;
    statusElement.textContent = "Press a button to play";
    playerScoreValue.textContent = humanScore;
    computerScoreValue.textContent = computerScore;
}

function endGame() {
    if (humanScore > computerScore) {
        console.log(`FINAL RESULT: YOU WIN!`);
        confirm(`FINAL RESULT: YOU WIN!`);
    } else {
        console.log(`FINAL RESULT: YOU LOSE!`);
        confirm(`FINAL RESULT: YOU LOSE!`);
    }
    resetGame();
}

function playRound(humanChoice, computerChoice) {
    computerText = `COMPUTER PICKS ${computerChoice.toUpperCase()}!`;
    alert(computerText);
    console.log(computerText);
    
    let text = "";
    if (humanChoice === computerChoice) {
        text = `Tie! You both picked ${humanChoice}!`;
    } else if (isWinner(humanChoice, computerChoice)) {
        text = `You win! Your ${humanChoice} beats ${computerChoice}!`;
        humanScore++;
    } else {
        text = `You lose! Your ${humanChoice} loses to ${computerChoice}.`
        computerScore++;
    }

    statusElement.textContent = text;
    playerScoreValue.textContent = humanScore;
    computerScoreValue.textContent = computerScore;
    console.log(text);

    if (humanScore == roundsToWin || computerScore == roundsToWin) {
        return endGame();
    }
}

function isWinner(choiceA, choiceB) {
    if ((choiceA === "rock" && choiceB === "scissors")
        || (choiceA === "scissors" && choiceB === "paper")
        || (choiceA === "paper" && choiceB === "rock")) {
        return true;
    } else {
        return false;
    }
}

function getComputerChoice() {
    let randomInt = getRandomInt(3);
    let choice = "";
    switch (randomInt) {
        case (0):
            choice = "rock";
            break;
        case (1):
            choice = "paper";
            break;
        case (2):
            choice = "scissors";
            break;
    }
    return choice;
}

function getHumanChoice(buttonId) {
    switch (buttonId) {
        case "rock-button":
            return "rock";
            break;
        case "paper-button":
            return "paper";
            break;
        case "scissors-button":
            return "scissors";
            break;
    }
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}