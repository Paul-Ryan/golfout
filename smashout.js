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

document.addEventListener("keydown", keyDownHandler);
document.addEventListener("keyup", keyUpHandler);

let rightPressed = false;
let leftPressed = false;

function keyDownHandler(e) {
  if (e.keyCode === 37) {
    leftPressed = true;
  } else if (e.keyCode === 39) {
    rightPressed = true;
  }
}

function keyUpHandler(e) {
  if (e.keyCode === 37) {
    leftPressed = false;
  } else if (e.keyCode === 39) {
    rightPressed = false;
  }
}

function draw() {
  game.draw(ctx);
}

setInterval(draw, 1000/60);
// setInterval(draw, 2000);
