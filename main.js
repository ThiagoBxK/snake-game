import Background from "./Background.js";
import Snake from "./Snake.js";
import Apple from "./Apple.js";

class Game {
  constructor(canvas, boardSize) {
    this.canvas = canvas;
    this.context = canvas.getContext("2d");
    this.boardSize = boardSize;

    this.snake = new Snake(canvas, boardSize);
    this.background = new Background(canvas, boardSize);
    this.apple = new Apple(canvas, boardSize, this.snake);
  }

  render() {
    this.background.render();
    this.snake.drawSnake();
  }

  spawnApple() {
    this.apple.spawn();
  }
}

(() => {
  const canvas = document.getElementById("game");

  const boardSize = {
    x: 15,
    y: 15,
  };

  const game = new Game(canvas, boardSize);

  game.render();

  game.spawnApple();

  document.addEventListener("keydown", (event) => {
    // Move a cobra
    // KeyW, KeyA, KeyS, KeyD
    game.snake.move(event.code, (position) => {
      game.background.update();
      game.snake.update(position);
      game.apple.update(position);
    });
  });
})();
