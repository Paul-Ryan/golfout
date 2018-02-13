import Ball from './ball.js';
import Paddle from './paddle.js';
import Bricks from './bricks';

export default class Game {
  constructor(ctx, canvasEl, ball) {
    this.canvasEl = canvasEl;
    this.ctx = ctx;
    this.score = 0;
    this.bricks = new Bricks;

    this.bricksArr = this.bricks.setupBricks([]);

    let options;
    let ballPos = [canvasEl.width/2, canvasEl.height - 10];
    options = {pos: ballPos};
    this.ball = new Ball(options);

    let paddlePos = [canvasEl.width/2, canvasEl.height - 20];
    options = {pos: paddlePos};
    this.paddle = new Paddle(options);
    this.keyDownHandler = this.keyDownHandler.bind(this); //set this to game
    this.keyUpHandler = this.keyUpHandler.bind(this);
  }



  draw(ctx) {
    ctx.clearRect(0, 0, this.canvasEl.width, this.canvasEl.height);
    this.bricks.drawBricks(this.ctx);
    this.ball.draw(this.ctx);
    this.ball.hitPaddle(this.paddle);
    this.ball.moveBall();
    this.paddle.draw(this.ctx);
  }

  keyDownHandler(e) {
    if (e.keyCode === 37) {
      this.paddle.movePaddle(-10);
    } else if (e.keyCode === 39) {
      this.paddle.movePaddle(10);
    }
  }

  keyUpHandler(e) {
    if (e.keyCode === 37) {
      this.leftPressed = false;
    } else if (e.keyCode === 39) {
      this.rightPressed = false;
    }
  }
}
