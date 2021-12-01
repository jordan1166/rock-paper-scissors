let gameButtons = document.getElementsByClassName("game-buttons");
let roundsPlayed = document.getElementById("rounds-played");
let player = document.getElementById("player-score");
let computer = document.getElementById("computer-score");
let outcome = document.getElementById("outcome");
let gameResult = document.getElementById("game-result");
let playerWinsDisplay = document.getElementById("player-wins");
let computerWinsDisplay = document.getElementById("computer-wins");

// Function that randomly returns either Rock, Paper, or Scissors
let computerPlay = () => {
  let randomNumber = Math.floor(Math.random() * 3);
  const choices = ["rock", "paper", "scissors"];
  return choices[randomNumber];
};

// console.log(computerPlay());

// Check for user input errors

let checkForError = (choice) => {
  if (choice === null) {
    return "Game canceled";
  }
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
  } else if (playerSelection === "scissors") {
    if (computerSelection === "scissors") {
      return "It's a tie! You both chose scissors!";
    } else if (computerSelection === "rock") {
      return "You lose! Rock beats scissors!";
    } else {
      return "You win! Scissors beats paper!";
    }
  } else {
    return "Game canceled.";
  }
};
// const computerChoice = computerPlay();
// console.log(computerChoice);
// console.log(playRockPaperScissors("PaPer", computerChoice));

// Play a 5 round game of rock paper scissors
let playerWins = 0;
let computerWins = 0;
let playerScore = 0;
let computerScore = 0;
let rounds = 0;

let game = (choice) => {
  gameResult.textContent = "";
  playGame: if (playerScore < 5 && computerScore < 5) {
    rounds++;
    const round = playRockPaperScissors(choice, computerPlay());
    if (round.includes("You win!")) {
      playerScore++;
    } else if (round.includes("You lose!")) {
      computerScore++;
    }
    playerWinsDisplay.textContent = `Play Wins: ${playerWins}`;
    computerWinsDisplay.textContent = `Computer Wins ${computerWins}`;
    roundsPlayed.textContent = `Round ${rounds}`;
    player.textContent = `Player Score: ${playerScore}`;
    computer.textContent = `Computer Score: ${computerScore}`;
    outcome.textContent = round;
    console.log(`Round ${rounds}`);
    console.log(round);
    console.log(`Player Score: ${playerScore}`);
    console.log(`Computer Score: ${computerScore}`);
  }

  if (playerScore == 5 || computerScore == 5) {
    if (playerScore > computerScore) {
      gameResult.textContent = `You won the game!`;
      playerWins++;
      playerWinsDisplay.textContent = `Play Wins: ${playerWins}`;
    } else if (computerScore > playerScore) {
      gameResult.textContent = `The computer won the game :-(`;
      computerWins++;
      computerWinsDisplay.textContent = `Computer Wins ${computerWins}`;
    } else {
      gameResult.textContent = `The game was a tie! You both got ${playerScore} points!`;
    }
    playerScore = 0;
    computerScore = 0;
    rounds = 0;

    return;
  }
};

Array.from(gameButtons).forEach((button) => {
  button.addEventListener("click", () => {
    game(button.id);
  });
});
