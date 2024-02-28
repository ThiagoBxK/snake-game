import { canvasFillRect, randomPosition } from "./functions.js";

class Apple {
  constructor(canvas, boardSize, snake) {
    this.canvas = canvas;
    this.context = canvas.getContext("2d");
    this.snake = snake;
    this.boardSize = boardSize;
    this.apples = [];
  }

  spawn(position) {
    position = position || randomPosition(this.boardSize);

    this.apples.push(position);
    this.drawApple(position);
  }

  // Remove a maça e incrementa tamanho na cobra
  removeApple(index) {
    this.apples.splice(index, 1);
    this.snake.incrementSize();
  }

  // Quando a cobra se colide com a maça
  colision(snakePosition) {
    const indexToRemove = this.apples.findIndex(
      (apple) => JSON.stringify(snakePosition) === JSON.stringify(apple)
    );

    indexToRemove !== -1 && this.removeApple(indexToRemove);
  }

  update(snakePosition) {
    this.colision(snakePosition);

    for (const apple of this.apples) {
      this.drawApple(apple);
    }
  }

  // Desenha a cobra
  drawApple(position) {
    canvasFillRect(this.canvas, position, this.boardSize, "blue");
  }
}

export default Apple;
