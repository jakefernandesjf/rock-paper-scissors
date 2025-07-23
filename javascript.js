function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function getComputerChoice() {
    let randomInt = getRandomInt(3);
    let choice = "";
    switch (randomInt) {
        case (0):
            choice = "Rock";
            break;
        case (1):
            choice = "Paper";
            break;
        case (2):
            choice = "Scissors";
            break;
    }
    return choice;
}