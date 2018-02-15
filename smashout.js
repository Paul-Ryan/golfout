import Game from './lib/game.js';
import Ball from './lib/ball.js';
import Paddle from './lib/paddle.js';
import GameView from './lib/game_view.js';

document.addEventListener("DOMContentLoaded", () => {
  const canvasEl = document.getElementById("smashout");
  canvasEl.width = Game.DIM_X;
  canvasEl.height = Game.DIM_Y;
  const ctx = canvasEl.getContext("2d");
  const game = new Game(ctx, canvasEl);
  game.addListeners();
  new GameView(game, ctx).beginLoop();
  // game.start();

});


// todo:

// X adjust bounce based on paddle contact point
// X add hole
// X add victory/loss messages
// X add powerup
// X powerup messages
// learn about requestAnimationFrame
// //  http://dev.bennage.com/blog/2012/12/07/game-dev-01/
// improve physics of ball
// improve physics of bounces
// add level 2
// add start message and kepress to start
// add block health
// refactor to allow resizing of level

// add sound effects
// // add paddle and put bounce on bricks
// // setup start screen, allow mute
// // add end game
// // add effects to all objects
// // imporove sound with web audio api
