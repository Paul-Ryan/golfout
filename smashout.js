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

let ballPos = [canvasEl.width/2, canvasEl.height - 10];
let movement = [1.4, -2];
// let dx = 1.2;
// let dy = -2;

let paddlePos = [canvasEl.width/2, canvasEl.height - 20];

function draw() {
  ctx.clearRect(0, 0, canvasEl.width, canvasEl.height);
  ball.drawBall(ballPos);
  paddle.drawPaddle(paddlePos);

  ballPos[0] += movement[0];
  ballPos[1] += movement[1];

  if (ballPos[1] < ball.radius) {
    movement[1] *= -1;
  }
  if (ballPos[0] > canvasEl.width - ball.radius) {
    movement[0] *= -1;
  }
  if (ballPos[1] > canvasEl.height - ball.radius) {
    movement[1] *= -1;
  }
  if (ballPos[0] < ball.radius) {
    movement[0] *= -1;
  }
}

setInterval(draw, 1000/60);
