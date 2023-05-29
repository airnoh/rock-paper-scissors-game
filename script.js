function playGame(playerChoice) {
  const choices = ["rock", "paper", "scissors"];
  const computerChoice = choices[Math.floor(Math.random() * 3)];
  let playerScore = 0;
  let computerScore = 0;

  let result;

  if (playerChoice === computerChoice) {
    result = "It's a tie!";
  } else if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "scissors" && computerChoice === "paper")
  ) {
    result = "You win!";
    playerScore ++;
  } else {
    result = "Computer wins!";
    computerScore++;
  }
  document.querySelector(".win").innerHTML =`<p>Player choose ${getEmoji(playerChoice)}`
  document.querySelector(".wins").innerHTML =`<p>Computer choose ${getEmoji(computerChoice)}`
  document.querySelector("#winner").innerHTML =`<p>${result}</p>`;
  document.getElementById("player-score").textContent = playerScore;
  document.getElementById("computer-score").textContent = computerScore;
}

function getEmoji(choice) {
  if (choice === "rock") {
    return "✊🏽";
  } else if (choice === "paper") {
    return "🖐🏽";
  } else if (choice === "scissors") {
    return "✂️";
  }
}

