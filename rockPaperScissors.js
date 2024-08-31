const { argv } = require("node:process");
const { use } = require("react");

const gameOptions = ["rock", "paper", "scissors"];
const computerPlayer =
  gameOptions[Math.floor(Math.random() * gameOptions.length)];

const userPlayer = argv[2];

function game() {
  if (!gameOptions.includes(userPlayer)) return `Please enter a valid input`;
  if (userPlayer === computerPlayer) {
    return `Output: You chose ${userPlayer}. Computer chose ${computerPlayer}. it is a tie!`;
  } else if (
    (userPlayer === "rock" && computerPlayer === "scissors") ||
    (userPlayer === "paper" && computerPlayer === "rock") ||
    (userPlayer === "scissors" && computerPlayer === "paper")
  ) {
    return `Output: You chose ${userPlayer}. Computer chose ${computerPlayer}. You win!`;
  } else {
    return `Output: You chose ${userPlayer}. Computer chose ${computerPlayer}. You lose!`;
  }
}

const result = game();
console.log(result);
