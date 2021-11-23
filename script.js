// Function that randomly returns either Rock, Paper, or Scissors
let computerPlay = () => {
  let randomNumber = Math.floor(Math.random() * 3);
  const choices = ["rock", "paper", "scissors"];
  return choices[randomNumber];
};

// console.log(computerPlay());

// Check for user input errors

let checkForError = (choice) => {
  choice = choice.toLowerCase();
  while (choice !== "rock" && choice !== "paper" && choice !== "scissors") {
    choice = prompt(
      'Please choose one of these choices: "Rock", "Paper", "Scissors"'
    );
  }
  return choice;
};

// Play a single round of Rock Paper Scissors

let playRockPaperScissors = (playerSelection, computerSelection) => {
  playerSelection = checkForError(playerSelection);
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
};
// const computerChoice = computerPlay();
// console.log(computerChoice);
// console.log(playRockPaperScissors("PaPer", computerChoice));

// Play a 5 round game of rock paper scissors

let game = () => {
  let playerScore = 0;
  let computerScore = 0;
  for (let i = 0; i < 5; i++) {
    const round = playRockPaperScissors(
      prompt("Rock, Paper, or Scissors?: "),
      computerPlay()
    );
    if (round.includes("You win!")) {
      playerScore++;
    } else if (round.includes("You lose!")) {
      computerScore++;
    }
    console.log(`Round ${i + 1}`);
    console.log(round);
    console.log(`Player Score: ${playerScore}`);
    console.log(`Computer Score: ${computerScore}`);
  }
  if (playerScore > computerScore) {
    console.log(`You won the game!`);
  } else if (computerScore > playerScore) {
    console.log(`The computer won the game :-(`);
  } else {
    console.log(`The game was a tie! You both got ${playerScore} points!`);
  }
};

game();
