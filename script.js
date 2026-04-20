let currentPlayer = "X";
let gameBoard = ["", "", "", "", "", "", "", "", ""];
let gameOver = false;

document.querySelectorAll(".cell").forEach((cell, index) => {
  cell.addEventListener("click", () => {
    if (gameOver) return;
    if (gameBoard[index] !== "") return;
    gameBoard[index] = currentPlayer;
    cell.textContent = currentPlayer;
    checkWinner();
    currentPlayer = currentPlayer === "X" ? "O" : "X";
  });
});

document.getElementById("reset-btn").addEventListener("click", () => {
  gameBoard = ["", "", "", "", "", "", "", "", ""];
  currentPlayer = "X";
  gameOver = false;
  document.querySelectorAll(".cell").forEach((cell) => {
    cell.textContent = "";
  });
});

function checkWinner() {
  let winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (const combination of winningCombinations) {
    if (
      gameBoard[combination[0]] === gameBoard[combination[1]] &&
      gameBoard[combination[1]] === gameBoard[combination[2]] &&
      gameBoard[combination[0]] !== ""
    ) {
      gameOver = true;
      alert(`Player ${gameBoard[combination[0]]} wins!`);
      return; // stop checking after a winner is found
    }
  }

  // If no winner and the board is full, it's a draw
  if (!gameOver && !gameBoard.includes("")) {
    gameOver = true;
    alert("It's a draw!");
  }
}