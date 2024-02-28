import { getCellSize } from "./functions.js";

class Background {
  constructor(canvas, boardSize) {
    this.canvas = canvas;
    this.context = canvas.getContext("2d");
    this.boardSize = boardSize;
    this.cellColors = {
      primary: "rgb(170, 215, 81)",
      secondary: "rgb(162, 209, 73)",
    };
  }

  render() {
    this.drawBackground();
  }

  // Atualiza o background
  update() {
    this.drawBackground();
  }

  // Expressão que obtém a cor da próxima célula
  getCellColor(column, row) {
    const color =
      (column + row) % 2 ? this.cellColors.primary : this.cellColors.secondary;

    return color;
  }

  // Desenha a célula do jogo
  drawCell(column, row) {
    const cellSize = getCellSize(this.canvas, this.boardSize);

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
