document.addEventListener("DOMContentLoaded", function() {
  let roundCount = 0;
  let playerScore = 0;
  let computerScore = 0;

  // Function to get computer's choice
  function getComputerChoice() {
    const choices = ["Rock", "Paper", "Scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
  }

  // Function to determine the winner of a round
  function determineWinner(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
      return "It's a tie!";
    } else if (
      (playerSelection === "Rock" && computerSelection === "Scissors") ||
      (playerSelection === "Paper" && computerSelection === "Rock") ||
      (playerSelection === "Scissors" && computerSelection === "Paper")
    ) {
      playerScore++;
      return "You win!";
    } else {
      computerScore++;
      return "Computer wins!";
    }
  }

  // Function to play a round of the game and display results
  function playRound(playerSelection) {
    roundCount++;
    const computerSelection = getComputerChoice();
    const result = determineWinner(playerSelection, computerSelection);

    const resultsDisplay = document.querySelector('.results');
    resultsDisplay.textContent += `Round ${roundCount}: You chose ${playerSelection}. Computer chose ${computerSelection}. ${result}\n`;

    if (roundCount === 5) {
      // Display final scores after 5 rounds
      resultsDisplay.textContent += `\nFinal Score:\nYou: ${playerScore}\nComputer: ${computerScore}`;
      // Disable buttons after 5 rounds
      rock.disabled = true;
      paper.disabled = true;
      scissors.disabled = true;
    }
  }

  // Add event listeners to each button
  const rock = document.getElementById("rock");
  const paper = document.getElementById("paper");
  const scissors = document.getElementById("scissors");

  rock.addEventListener("click", () => playRound("Rock"));
  paper.addEventListener("click", () => playRound("Paper"));
  scissors.addEventListener("click", () => playRound("Scissors"));
});