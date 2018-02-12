import Ball from './ball.js';
import Paddle from './paddle.js';

export default class Game {
  constructor(ctx, canvasEl, ball) {
    this.canvasEl = canvasEl;
    this.ctx = ctx;

    let ballPos = [canvasEl.width/2, canvasEl.height - 10];
    let options = {pos: ballPos};
    this.ball = new Ball(options);

    // this.paddle = new Paddle();
  }

  addBall() {
    this.ball.drawBall(this.ctx);
  }

  draw(ctx) {
    ctx.clearRect(0, 0, 600, 600); // need to use canvas w/h
    this.ball.drawBall();
    this.ball.moveBall();
  }


}
