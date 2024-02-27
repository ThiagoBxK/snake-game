// Gerar uma posição X e Y aleatoria com base no tamanho do tabuleiro
function randomPosition(boardSize) {
  const position = {
    x: parseInt(Math.random() * boardSize.x),
    y: parseInt(Math.random() * boardSize.y),
  };

  return position;
}

// Desenha algo na tela
function canvasFillRect(context, position, cellSize, color) {
  context.fillStyle = color;
  context.fillRect(
    position.x * cellSize.x,
    position.y * cellSize.y,
    cellSize.x,
    cellSize.y
  );
}

export { randomPosition, canvasFillRect };
