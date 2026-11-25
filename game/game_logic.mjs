// // Import scenarios from the external file
// import { scenarios } from './game_scenarios.mjs';

// const gameBoard = document.getElementById("game-board");
// const timerElement = document.getElementById("timer");
// const scenarioModal = document.getElementById("scenario-modal");
// const questionElement = document.getElementById("scenario-question");
// const optionsElement = document.getElementById("scenario-options");
// const explanationElement = document.getElementById("scenario-explanation");
// const continueButton = document.getElementById("continue");
// const scoreDisplay = document.getElementById("score");
// const finalScoreModal = document.getElementById("final-score-modal");
// const finalScoreElement = document.getElementById("final-score");
// const restartButton = document.getElementById("restart");

// let timer = 300;
// let interval;
// let currentTileIndex = 0;
// let score = 0;
// let totalScore = 0;
// let streak = 0;
// let wrongTileIndex = null; // Track the tile to move to after wrong answer

// document.getElementById("start-game").addEventListener("click", startGame);

// function startGame() {
//     document.querySelector(".instructions").classList.add("hidden");
//     document.getElementById("game-container").classList.remove("hidden");
//     initializeBoard();
//     resetTimer();
//     startTimer();
//     resetGameVariables();
//     updateScore();
// }

// function initializeBoard() {
//     gameBoard.innerHTML = "";
//     totalScore = 0; // Reset total score
//     for (let i = 0; i < 25; i++) {
//         const tile = document.createElement("div");
//         tile.classList.add("tile");
//         tile.dataset.index = i;
//         if (i === 0) tile.classList.add("green");
//         else if (i === 24) tile.classList.add("yellow");
//         else if (Math.random() < 0.6) {
//             tile.dataset.scenario = "true";
//             totalScore += 10; // Each tile with a scenario adds potential points
//         }
//         tile.addEventListener("click", () => handleTileClick(tile));
//         gameBoard.appendChild(tile);
//     }
// }

// function resetTimer() {
//     clearInterval(interval);
//     timer = 300;
//     timerElement.textContent = `Time Left: ${timer} seconds`;
// }

// function startTimer() {
//     interval = setInterval(() => {
//         timer--;
//         timerElement.textContent = `Time Left: ${timer} seconds`;
//         if (timer <= 0) {
//             clearInterval(interval);
//             endGame("Time's up! Final score:");
//         }
//     }, 1000);
// }

// function resetGameVariables() {
//     score = 0;
//     streak = 0;
//     currentTileIndex = 0;
//     wrongTileIndex = null;
// }

// function handleTileClick(tile) {
//     const tileIndex = parseInt(tile.dataset.index);
  
//     if (!isAdjacent(tileIndex)) {
//       alert("You can only move to adjacent tiles!");
//       return;
//     }
  
//     // Move first — always update current tile
//     updateTileColor(currentTileIndex, "#bbb"); // old tile becomes gray
//     currentTileIndex = tileIndex;
//     updateTileColor(currentTileIndex, "#4caf50"); // new tile becomes green
  
//     // End the game if it's the last tile
//     if (currentTileIndex === 24) {
//       endGame("Congratulations! Final score:");
//       return;
//     }
  
//     // Then check if it has a scenario
//     if (tile.dataset.scenario === "true") {
//       presentScenario(tileIndex);
//     }
//   }
  

// function isAdjacent(targetIndex) {
//     const rowSize = 5;
//     const row = Math.floor(currentTileIndex / rowSize);
//     const col = currentTileIndex % rowSize;
//     const targetRow = Math.floor(targetIndex / rowSize);
//     const targetCol = targetIndex % rowSize;

//     return (
//         (row === targetRow && Math.abs(col - targetCol) === 1) ||
//         (col === targetCol && Math.abs(row - targetRow) === 1)
//     );
// }

// function presentScenario(tileIndex) {
//     const scenario = scenarios[Math.floor(Math.random() * scenarios.length)];
//     questionElement.textContent = scenario.question;
//     optionsElement.innerHTML = "";
//     scenario.options.forEach((option, index) => {
//         const li = document.createElement("li");
//         li.textContent = option;
//         li.addEventListener("click", () => checkAnswer(index, scenario, tileIndex));
//         optionsElement.appendChild(li);
//     });
//     scenarioModal.classList.remove("hidden");
// }

// function checkAnswer(selected, scenario, tileIndex) {
//     explanationElement.textContent = scenario.explanation;
//     explanationElement.classList.remove("hidden");
//     continueButton.classList.remove("hidden");
//     wrongTileIndex = null; // Reset wrongTileIndex

//     if (selected === scenario.correct) {
//         streak++;
//         const points = 10 * streak;
//         score += points;
//         alert(`Correct! You earn ${points} points. Total: ${score}`);
//         updateScore();
//         advanceTile(tileIndex);
//     } else {
//         streak = 0;
//         score = Math.max(0, score - 10);
//         timer = Math.max(0, timer - 10);
//         wrongTileIndex = tileIndex; // Set the wrong tile to move to
//         alert(`Wrong! 10 points deducted. Total: ${score}`);
//         updateScore();
//     }
// }

// // Update continue button to move to the wrong tile if applicable
// continueButton.addEventListener("click", () => {
//     scenarioModal.classList.add("hidden");
//     explanationElement.classList.add("hidden");
//     continueButton.classList.add("hidden");

//     if (wrongTileIndex !== null) {
//         moveToTileAfterWrongAnswer(wrongTileIndex);
//         wrongTileIndex = null; // Reset wrongTileIndex
//     }
// });

// function moveToTileAfterWrongAnswer(tileIndex) {
//     updateTileColor(currentTileIndex, "#bbb");
//     currentTileIndex = tileIndex;
//     updateTileColor(currentTileIndex, "#4caf50");
//     if (currentTileIndex === 24) {
//         endGame("Congratulations! Final score:");
//     }
// }

// function advanceTile(tileIndex) {
//     updateTileColor(currentTileIndex, "#bbb");
//     currentTileIndex = tileIndex;
//     updateTileColor(currentTileIndex, "#4caf50");

//     if (currentTileIndex === 24) {
//         endGame("Congratulations! Final score:");
//     }

//     scenarioModal.classList.add("hidden");
//     explanationElement.classList.add("hidden");
//     continueButton.classList.add("hidden");
// }

// function updateTileColor(index, color) {
//     const tile = gameBoard.querySelector(`[data-index='${index}']`);
//     if (tile) tile.style.backgroundColor = color;
// }

// function updateScore() {
//     scoreDisplay.textContent = `Score: ${score}/${totalScore}`;
// }

// function endGame(message) {
//     clearInterval(interval); // Stop the timer
//     finalScoreElement.innerHTML = `
//         <p>${message}</p>
//         <p><strong>${score}/${totalScore}</strong></p>
//     `; // Display the final score in a styled format
//     finalScoreModal.classList.remove("hidden"); // Show the final score modal
// }

// restartButton.addEventListener("click", () => {
//     finalScoreModal.classList.add("hidden"); // Hide the final score modal
//     resetGameVariables(); // Reset game variables
//     clearInterval(interval); // Clear any existing timer
//     startGame(); // Restart the game from the beginning
// });
// document.addEventListener("keydown", function (event) {
//     // Prevent moving when scenario is open
//     if (!scenarioModal.classList.contains("hidden")) return;
  
//     const key = event.key;
//     let targetIndex = currentTileIndex;
//     const rowSize = 5;
  
//     switch (key) {
//       case "ArrowUp":
//         targetIndex = currentTileIndex - rowSize;
//         break;
//       case "ArrowDown":
//         targetIndex = currentTileIndex + rowSize;
//         break;
//       case "ArrowLeft":
//         if (currentTileIndex % rowSize !== 0) {
//           targetIndex = currentTileIndex - 1;
//         } else {
//           return;
//         }
//         break;
//       case "ArrowRight":
//         if ((currentTileIndex + 1) % rowSize !== 0) {
//           targetIndex = currentTileIndex + 1;
//         } else {
//           return;
//         }
//         break;
//       default:
//         return;
//     }
  
//     const tile = document.querySelector(`[data-index='${targetIndex}']`);
//     if (tile) {
//       handleTileClick(tile);
//     }
//   });
  
  
// import { scenarios } from './game_scenarios.mjs';

// const gameBoard = document.getElementById("game-board");
// const timerElement = document.getElementById("timer");
// const scenarioModal = document.getElementById("scenario-modal");
// const questionElement = document.getElementById("scenario-question");
// const optionsElement = document.getElementById("scenario-options");
// const explanationElement = document.getElementById("scenario-explanation");
// const continueButton = document.getElementById("continue");
// const scoreDisplay = document.getElementById("score");
// const finalScoreModal = document.getElementById("final-score-modal");
// const finalScoreElement = document.getElementById("final-score");
// const restartButton = document.getElementById("restart");

// let timer = 300;
// let interval;
// let currentTileIndex = 0;
// let score = 0;
// let totalScore = 0;
// let streak = 0;
// let wrongTileIndex = null;

// document.getElementById("start-game").addEventListener("click", startGame);

// function startGame() {
//     document.querySelector(".instructions").classList.add("hidden");
//     document.getElementById("game-container").classList.remove("hidden");
//     initializeBoard();
//     resetTimer();
//     startTimer();
//     resetGameVariables();
//     updateScore();
// }

// function initializeBoard() {
//     gameBoard.innerHTML = "";
//     totalScore = 0;
//     for (let i = 0; i < 25; i++) {
//         const tile = document.createElement("div");
//         tile.classList.add("tile");
//         tile.dataset.index = i;
//         if (i === 0) tile.classList.add("green");
//         else if (i === 24) tile.classList.add("yellow");
//         else if (Math.random() < 0.6) {
//             tile.dataset.scenario = "true";
//             totalScore += 10; // Every scenario tile adds 10 to totalScore
//         }
        
//         gameBoard.appendChild(tile);
//     }
// }

// function resetGameVariables() {
//     score = 0;
//     streak = 0;
//     currentTileIndex = 0;
//     wrongTileIndex = null;
// }

// function resetTimer() {
//     clearInterval(interval);
//     timer = 300;
//     timerElement.textContent = `Time Left: ${timer} seconds`;
// }

// function startTimer() {
//     interval = setInterval(() => {
//         timer--;
//         timerElement.textContent = `Time Left: ${timer} seconds`;
//         if (timer <= 0) {
//             clearInterval(interval);
//             endGame("Time's up! Final score:");
//         }
//     }, 1000);
// }

// function moveTo(index) {
//     if (!isAdjacent(index)) return;

//     updateTileColor(currentTileIndex, "#ccc");
//     currentTileIndex = index;
//     updateTileColor(currentTileIndex, "#4caf50");

//     if (index == 24) {
//         endGame("Congratulations! Final score:");
//         return;
//     }

//     const tile = document.querySelector(`[data-index='${index}']`);
//     if (tile.dataset.scenario === "true") {
//         presentScenario(index);
//     }
// }

// function isAdjacent(targetIndex) {
//     const rowSize = 5;
//     const row = Math.floor(currentTileIndex / rowSize);
//     const col = currentTileIndex % rowSize;
//     const tRow = Math.floor(targetIndex / rowSize);
//     const tCol = targetIndex % rowSize;

//     return (
//         (row === tRow && Math.abs(col - tCol) === 1) ||
//         (col === tCol && Math.abs(row - tRow) === 1)
//     );
// }

// function updateTileColor(index, color) {
//     const tile = document.querySelector(`[data-index='${index}']`);
//     if (tile) tile.style.backgroundColor = color;
// }

// function presentScenario(tileIndex) {
//     const scenario = scenarios[Math.floor(Math.random() * scenarios.length)];
//     questionElement.textContent = scenario.question;
//     optionsElement.innerHTML = "";

//     scenario.options.forEach((option, index) => {
//         const li = document.createElement("li");
//         li.textContent = option;
//         li.classList.add("option-item");
//         li.addEventListener("click", () => checkAnswer(index, scenario, tileIndex));
//         optionsElement.appendChild(li);
//     });

//     scenarioModal.classList.remove("hidden");
// }
// function checkAnswer(selected, scenario, tileIndex) {
//     explanationElement.textContent = scenario.explanation;
//     explanationElement.classList.remove("hidden");
//     continueButton.classList.remove("hidden");

//     const optionItems = document.querySelectorAll(".option-item");
//     optionItems.forEach((li, i) => {
//         li.style.pointerEvents = "none";
//         if (i === scenario.correct) {
//             li.classList.add("correct");
//         } else if (i === selected) {
//             li.classList.add("wrong");
//         }
//     });

//     if (selected === scenario.correct) {
//         streak++;
//         const points = 10; // Always +10, not multiplied by streak unless intentional
//         score += points;
//     } else {
//         streak = 0;
//         score = Math.max(0, score - 10); // Don't go below 0
//         timer = Math.max(0, timer - 10);
//         wrongTileIndex = tileIndex;
//     }

//     updateScore();
// }


// continueButton.addEventListener("click", () => {
//     scenarioModal.classList.add("hidden");
//     explanationElement.classList.add("hidden");
//     continueButton.classList.add("hidden");

//     if (wrongTileIndex !== null) {
//         moveToTileAfterWrongAnswer(wrongTileIndex);
//         wrongTileIndex = null;
//     }
// });

// function moveToTileAfterWrongAnswer(tileIndex) {
//     updateTileColor(currentTileIndex, "#ccc");
//     currentTileIndex = tileIndex;
//     updateTileColor(currentTileIndex, "#4caf50");

//     if (currentTileIndex === 24) {
//         endGame("Congratulations! Final score:");
//     }
// }

// function updateScore() {
//     scoreDisplay.textContent = `Score: ${score}/${totalScore}`;
// }


// function endGame(message) {
//     clearInterval(interval);
//     finalScoreElement.innerHTML = `
//         <p>${message}</p>
//         <p><strong>${score}/${totalScore}</strong></p>
//     `;
//     finalScoreModal.classList.remove("hidden");
// }

// restartButton.addEventListener("click", () => {
//     finalScoreModal.classList.add("hidden");
//     resetGameVariables();
//     clearInterval(interval);
//     startGame();
// });

// // Arrow key movement
// document.addEventListener("keydown", function (e) {
//     if (!scenarioModal.classList.contains("hidden")) return;

//     const rowSize = 5;
//     let target = currentTileIndex;

//     switch (e.key) {
//         case "ArrowUp":
//             target -= rowSize;
//             break;
//         case "ArrowDown":
//             target += rowSize;
//             break;
//         case "ArrowLeft":
//             if (currentTileIndex % rowSize !== 0) target -= 1;
//             break;
//         case "ArrowRight":
//             if ((currentTileIndex + 1) % rowSize !== 0) target += 1;
//             break;
//         default:
//             return;
//     }

//     const tile = document.querySelector(`[data-index='${target}']`);
//     if (tile) moveTo(target);
// });
// Import scenarios from the external file
// import { scenarios } from './game_scenarios.mjs';

// const gameBoard = document.getElementById("game-board");
// const timerElement = document.getElementById("timer");
// const scenarioModal = document.getElementById("scenario-modal");
// const questionElement = document.getElementById("scenario-question");
// const optionsElement = document.getElementById("scenario-options");
// const explanationElement = document.getElementById("scenario-explanation");
// const continueButton = document.getElementById("continue");
// const scoreDisplay = document.getElementById("score");
// const finalScoreModal = document.getElementById("final-score-modal");
// const finalScoreElement = document.getElementById("final-score");
// const restartButton = document.getElementById("restart");

// let timer = 300; // 5 minutes timer
// let interval;
// let currentTileIndex = 0;
// let score = 0;
// let totalScore = 0;
// let streak = 0;
// let wrongTileIndex = null; // Track the tile to move to after wrong answer

// document.getElementById("start-game").addEventListener("click", startGame);

// function startGame() {
//     document.querySelector(".instructions").classList.add("hidden");
//     document.getElementById("game-container").classList.remove("hidden");
//     initializeBoard();
//     resetTimer();
//     startTimer();
//     resetGameVariables();
//     updateScore();
// }

// function initializeBoard() {
//     gameBoard.innerHTML = "";
//     totalScore = 0; // Reset total score
//     for (let i = 0; i < 25; i++) {
//         const tile = document.createElement("div");
//         tile.classList.add("tile");
//         tile.dataset.index = i;
//         if (i === 0) tile.classList.add("green");
//         else if (i === 24) tile.classList.add("yellow");
//         else if (Math.random() < 0.6) {
//             tile.dataset.scenario = "true";
//             totalScore += 10; // Each tile with a scenario adds potential points
//         }
//         tile.addEventListener("click", () => handleTileClick(tile));
//         gameBoard.appendChild(tile);
//     }
// }

// function resetTimer() {
//     clearInterval(interval);
//     timer = 300; // 5 minutes
//     timerElement.textContent = `Time Left: ${timer} seconds`;
// }

// function startTimer() {
//     interval = setInterval(() => {
//         timer--;
//         timerElement.textContent = `Time Left: ${timer} seconds`;
//         if (timer <= 0) {
//             clearInterval(interval);
//             endGame("Time's up! Final score:");
//         }
//     }, 1000);
// }

// function resetGameVariables() {
//     score = 0;
//     streak = 0;
//     currentTileIndex = 0;
//     wrongTileIndex = null;
// }

// function handleTileClick(tile) {
//     const tileIndex = parseInt(tile.dataset.index);
//     if (!isAdjacent(tileIndex)) {
//         alert("You can only move to adjacent tiles!");
//         return;
//     }
//     if (tile.dataset.scenario === "true") {
//         presentScenario(tileIndex);
//     } else {
//         advanceTile(tileIndex);
//     }
// }

// function isAdjacent(targetIndex) {
//     const rowSize = 5;
//     const row = Math.floor(currentTileIndex / rowSize);
//     const col = currentTileIndex % rowSize;
//     const targetRow = Math.floor(targetIndex / rowSize);
//     const targetCol = targetIndex % rowSize;

//     return (
//         (row === targetRow && Math.abs(col - targetCol) === 1) ||
//         (col === targetCol && Math.abs(row - targetRow) === 1)
//     );
// }

// function presentScenario(tileIndex) {
//     const scenario = scenarios[Math.floor(Math.random() * scenarios.length)];
//     questionElement.textContent = scenario.question;
//     optionsElement.innerHTML = "";
//     scenario.options.forEach((option, index) => {
//         const li = document.createElement("li");
//         li.textContent = option;
//         li.classList.add("option");
//         li.addEventListener("click", () => checkAnswer(index, scenario, tileIndex));
//         optionsElement.appendChild(li);
//     });
//     scenarioModal.classList.remove("hidden");
// }

// function checkAnswer(selected, scenario, tileIndex) {
//     explanationElement.textContent = scenario.explanation;
//     explanationElement.classList.remove("hidden");
//     continueButton.classList.remove("hidden");
//     wrongTileIndex = null; // Reset wrongTileIndex

//     if (selected === scenario.correct) {
//         streak++;
//         const points = 10 * streak;
//         score += points;
//         alert(`Correct! You earn ${points} points. Total: ${score}`);
//         updateScore();
//         advanceTile(tileIndex);
//     } else {
//         streak = 0;
//         score = Math.max(0, score - 10);
//         timer = Math.max(0, timer - 10);
//         wrongTileIndex = tileIndex; // Set the wrong tile to move to
//         alert(`Wrong! 10 points deducted. Total: ${score}`);
//         updateScore();
//     }
// }

// continueButton.addEventListener("click", () => {
//     scenarioModal.classList.add("hidden");
//     explanationElement.classList.add("hidden");
//     continueButton.classList.add("hidden");

//     if (wrongTileIndex !== null) {
//         moveToTileAfterWrongAnswer(wrongTileIndex);
//         wrongTileIndex = null; // Reset wrongTileIndex
//     }
// });

// function moveToTileAfterWrongAnswer(tileIndex) {
//     updateTileColor(currentTileIndex, "#bbb");
//     currentTileIndex = tileIndex;
//     updateTileColor(currentTileIndex, "#4caf50");
//     if (currentTileIndex === 24) {
//         endGame("Congratulations! Final score:");
//     }
// }

// function advanceTile(tileIndex) {
//     updateTileColor(currentTileIndex, "#bbb");
//     currentTileIndex = tileIndex;
//     updateTileColor(currentTileIndex, "#4caf50");

//     if (currentTileIndex === 24) {
//         endGame("Congratulations! Final score:");
//     }

//     scenarioModal.classList.add("hidden");
//     explanationElement.classList.add("hidden");
//     continueButton.classList.add("hidden");
// }

// function updateTileColor(index, color) {
//     const tile = gameBoard.querySelector(`[data-index='${index}']`);
//     if (tile) tile.style.backgroundColor = color;
// }

// function updateScore() {
//     scoreDisplay.textContent = `Score: ${score}/${totalScore}`;
// }

// function endGame(message) {
//     clearInterval(interval); // Stop the timer
//     finalScoreElement.innerHTML = `
//         <p>${message}</p>
//         <p><strong>${score}/${totalScore}</strong></p>
//     `; // Display the final score in a styled format
//     finalScoreModal.classList.remove("hidden"); // Show the final score modal
// }

// restartButton.addEventListener("click", () => {
//     finalScoreModal.classList.add("hidden"); // Hide the final score modal
//     resetGameVariables(); // Reset game variables
//     clearInterval(interval); // Clear any existing timer
//     startGame(); // Restart the game from the beginning
// });
// Import scenarios from the external file
// import { scenarios } from './game_scenarios.mjs';

// const gameBoard = document.getElementById("game-board");
// const timerElement = document.getElementById("timer");
// const scenarioModal = document.getElementById("scenario-modal");
// const questionElement = document.getElementById("scenario-question");
// const optionsElement = document.getElementById("scenario-options");
// const explanationElement = document.getElementById("scenario-explanation");
// const continueButton = document.getElementById("continue");
// const scoreDisplay = document.getElementById("score");
// const finalScoreModal = document.getElementById("final-score-modal");
// const finalScoreElement = document.getElementById("final-score");
// const restartButton = document.getElementById("restart");

// let timer = 300;
// let interval;
// let currentTileIndex = 0;
// let score = 0;
// let totalScore = 0;
// let streak = 0;
// let wrongTileIndex = null;

// document.getElementById("start-game").addEventListener("click", startGame);

// function startGame() {
//     document.querySelector(".instructions").classList.add("hidden");
//     document.getElementById("game-container").classList.remove("hidden");
//     initializeBoard();
//     resetTimer();
//     startTimer();
//     resetGameVariables();
//     updateScore();
// }

// function initializeBoard() {
//     gameBoard.innerHTML = "";
//     totalScore = 0;

//     for (let i = 0; i < 25; i++) {
//         const tile = document.createElement("div");
//         tile.classList.add("tile");
//         tile.dataset.index = i;

//         if (i === 0) tile.classList.add("blue");
//         else if (i === 24) tile.classList.add("green");
//         else if (Math.random() < 0.6) {
//             tile.dataset.scenario = "true";
//             totalScore += 10;
//         }

//         gameBoard.appendChild(tile);
//     }
// }

// function resetGameVariables() {
//     score = 0;
//     streak = 0;
//     currentTileIndex = 0;
//     wrongTileIndex = null;
// }

// function resetTimer() {
//     clearInterval(interval);
//     timer = 300;
//     timerElement.textContent = `Time Left: ${timer} seconds`;
// }

// function startTimer() {
//     interval = setInterval(() => {
//         timer--;
//         timerElement.textContent = `Time Left: ${timer} seconds`;
//         if (timer <= 0) {
//             clearInterval(interval);
//             endGame("Time's up! Final score:");
//         }
//     }, 1000);
// }

// function moveTo(index) {
//     if (!isAdjacent(index)) return;

//     updateTileColor(currentTileIndex, "#ccc");
//     currentTileIndex = index;
//     updateTileColor(currentTileIndex, "#4caf50");

//     if (index == 24) {
//         endGame("🎉 You reached the goal! Final score:");
//         return;
//     }

//     const tile = document.querySelector(`[data-index='${index}']`);
//     if (tile.dataset.scenario === "true") {
//         presentScenario(index);
//     }
// }

// function isAdjacent(targetIndex) {
//     const rowSize = 5;
//     const row = Math.floor(currentTileIndex / rowSize);
//     const col = currentTileIndex % rowSize;
//     const tRow = Math.floor(targetIndex / rowSize);
//     const tCol = targetIndex % rowSize;

//     return (
//         (row === tRow && Math.abs(col - tCol) === 1) ||
//         (col === tCol && Math.abs(row - tRow) === 1)
//     );
// }

// function updateTileColor(index, color) {
//     const tile = document.querySelector(`[data-index='${index}']`);
//     if (tile) tile.style.backgroundColor = color;
// }

// function presentScenario(tileIndex) {
//     const scenario = scenarios[Math.floor(Math.random() * scenarios.length)];
//     questionElement.textContent = scenario.question;
//     optionsElement.innerHTML = "";

//     scenario.options.forEach((option, index) => {
//         const li = document.createElement("li");
//         li.textContent = option;
//         li.classList.add("option-item");
//         li.addEventListener("click", () => checkAnswer(index, scenario, tileIndex));
//         optionsElement.appendChild(li);
//     });

//     scenarioModal.classList.remove("hidden");
// }

// function checkAnswer(selected, scenario, tileIndex) {
//     explanationElement.textContent = scenario.explanation;
//     explanationElement.classList.remove("hidden");
//     continueButton.classList.remove("hidden");

//     const optionItems = document.querySelectorAll(".option-item");
//     optionItems.forEach((li, i) => {
//         li.style.pointerEvents = "none";
//         if (i === scenario.correct) {
//             li.classList.add("correct");
//         } else if (i === selected) {
//             li.classList.add("wrong");
//         }
//     });

//     if (selected === scenario.correct) {
//         streak++;
//         score += 10;
//     } else {
//         streak = 0;
//         score = Math.max(0, score - 10);
//         timer = Math.max(0, timer - 10);
//         wrongTileIndex = tileIndex;
//     }

//     updateScore();
// }

// continueButton.addEventListener("click", () => {
//     scenarioModal.classList.add("hidden");
//     explanationElement.classList.add("hidden");
//     continueButton.classList.add("hidden");

//     if (wrongTileIndex !== null) {
//         moveToTileAfterWrongAnswer(wrongTileIndex);
//         wrongTileIndex = null;
//     }
// });

// function moveToTileAfterWrongAnswer(tileIndex) {
//     updateTileColor(currentTileIndex, "#ccc");
//     currentTileIndex = tileIndex;
//     updateTileColor(currentTileIndex, "#4caf50");

//     if (currentTileIndex === 24) {
//         endGame("🎉 You reached the goal! Final score:");
//     }
// }

// function updateScore() {
//     scoreDisplay.textContent = `🏆 Score: ${score}/${totalScore}`;
// }

// function endGame(message) {
//     clearInterval(interval);
//     finalScoreElement.innerHTML = `
//         <p>${message}</p>
//         <p><strong>${score}/${totalScore}</strong></p>
//     `;
//     finalScoreModal.classList.remove("hidden");
// }

// restartButton.addEventListener("click", () => {
//     finalScoreModal.classList.add("hidden");
//     resetGameVariables();
//     clearInterval(interval);
//     startGame();
// });

// document.addEventListener("keydown", function (e) {
//     if (!scenarioModal.classList.contains("hidden")) return;

//     const rowSize = 5;
//     let target = currentTileIndex;

//     switch (e.key) {
//         case "ArrowUp":
//             target -= rowSize;
//             break;
//         case "ArrowDown":
//             target += rowSize;
//             break;
//         case "ArrowLeft":
//             if (currentTileIndex % rowSize !== 0) target -= 1;
//             break;
//         case "ArrowRight":
//             if ((currentTileIndex + 1) % rowSize !== 0) target += 1;
//             break;
//         default:
//             return;
//     }

//     const tile = document.querySelector(`[data-index='${target}']`);
//     if (tile) moveTo(target);
// });
import { scenarios } from './game_scenarios.mjs';

const gameBoard = document.getElementById("game-board");
const timerElement = document.getElementById("timer");
const scenarioModal = document.getElementById("scenario-modal");
const questionElement = document.getElementById("scenario-question");
const optionsElement = document.getElementById("scenario-options");
const explanationElement = document.getElementById("scenario-explanation");
const continueButton = document.getElementById("continue");
const scoreDisplay = document.getElementById("score");
const finalScoreModal = document.getElementById("final-score-modal");
const finalScoreElement = document.getElementById("final-score");
const restartButton = document.getElementById("restart");

let timer = 300;
let interval;
let currentTileIndex = 0;
let score = 0;
let totalScore = 0;
let wrongTileIndex = null;

document.getElementById("start-game").addEventListener("click", startGame);

function startGame() {
    document.querySelector(".instructions").classList.add("hidden");
    document.getElementById("game-container").classList.remove("hidden");
    resetGameVariables();
    initializeBoard();
    resetTimer();
    startTimer();
    updateScore();
}

function resetGameVariables() {
    score = 0;
    totalScore = 0;
    currentTileIndex = 0;
    wrongTileIndex = null;
}

function initializeBoard() {
    gameBoard.innerHTML = "";
    for (let i = 0; i < 25; i++) {
        const tile = document.createElement("div");
        tile.classList.add("tile");
        tile.dataset.index = i;
        if (i === 0) tile.classList.add("blue");
        else if (i === 24) tile.classList.add("green");
        else if (Math.random() < 0.6) {
            tile.dataset.scenario = "true";
        }
        gameBoard.appendChild(tile);
    }
}

function resetTimer() {
    clearInterval(interval);
    timer = 300;
    timerElement.textContent = `Time Left: ${timer} seconds`;
}

function startTimer() {
    interval = setInterval(() => {
        timer--;
        timerElement.textContent = `Time Left: ${timer} seconds`;
        if (timer <= 0) {
            clearInterval(interval);
            endGame("⏳ Time's up! Final score:");
        }
    }, 1000);
}

function moveTo(index) {
    if (!isAdjacent(index)) return;

    updateTileColor(currentTileIndex, "#ccc");
    currentTileIndex = index;
    updateTileColor(currentTileIndex, "#4caf50");

    if (index == 24) {
        endGame("🎉 You reached the goal! Final score:");
        return;
    }

    const tile = document.querySelector(`[data-index='${index}']`);
    if (tile.dataset.scenario === "true") {
        presentScenario(index);
    }
}

function isAdjacent(targetIndex) {
    const rowSize = 5;
    const row = Math.floor(currentTileIndex / rowSize);
    const col = currentTileIndex % rowSize;
    const tRow = Math.floor(targetIndex / rowSize);
    const tCol = targetIndex % rowSize;

    return (
        (row === tRow && Math.abs(col - tCol) === 1) ||
        (col === tCol && Math.abs(row - tRow) === 1)
    );
}

function updateTileColor(index, color) {
    const tile = document.querySelector(`[data-index='${index}']`);
    if (tile) tile.style.backgroundColor = color;
}

function presentScenario(tileIndex) {
    const tile = document.querySelector(`[data-index='${tileIndex}']`);
    if (tile) {
        delete tile.dataset.scenario;
        totalScore += 10;
        updateScore();
    }

    const scenario = scenarios[Math.floor(Math.random() * scenarios.length)];
    questionElement.textContent = scenario.question;
    optionsElement.innerHTML = "";

    scenario.options.forEach((option, index) => {
        const li = document.createElement("li");
        li.textContent = option;
        li.classList.add("option-item");
        li.addEventListener("click", () => checkAnswer(index, scenario, tileIndex));
        optionsElement.appendChild(li);
    });

    scenarioModal.classList.remove("hidden");
}

function checkAnswer(selected, scenario, tileIndex) {
    explanationElement.textContent = scenario.explanation;
    explanationElement.classList.remove("hidden");
    continueButton.classList.remove("hidden");

    const optionItems = document.querySelectorAll(".option-item");
    optionItems.forEach((li, i) => {
        li.style.pointerEvents = "none";
        if (i === scenario.correct) li.classList.add("correct");
        else if (i === selected) li.classList.add("wrong");
    });

    if (selected === scenario.correct) {
        score += 10;
    } else {
        wrongTileIndex = tileIndex;
    }

    updateScore();
}

continueButton.addEventListener("click", () => {
    scenarioModal.classList.add("hidden");
    explanationElement.classList.add("hidden");
    continueButton.classList.add("hidden");

    if (wrongTileIndex !== null) {
        moveToTileAfterWrongAnswer(wrongTileIndex);
        wrongTileIndex = null;
    }
});

function moveToTileAfterWrongAnswer(tileIndex) {
    updateTileColor(currentTileIndex, "#ccc");
    currentTileIndex = tileIndex;
    updateTileColor(currentTileIndex, "#4caf50");

    if (currentTileIndex === 24) {
        endGame("🎉 You reached the goal! Final score:");
    }
}

function updateScore() {
    scoreDisplay.textContent = `🏆 Score: ${score}/${totalScore}`;
}

function endGame(message) {
    clearInterval(interval);
    finalScoreElement.innerHTML = `
        <p>${message}</p>
        <p><strong>${score}/${totalScore}</strong></p>
    `;
    finalScoreModal.classList.remove("hidden");
}

restartButton.addEventListener("click", () => {
    finalScoreModal.classList.add("hidden");
    resetGameVariables();
    clearInterval(interval);
    startGame();
});

document.addEventListener("keydown", function (e) {
    if (!scenarioModal.classList.contains("hidden")) return;

    const rowSize = 5;
    let target = currentTileIndex;

    switch (e.key) {
        case "ArrowUp": target -= rowSize; break;
        case "ArrowDown": target += rowSize; break;
        case "ArrowLeft":
            if (currentTileIndex % rowSize !== 0) target -= 1;
            break;
        case "ArrowRight":
            if ((currentTileIndex + 1) % rowSize !== 0) target += 1;
            break;
        default: return;
    }

    const tile = document.querySelector(`[data-index='${target}']`);
    if (tile) moveTo(target);
});
