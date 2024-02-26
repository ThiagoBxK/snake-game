class Background {
  constructor(canvas, boardSize) {
    this._instance = null;

    this.canvas = canvas;
    this.context = canvas.getContext("2d");

    this.boardSize = boardSize;
    this.cellColors = {
      primary: "rgb(170, 215, 81)",
      secondary: "rgb(162, 209, 73)",
    };

    // Render
    this.drawBackground();
  }

  // Atualiza o background
  update() {
    this.drawBackground();
  }

  // Obtém o tamanho de píxeis x e y que cada célula vai ocupar no tabuleiro
  get cellSize() {
    const cellSize = {
      x: this.canvas.width / this.boardSize.y,
      y: this.canvas.height / this.boardSize.x,
    };

    return cellSize;
  }

  // Expressão que obtém a cor da próxima célula
  getCellColor(column, row) {
    const color =
      (column + row) % 2 ? this.cellColors.primary : this.cellColors.secondary;

    return color;
  }

  // Desenha a célula do jogo
  drawCell(column, row) {
    const cellSize = this.cellSize;

    this.context.fillStyle = this.getCellColor(column, row);
    this.context.fillRect(
      row * cellSize.x,
      column * cellSize.y,
      cellSize.x,
      cellSize.y
    );
  }

  // Passa por todo o tabuleiro desenhando cada célula
  drawBackground() {
    for (let columnIndex = 0; columnIndex < this.boardSize.x; columnIndex++) {
      for (let rowIndex = 0; rowIndex < this.boardSize.y; rowIndex++) {
        this.drawCell(columnIndex, rowIndex);
      }
    }
  }
}

export default Background;
