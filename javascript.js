/*
javascript.js
*/

let humanScore = 0;
let computerScore = 0;

playRound(getHumanChoice(), getComputerChoice());



function playRound(humanChoice, computerChoice) {
    console.log(`COMPUTER PICKS ${computerChoice.toUpperCase()}!`)
    if (humanChoice === computerChoice) {
        console.log(`Tie! You both picked ${humanChoice}!`);
    } else if (isWinner(humanChoice, computerChoice)) {
        console.log(`You win! Your ${humanChoice} beats ${computerChoice}!`);
        humanScore++;
    } else {
        console.log(`You lose! Your ${humanChoice} loses to ${computerChoice}.`);
        computerScore;
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

function getHumanChoice() {
    let choice = prompt("Rock, paper, or scissors?", "rock");
    return choice.toLowerCase();
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}