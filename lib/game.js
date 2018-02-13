import Ball from './ball.js';
import Paddle from './paddle.js';
import Bricks from './bricks';
import Hole from './hole';
import Util from './util';

export default class Game {
  constructor(ctx, canvasEl, ball) {
    this.canvasEl = canvasEl;
    this.ctx = ctx;
    this.score = 0;
    this.bricks = new Bricks({game: this});
    this.hole = new Hole();

    this.bricksArr = this.bricks.setupBricks([]);

    // set pos above paddle and drop after implementing paddle hits
    let options;
    let ballPos = [canvasEl.width/2, canvasEl.height - 10];
    options = {pos: ballPos};
    this.ball = new Ball(options);
    this.paddle = new Paddle({game: this});

    this.keyDownHandler = this.keyDownHandler.bind(this); //set this to game
    this.keyUpHandler = this.keyUpHandler.bind(this);
    this.mouseMoveHandler = this.mouseMoveHandler.bind(this);
  }

  drawScore() {
    this.ctx.font = "16px Arial";
    this.ctx.fillStyle = "#000000";
    this.ctx.fillText("Strokes: "+this.score, 8, 20);
  }

  draw(ctx) {
    ctx.clearRect(0, 0, this.canvasEl.width, this.canvasEl.height);
    this.bricks.drawBricks(this.ctx);
    this.hole.draw(this.ctx);
    this.bricks.colideWith(this.ball);
    this.drawScore();
    if (this.score === 10) {
      // alert("Bogey!");
      document.location.reload();
    }
    this.ball.draw(this.ctx);
    // this.ball.hitPaddle(this.paddle);
    this.paddle.contactWith(this.ball);
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

  mouseMoveHandler(e) {
    let xPos = e.clientX - this.canvasEl.offsetLeft;
    let moveLimit = this.paddle.width/2;
    if (xPos > moveLimit && xPos < this.canvasEl.width - moveLimit) {
        this.paddle.pos[0] = xPos - moveLimit;
    }
  }
}
