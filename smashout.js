import Game from './lib/game.js';
import Ball from './lib/ball.js';
// import GameView from './lib/game_view.js';


document.addEventListener("DOMContentLoaded", () => {
  const game = new Game(ctx);
  // new GameView(game, ctx);
});

const canvasEl = document.getElementById("smashout");
const ctx = canvasEl.getContext("2d");
const ball = new Ball();
ball.drawBall();

let x = canvasEl.width/2;
let y = canvasEl.height - 30;
let dx = 0;
let dy = -2;

function draw() {
  ctx.clearRect(0, 0, canvasEl.width, canvasEl.height);
  ball.drawBall(x, y);
  x += dx;
  y += dy;
  if(y + dy < 0) {
    dy = -dy;
  }
}

// setInterval(draw, 10);
