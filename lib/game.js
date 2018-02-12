import Ball from './ball.js';
import Paddle from './paddle.js';

export default class Game {
  constructor(ctx, canvasEl, ball) {
    this.canvasEl = canvasEl;
    this.ctx = ctx;
    let options;

    let ballPos = [canvasEl.width/2, canvasEl.height - 10];
    options = {pos: ballPos};
    this.ball = new Ball(options);

    let paddlePos = [canvasEl.width/2, canvasEl.height - 20];
    options = {pos: paddlePos};
    this.paddle = new Paddle(options);
  }

  // addBall() {
  //   this.ball.drawBall(this.ctx);
  // }

  draw(ctx) {
    ctx.clearRect(0, 0, 600, 600); // need to use canvas w/h
    this.ball.drawBall(this.ctx);
    this.ball.moveBall();
    this.paddle.drawPaddle(this.ctx);
    // ctx.fillRect(300, 300, 50, 10);

  }
}
