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
document.addEventListener("mousemove", game.mouseMoveHandler, false);

function draw() {
  game.draw(ctx);
}


setInterval(draw, 1000/60);
// setInterval(draw, 2000);


// todo:

// adjust bounce based on paddle contact point
// add hole
// add victory/loss messages
// learn about requestAnimationFrame
// improve physics of ball
// improve physics of bounces
// add powerup
// add level 2

// add sound effects
