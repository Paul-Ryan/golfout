import Game from './lib/game.js';
import Ball from './lib/ball.js';
import Paddle from './lib/paddle.js';
// import GameView from './lib/game_view.js';

document.addEventListener("DOMContentLoaded", () => {
  // const game = new Game(ctx);
});

const canvasEl = document.getElementById("smashout");
const ctx = canvasEl.getContext("2d");
const game = new Game(ctx, canvasEl);

document.addEventListener("keydown", game.keyDownHandler);
document.addEventListener("keyup", game.keyUpHandler);

function draw() {
  game.draw(ctx);
}

let brickRowCount = 3;
let brickColumnCount = 5;
let brickWidth = 75;
let brickHeight = 20;
let brickPadding = 10;
let brickOffsetTop = 30;
let brickOffsetLeft = 30;

let bricks = [];
for(let c=0; c < brickColumnCount; c++) {
  bricks[c] = [];
  for(let r=0; r < brickRowCount; r++) {
    bricks[c][r] = { x: 0, y: 0 };
  }
}

function drawBricks() {
  for (var c = 0; c < brickColumnCount; c++) {
    for (var r = 0; r < brickRowCount; r++) {
      let brickX = (c*(brickWidth+brickPadding))+brickOffsetLeft;
      let brickY = (r*(brickHeight+brickPadding))+brickOffsetTop;
      bricks[c][r].x = 0;
      bricks[c][r].y = 0;
      ctx.beginPath();
      ctx.rect(0, 0, brickWidth, brickHeight);
      ctx.fillStyle = "#0095DD";
      ctx.fill();
      ctx.closePath();
    }
  }
}



setInterval(draw, 1000/60);
// setInterval(draw, 2000);
