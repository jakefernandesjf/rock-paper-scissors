/*
javascript.js
*/

playGame(5);


function playGame(rounds) {
    let humanScore = 0;
    let computerScore = 0;

    console.log(`PLAYING ROCK, PAPER, SCISSORS FOR ${rounds} rounds . . .`);
    for (let round = 0; round < rounds; round++) {
        console.log(`ROUND ${round + 1} . . .`);
        let result = playRound(getHumanChoice(), getComputerChoice());
        if (result === true) {
            humanScore++;
        } else if (result === false) {
            computerScore++;
        }
        console.log(`CURRENT SCORE: YOU: ${humanScore} COMPUTER: ${computerScore}`);
    }
    if (humanScore == computerScore) {
        console.log(`FINAL RESULT: TIE!`);
    } else if (humanScore > computerScore) {
        console.log(`FINAL RESULT: YOU WIN!`);
    } else {
        console.log(`FINAL RESULT: YOU LOSE!`);
    }
}

function playRound(humanChoice, computerChoice) {
    console.log(`COMPUTER PICKS ${computerChoice.toUpperCase()}!`)
    if (humanChoice === computerChoice) {
        console.log(`Tie! You both picked ${humanChoice}!`);
        return null;
    } else if (isWinner(humanChoice, computerChoice)) {
        console.log(`You win! Your ${humanChoice} beats ${computerChoice}!`);
        return true;
    } else {
        console.log(`You lose! Your ${humanChoice} loses to ${computerChoice}.`);
        return false;
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