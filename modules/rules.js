
export function checkInput(playerSelection) {
    const gameSelections = ['r', 'p', 's'];
    const isValid = gameSelections.indexOf(playerSelection);
    if (isValid > -1) return true;
    else return false;
}

export function checkPoints(gamePoints){
    if(gamePoints % 2){
        return true;
    } else {
        console.log('Not valid input. Only odd numbers are valid')
        return false;
    }
}

export function getResult(playerSelection, botSelection) {
    if (botSelection === playerSelection) {
        console.log("It is a tie!");
        return 'none';
    } else if (
        (botSelection === "r" && playerSelection === "s") ||
        (botSelection === "s" && playerSelection === "p") ||
        (botSelection === "p" && playerSelection === "r")
    ) {
        console.log("Bot wins :(");
        return 'bot';
    } else {
        console.log("You win!!!");
        return 'human';
    }
}

export function checkGameStatus(gamePoints, currentPoints){
    if(currentPoints === gamePoints){
        return 'endGame';
    } else {
        return 'nextRound';
    }
}