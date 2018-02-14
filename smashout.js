import Game from './lib/game.js';
import Ball from './lib/ball.js';
import Paddle from './lib/paddle.js';
// import GameView from './lib/game_view.js';

document.addEventListener("DOMContentLoaded", () => {
  const canvasEl = document.getElementById("smashout");
  const ctx = canvasEl.getContext("2d");
  const game = new Game(ctx, canvasEl);
  game.addListeners();
  game.start();

});


// todo:

// X adjust bounce based on paddle contact point
// X add hole
// X add victory/loss messages
// X add powerup
// X powerup messages
// learn about requestAnimationFrame
// improve physics of ball
// improve physics of bounces
// add level 2
// add start message and kepress to start
// add block health
// refactor to allow resizing of level

// add sound effects
