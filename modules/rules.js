export function checkInput(playerSelection) {
    const gameSelections = ["r", "p", "s"];
    const isValid = gameSelections.indexOf(playerSelection);
    if (isValid > -1) {
        return true;
    } else {
        console.log("\n Choice is not valid. Please make a new choice.");
        return false;
    }
}

export function checkPoints(gamePoints) {
    if (!isNaN(gamePoints)) {
        return true;
    } else {
        console.log("\n Not valid input. Only numbers are valid.");
        return false;
    }
}

export function getResult(playerSelection, botSelection) {
    if (botSelection === playerSelection) {
        console.log("\n It is a tie!");
        return "none";
    } else if (
        (botSelection === "r" && playerSelection === "s") ||
        (botSelection === "s" && playerSelection === "p") ||
        (botSelection === "p" && playerSelection === "r")
    ) {
        console.log("\n Bot wins :(");
        return "bot";
    } else {
        console.log("\n You win!!!");
        return "human";
    }
}

export function checkGameStatus(humanPoints, robotPoints, gamePoints) {
    if (humanPoints === gamePoints || robotPoints === gamePoints) {
        return "endGame";
    } else {
        return "nextRound";
    }
}

export function checkWinner(humanPoints, robotPoints) {
    if (humanPoints < robotPoints) {
        console.log("\n Robot wins game :/");
    } else {
        console.log(`\n Oh no! our robot has lost x_x \n you win the game !!! :D`);
    }
}
