class Snake {
  constructor(canvas, boardSize, cellSize) {
    this.canvas = canvas;
    this.context = canvas.getContext("2d");
    this.cellSize = cellSize;

    this.boardSize = boardSize;
    this.snake = {
      position: this.randomSpawn(),
    };

    this.drawSnake();
  }

  // Redesenha a cobra na nova posição
  update(position) {
    this.calculeColision(position);
    this.drawSnake(position);
  }

  // Posição aleatoria, onde a cobra ira spawnar
  randomSpawn() {
    const position = {
      x: parseInt(Math.random() * this.boardSize.x),
      y: parseInt(Math.random() * this.boardSize.y),
    };

    return position;
  }

  // Desenha a cobra
  drawSnake(position) {
    position = position || this.snake.position;

    // Tamanho de cada celúla
    this.context.fillStyle = "red";
    this.context.fillRect(
      position.x * this.cellSize.x,
      position.y * this.cellSize.y,
      this.cellSize.x,
      this.cellSize.y
    );
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
      KeyW: () => {
        this.snake.position.y--;
        return this.snake.position;
      },
      KeyA: () => {
        this.snake.position.x--;
        return this.snake.position;
      },
      KeyS: () => {
        this.snake.position.y++;
        return this.snake.position;
      },
      KeyD: () => {
        this.snake.position.x++;
        return this.snake.position;
      },
    };

    callback((movements[command] && movements[command]()) || false);
  }
}

export default Snake;
