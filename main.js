import drawBackground from "./drawBackground.js";

const canvas = document.getElementById("game");
const context = canvas.getContext("2d");

const size = {
  x: 20,
  y: 20,
}; // Colunas e linhas do tabuleiro

drawBackground(canvas, size);
