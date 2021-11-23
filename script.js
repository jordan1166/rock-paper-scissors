// Function that randomly returns either Rock, Paper, or Scissors
let computerPlay = () => {
  let randomNumber = Math.floor(Math.random() * 3);
  const choices = ["rock", "paper", "scissors"];
  return choices[randomNumber];
};

// console.log(computerPlay());

// Play a single round of Rock Paper Scissors

let playRockPaperScissors = (playerSelection, computerSelection) => {
  playerSelection = playerSelection.toLowerCase();
  if (
    playerSelection !== "rock" &&
    playerSelection !== "paper" &&
    playerSelection !== "scissors"
  ) {
    console.log(
      'Please choose one of these choices: "Rock", "Paper", "Scissors"'
    );
  } else {
    if (playerSelection === "rock") {
      if (computerSelection === "rock") {
        return "It's a tie! You both chose rock!";
      } else if (computerSelection === "paper") {
        return "You lose! Paper beats rock!";
      } else {
        return "You win! Rock beats scissors!";
      }
    } else if (playerSelection === "paper") {
      if (computerSelection === "paper") {
        return "It's a tie! You both chose paper!";
      } else if (computerSelection === "scissors") {
        return "You lose! Scissors beats paper!";
      } else {
        return "You win! Paper beats rock!";
      }
    } else {
      if (computerSelection === "scissors") {
        return "It's a tie! You both chose scissors!";
      } else if (computerSelection === "rock") {
        return "You lose! Rock beats scissors!";
      } else {
        return "You win! Scissors beats paper!";
      }
    }
  }
};
const computerChoice = computerPlay();
console.log(computerChoice);
console.log(playRockPaperScissors("PaPer", computerChoice));
