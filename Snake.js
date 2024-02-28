import { canvasFillRect, randomPosition } from "./functions.js";

class Snake {
  constructor(canvas, boardSize, background) {
    this.canvas = canvas;
    this.context = canvas.getContext("2d");

    this.boardSize = boardSize;
    this.lastKeyPress = null;
    this.background = background;
    this.position = randomPosition(this.boardSize);
  }

  // Incrementa tamanho na cobra
  incrementSize() {}

  // Redesenha a cobra na nova posição
  update(position) {
    this.calculeColision(position);
    this.drawSnake(position);
  }

  // Desenha a cobra
  drawSnake() {
    canvasFillRect(this.canvas, this.position, this.boardSize, "red");
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
        this.position.y--;

        this.lastKeyPress = "ArrowUp";
        return this.position;
      },
      ArrowLeft: () => {
        this.position.x--;

        this.lastKeyPress = "ArrowLeft";
        return this.position;
      },
      ArrowDown: () => {
        this.position.y++;

        this.lastKeyPress = "ArrowDown";
        return this.position;
      },
      ArrowRight: () => {
        this.position.x++;

        this.lastKeyPress = "ArrowRight";
        return this.position;
      },
    };

    callback((movements[command] && movements[command]()) || false);
  }
}

export default Snake;
