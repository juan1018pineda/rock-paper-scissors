import { Human } from "./modules/player.js";
import { Robot } from "./modules/player.js";
import * as rules from "./modules/rules.js";

let robot = new Robot("Robot", 0, "");
let human = new Human("", 0, "");
let gamePoints = 0;
let rounds = 1;

function getGameStatus(){
  const currentPoints = human.points + robot.points;
  const gameStatus = rules.checkGameStatus(gamePoints, currentPoints);
  if(gameStatus === 'nextRound'){
    rounds += 1;
    startGame();
  } else {
    if(human.points < robot.points){
      console.log('Robot wins game :/');
    } else {
      console.log(`${human.name} wins game :D`);
    }
    process.exit();
  }
}

function getWinner() {
  robot.selection = robot.botSelection();
  console.log(
    `${human.name} selected ${human.selection}, Robot selected ${robot.selection}`
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
  console.log(`${human.name} ${human.points} : Robot ${robot.points}`);
  getGameStatus();
}

function startGame() {
  process.stdout.write(`Round ${rounds}: Choose [r]ock, [p]aper or [s]cissors: `);
  process.stdin.once("data", function (input) {
    human.selection = input.toString().trim();
    console.clear();
    const isValid = rules.checkInput(human.selection);
    if (isValid) {
      getWinner();
    } else {
      console.log("Choice is not valid. Please make a new choice");
      startGame();
    }
  });
}

function getPoints(){
  process.stdout.write("How many points to get the game? (enter and odd number) ");
  process.stdin.once("data", function (data) {
    gamePoints = parseInt(data);
    const isValid = rules.checkPoints(gamePoints);
    if(isValid){
      startGame();
    } else {
      getPoints();
    }
  });
}

process.stdin.once("data", function (data) {
  human.name = data.toString().trim();
  console.log(`Welcome ${human.name}!`);
  getPoints();
});

process.stdout.write("Welcome to rock, paper and scissors game. Please Write your name: ");
