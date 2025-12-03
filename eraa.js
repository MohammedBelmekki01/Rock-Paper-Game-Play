// Get DOM elements
const choices = document.querySelectorAll(".choice-btn");
const playerScoreEl = document.getElementById("player-score");
const computerScoreEl = document.getElementById("computer-score");
const result = document.getElementById("result");
const restart = document.getElementById("restart");
const modal = document.getElementById("modal");
const gameStatus = document.getElementById("game-status");

// Game state
const scoreboard = {
  player: 0,
  computer: 0,
};

let isPlaying = false;

// Choice colors mapping
const choiceColors = {
  rock: "text-red-500",
  paper: "text-blue-500",
  scissors: "text-yellow-500",
};

// Play game with animation
function play(e) {
  if (isPlaying) return;
  isPlaying = true;

  // Show restart button
  restart.classList.remove("hidden");

  // Get player choice
  const playerChoice = e.currentTarget.id;

  // Add click effect
  e.currentTarget.classList.add("scale-95");
  setTimeout(() => {
    e.currentTarget.classList.remove("scale-95");
  }, 200);

  // Show thinking status
  gameStatus.classList.remove("hidden");

  // Delay for dramatic effect
  setTimeout(() => {
    const computerChoice = getComputerChoice();
    const winner = getWinner(playerChoice, computerChoice);
    showWinner(winner, playerChoice, computerChoice);
    gameStatus.classList.add("hidden");
    isPlaying = false;
  }, 1000);
}

// Get computer choice
function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * 3);
  return choices[randomIndex];
}

// Determine winner
function getWinner(player, computer) {
  if (player === computer) {
    return "draw";
  }

  const winConditions = {
    rock: "scissors",
    paper: "rock",
    scissors: "paper",
  };

  return winConditions[player] === computer ? "player" : "computer";
}

// Show winner with enhanced UI
function showWinner(winner, playerChoice, computerChoice) {
  let resultHTML = "";
  let gradientClass = "";

  if (winner === "player") {
    scoreboard.player++;
    gradientClass = "win-gradient";
    resultHTML = `
            <div class="space-y-6">
                <div class="text-6xl mb-4">🎉</div>
                <h2 class="text-4xl font-black text-green-600 mb-4">YOU WIN!</h2>
                <div class="flex justify-center items-center space-x-8 my-6">
                    <div class="text-center">
                        <p class="text-sm text-gray-500 mb-2">You chose</p>
                        <i class="fas fa-hand-${playerChoice} text-6xl ${
      choiceColors[playerChoice]
    }"></i>
                        <p class="text-lg font-bold text-gray-700 mt-2">${capitalize(
                          playerChoice
                        )}</p>
                    </div>
                    <div class="text-4xl text-gray-400">VS</div>
                    <div class="text-center">
                        <p class="text-sm text-gray-500 mb-2">Computer chose</p>
                        <i class="fas fa-hand-${computerChoice} text-6xl ${
      choiceColors[computerChoice]
    }"></i>
                        <p class="text-lg font-bold text-gray-700 mt-2">${capitalize(
                          computerChoice
                        )}</p>
                    </div>
                </div>
                <button onclick="closeModal()" class="bg-green-500 text-white px-8 py-3 rounded-full font-bold text-lg hover:bg-green-600 transition transform hover:scale-105 shadow-lg">
                    Play Again
                </button>
            </div>
        `;
  } else if (winner === "computer") {
    scoreboard.computer++;
    gradientClass = "lose-gradient";
    resultHTML = `
            <div class="space-y-6">
                <div class="text-6xl mb-4">😢</div>
                <h2 class="text-4xl font-black text-red-600 mb-4">YOU LOSE!</h2>
                <div class="flex justify-center items-center space-x-8 my-6">
                    <div class="text-center">
                        <p class="text-sm text-gray-500 mb-2">You chose</p>
                        <i class="fas fa-hand-${playerChoice} text-6xl ${
      choiceColors[playerChoice]
    }"></i>
                        <p class="text-lg font-bold text-gray-700 mt-2">${capitalize(
                          playerChoice
                        )}</p>
                    </div>
                    <div class="text-4xl text-gray-400">VS</div>
                    <div class="text-center">
                        <p class="text-sm text-gray-500 mb-2">Computer chose</p>
                        <i class="fas fa-hand-${computerChoice} text-6xl ${
      choiceColors[computerChoice]
    }"></i>
                        <p class="text-lg font-bold text-gray-700 mt-2">${capitalize(
                          computerChoice
                        )}</p>
                    </div>
                </div>
                <button onclick="closeModal()" class="bg-red-500 text-white px-8 py-3 rounded-full font-bold text-lg hover:bg-red-600 transition transform hover:scale-105 shadow-lg">
                    Try Again
                </button>
            </div>
        `;
  } else {
    gradientClass = "draw-gradient";
    resultHTML = `
            <div class="space-y-6">
                <div class="text-6xl mb-4">🤝</div>
                <h2 class="text-4xl font-black text-blue-600 mb-4">IT'S A DRAW!</h2>
                <div class="flex justify-center items-center space-x-8 my-6">
                    <div class="text-center">
                        <p class="text-sm text-gray-500 mb-2">You chose</p>
                        <i class="fas fa-hand-${playerChoice} text-6xl ${
      choiceColors[playerChoice]
    }"></i>
                        <p class="text-lg font-bold text-gray-700 mt-2">${capitalize(
                          playerChoice
                        )}</p>
                    </div>
                    <div class="text-4xl text-gray-400">VS</div>
                    <div class="text-center">
                        <p class="text-sm text-gray-500 mb-2">Computer chose</p>
                        <i class="fas fa-hand-${computerChoice} text-6xl ${
      choiceColors[computerChoice]
    }"></i>
                        <p class="text-lg font-bold text-gray-700 mt-2">${capitalize(
                          computerChoice
                        )}</p>
                    </div>
                </div>
                <button onclick="closeModal()" class="bg-blue-500 text-white px-8 py-3 rounded-full font-bold text-lg hover:bg-blue-600 transition transform hover:scale-105 shadow-lg">
                    Play Again
                </button>
            </div>
        `;
  }

  result.innerHTML = resultHTML;
  updateScore();
  modal.classList.remove("hidden");
}

// Update score display
function updateScore() {
  playerScoreEl.textContent = scoreboard.player;
  computerScoreEl.textContent = scoreboard.computer;
}

// Capitalize first letter
function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// Close modal
function closeModal() {
  modal.classList.add("hidden");
}

// Restart game
function restartGame() {
  scoreboard.player = 0;
  scoreboard.computer = 0;
  updateScore();
  restart.classList.add("hidden");
  closeModal();
}

// Clear modal on outside click
function clearModal(e) {
  if (e.target === modal) {
    closeModal();
  }
}

// Event listeners
choices.forEach((choice) => choice.addEventListener("click", play));
window.addEventListener("click", clearModal);
restart.addEventListener("click", restartGame);
