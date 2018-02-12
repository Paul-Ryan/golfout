import Game from './game.js';

export default class GameView {
  constructor(game, ctx) {
    this.ctx = ctx;
    this.game = game;
    this.ball = this.game.addBall();
  }
}
