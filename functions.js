// Gerar uma posição X e Y aleatoria com base no tamanho do tabuleiro
function randomPosition(boardSize) {
  const position = {
    x: parseInt(Math.random() * boardSize.x),
    y: parseInt(Math.random() * boardSize.y),
  };

  return position;
}

// Obtém o tamanho de píxeis x e y que cada célula vai ocupar no tabuleiro
function getCellSize(canvas, boardSize) {
  const cellSize = {
    x: canvas.width / boardSize.x,
    y: canvas.height / boardSize.y,
  };

  return cellSize;
}

// Desenha algo na tela
function canvasFillRect(canvas, position, boardSize, color) {
  const context = canvas.getContext("2d");
  const cellSize = getCellSize(canvas, boardSize);

  // Tamanho que cada celula vai ocupar dependendendo do tamanho do canvas
  context.fillStyle = color;
  context.fillRect(
    position.x * cellSize.x,
    position.y * cellSize.y,
    cellSize.x,
    cellSize.y
  );
}

export { randomPosition, canvasFillRect, getCellSize };
