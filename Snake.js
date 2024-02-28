import { canvasFillRect, randomPosition } from "./functions.js";

class Snake {
  constructor(canvas, boardSize, cellSize) {
    this.canvas = canvas;
    this.context = canvas.getContext("2d");
    this.cellSize = cellSize;

    this.lastKeyPress = null;
    this.boardSize = boardSize;
    this.snake = {
      position: randomPosition(this.boardSize),
    };

    this.drawSnake();
  }

  // Incrementa tamanho na cobra
  incrementSize() {
    // Incrementa tamanho
  }

  // Redesenha a cobra na nova posição
  update(position) {
    this.calculeColision(position);
    this.drawSnake(position);
  }

  // Desenha a cobra
  drawSnake(position) {
    position = position || this.snake.position;

    canvasFillRect(this.context, position, this.cellSize, "red");
  }

  // Calcula a colisão com a parede
  calculeColision(position) {
    if (position.y <= -1 || position.y > this.boardSize.y - 1)
      alert("Game Over");
    else if (position.x <= -1 || position.x > this.boardSize.x - 1)
      alert("Game Over");
  }

  move(command, callback) {
    const movements = {
      ArrowUp: () => {
        this.snake.position.y--;

        this.lastKeyPress = "ArrowUp";
        return this.snake.position;
      },
      ArrowLeft: () => {
        this.snake.position.x--;

        this.lastKeyPress = "ArrowLeft";
        return this.snake.position;
      },
      ArrowDown: () => {
        this.snake.position.y++;

        this.lastKeyPress = "ArrowDown";
        return this.snake.position;
      },
      ArrowRight: () => {
        this.snake.position.x++;

        this.lastKeyPress = "ArrowRight";
        return this.snake.position;
      },
    };

    callback((movements[command] && movements[command]()) || false);
  }
}

export default Snake;
