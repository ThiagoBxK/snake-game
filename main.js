import Background from "./Background.js";
import Snake from "./Snake.js";

(() => {
  const canvas = document.getElementById("game");
  // Colunas e linhas do tabuleiro
  const boardSize = {
    x: 15,
    y: 15,
  };

  const background = new Background(canvas, boardSize);
  const snake = new Snake(canvas, boardSize, background.cellSize);

  document.addEventListener("keydown", (event) => {
    // Move a cobra
    // KeyW, KeyA, KeyS, KeyD

    snake.move(event.code, (position) => {
      background.update();
      snake.update(position);
    });
  });
})();
