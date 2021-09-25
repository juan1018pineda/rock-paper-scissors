import { Human } from "./modules/player.js";
import { Robot } from "./modules/player.js";
import * as rules from "./modules/rules.js";

let robot = new Robot("Robot", 0, "");
let human = new Human("", 0, "");
let gamePoints = 0;
let rounds = 1;

function getGameStatus() {
  const gameStatus = rules.checkGameStatus(
    human.points,
    robot.points,
    gamePoints
  );
  if (gameStatus === "nextRound") {
    rounds += 1;
    startGame();
  } else {
    rules.checkWinner(human.points, robot.points);
    process.exit();
  }
}

function getWinner() {
  robot.selection = robot.botSelection();
  console.log(
    `\n ${human.name} selected ${human.selection}, Robot selected ${robot.selection}.`
  );
  const winner = rules.getResult(human.selection, robot.selection);
  switch (winner) {
    case "bot":
      robot.points += 1;
      break;
    case "human":
      human.points += 1;
      break;
  }
  console.log(`\n ${human.name} ${human.points} : Robot ${robot.points}`);
  getGameStatus();
}

function startGame() {
  process.stdout.write(
    `\n Round ${rounds}: Choose [r]ock, [p]aper or [s]cissors: `
  );
  process.stdin.once("data", function (input) {
    human.selection = input.toString().trim();
    console.clear();
    const isValid = rules.checkInput(human.selection);
    if (isValid) {
      getWinner();
    } else {
      startGame();
    }
  });
}

function getPoints() {
  process.stdout.write("\n How many points to get the game? ");
  process.stdin.once("data", function (data) {
    gamePoints = parseInt(data);
    const isValid = rules.checkPoints(gamePoints);
    if (isValid) {
      startGame();
    } else {
      getPoints();
    }
  });
}

process.stdin.once("data", function (data) {
  human.name = data.toString().trim();
  console.log(`\n Welcome ${human.name}!`);
  getPoints();
});

process.stdout.write(
  "\n Welcome to rock, paper and scissors game. Please Write your name: "
);
