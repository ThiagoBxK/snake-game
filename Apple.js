import { canvasFillRect, randomPosition } from "./functions.js";

class Apple {
  constructor(canvas, boardSize, cellSize) {
    this.canvas = canvas;
    this.context = canvas.getContext("2d");
    this.cellSize = cellSize;

    this.boardSize = boardSize;
    this.apples = [];
  }

  spawn(position) {
    position = position || randomPosition(this.boardSize);

    this.apples.push(position);
    this.drawApple(position);
  }

  update() {
    for (const apple of this.apples) {
      this.drawApple(apple);
    }
  }

  // Desenha a cobra
  drawApple(position) {
    canvasFillRect(this.context, position, this.cellSize, "blue");
  }
}

export default Apple;
