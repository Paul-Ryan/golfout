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

setInterval(draw, 1000/60);
// setInterval(draw, 2000);
