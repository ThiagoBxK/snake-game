import Background from "./Background.js";
const canvas = document.getElementById("game"); // Colunas e linhas do tabuleiro

const boardSize = {
  x: 15,
  y: 15,
};

const background = new Background(canvas, boardSize);

// // Posição aleatoria, onde a cobra ira spawnar
function randomPosition() {
  const position = {
    x: parseInt(Math.random() * size.x),
    y: parseInt(Math.random() * size.y),
  };

  return position;
}

const snake = {
  position: { x: 1, y: 1 }, //randomPosition(),
  moveRight() {
    this.position.x++;

    updateGame();
  },
  moveLeft() {
    this.position.x--;

    updateGame();
  },
  moveUp() {
    this.position.y--;

    updateGame();
  },
  moveDown() {
    this.position.y++;

    updateGame();
  },
};

// Desenha a cobra
function drawSnake(position) {
  const context = canvas.getContext("2d");
  const cellSize = background.cellSize;

  // Tamanho de cada celúla
  context.fillStyle = "red";
  context.fillRect(
    position.x * cellSize.x,
    position.y * cellSize.y,
    cellSize.x,
    cellSize.y
  );
}

// Calcula a colisão com a parede
function calculeColision(position, boardSize) {
  if (position.y <= -1 || position.y > boardSize.y - 1) alert("Game Over");
  else if (position.x <= -1 || position.x > boardSize.x - 1) alert("Game Over");
}

function updateGame() {
  background.update();

  drawSnake(snake.position);
  calculeColision(snake.position, boardSize);
}

updateGame();

// document.addEventListener("keydown", (event) => {
//   if (event.code === "KeyD" || event.code === "ArrowRight") {
//     snake.moveRight();
//   } else if (event.code === "KeyA" || event.code === "ArrowLeft") {
//     snake.moveLeft();
//   } else if (event.code === "KeyW" || event.code === "ArrowUp") {
//     snake.moveUp();
//   } else if (event.code === "KeyS" || event.code === "ArrowDown") {
//     snake.moveDown();
//   }
// });
