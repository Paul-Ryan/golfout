import Game from './lib/game.js';
import Ball from './lib/ball.js';
import Paddle from './lib/paddle.js';
// import GameView from './lib/game_view.js';


document.addEventListener("DOMContentLoaded", () => {
  const game = new Game(ctx);
  // new GameView(game, ctx);
});

const canvasEl = document.getElementById("smashout");
const ctx = canvasEl.getContext("2d");
const ball = new Ball();
const paddle = new Paddle();

ball.drawBall();
paddle.drawPaddle();

let x = 300;
let y = canvasEl.height - 10;
let dx = 1.5;
let dy = -2;

function draw() {
  ctx.clearRect(0, 0, canvasEl.width, canvasEl.height);
  ball.drawBall(x, y);
  x += dx;
  y += dy;
  if (y + dy < ball.radius) {
    dy = -dy;
  }
  if (x + dx > canvasEl.width - ball.radius) {
    dx = -dx;
  }
  if (y + dy > canvasEl.height - ball.radius) {
    dy = -dy;
  }
  if (x + dx < ball.radius) {
    dx = -dx;
  }
}

setInterval(draw, 10);
