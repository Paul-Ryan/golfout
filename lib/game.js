import Ball from './ball.js';

export default class Game {
  constructor(ctx, ball) {
    this.ctx = ctx;
    this.ball = new Ball;
  }

  addBall() {
    this.ball.drawBall(this.ctx);
  }
}
