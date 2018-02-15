import Game from './lib/game.js';
import Ball from './lib/ball.js';
import Paddle from './lib/paddle.js';
import GameView from './lib/game_view.js';
import StartScreen from './lib/start_screen';

document.addEventListener("DOMContentLoaded", () => {
  const canvasEl = document.getElementById("smashout");
  canvasEl.width = Game.DIM_X;
  canvasEl.height = Game.DIM_Y;
  const ctx = canvasEl.getContext("2d");
  const game = new Game(ctx, canvasEl).start();
});


// todo:

// stop animation frame, pause?;
// improve physics of ball
// improve physics of bounces
// add level 2
// add start message and keypress to start
// add block health

// add sound effects

// // setup start screen, allow mute
// // add end game
// // add effects to all objects
// // imporove sound with web audio api
