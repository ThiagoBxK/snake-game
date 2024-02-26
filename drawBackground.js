const cellColors = {
  primary: "rgb(170, 215, 81)",
  secondary: "rgb(162, 209, 73)",
};

// Expressão que retorna a cor da proxima célula
function getCellColor(column, row) {
  const color = (column + row) % 2 ? cellColors.primary : cellColors.secondary;
  return color;
}

function drawCell(canvas, size, column, row) {
  const context = canvas.getContext("2d");

  // Tamanho de cada celúla
  const cellSize = {
    x: canvas.width / size.x,
    y: canvas.height / size.y,
  };

  context.fillStyle = getCellColor(column, row);
  context.fillRect(
    row * cellSize.x,
    column * cellSize.y,
    cellSize.x,
    cellSize.y
  );
}

// Desenha o background do jogo
function drawBackground(canvas, size) {
  for (let columnIndex = 0; columnIndex < size.x; columnIndex++) {
    for (let rowIndex = 0; rowIndex < size.y; rowIndex++) {
      drawCell(canvas, size, columnIndex, rowIndex);
    }
  }
}

export default drawBackground;

// Futuramente em uma classe
