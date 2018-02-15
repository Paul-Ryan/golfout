import Ball from './ball';
import Paddle from './paddle';
import Bricks from './bricks';
import Hole from './hole';
import Util from './util';
import Sound from './sound';

const SCORES = {
  0: "zero strokes!!!",
  1: "Hole in 1!",
  2: "Double Eagle",
  3: "Eagle",
  4: "Birdie",
  5: "Par",
  6: "Bogey",
  7: "Double Bogey",
  8: "Triple Bogey",
  9: "Just playing for fun :)",
  10: "Pick up your ball"
};

const POWERS = {
  blue: "Minus two strokes",
};

const bounce = document.getElementById("myAudio");


export default class Game {
  constructor(ctx, canvasEl, ball) {
    this.canvasEl = canvasEl;
    this.ctx = ctx;
    this.theme = new Sound("./sound/theme.mp3");
    this.music = false;

    this.score = 0;
    this.level = 1;
    this.over = false;

    this.bricks = new Bricks({game: this});
    this.hole = new Hole({game: this});
    this.ball = new Ball({game: this});
    this.paddle = new Paddle({game: this});

    this.bricksArr = this.bricks.setupBricks([]);
    this.powerups = [];
    this.powerMessages= [];


    this.keyDownHandler = this.keyDownHandler.bind(this); //set this to game
    this.keyUpHandler = this.keyUpHandler.bind(this);
    this.mouseMoveHandler = this.mouseMoveHandler.bind(this);
    this.gameOver = this.gameOver.bind(this);
  }

  start(){

    // this.interval = setInterval((() => this.draw(this.ctx)), 1000/60);
    if (this.music) {
      this.theme.play();
    }
  }

  addListeners() {
    document.addEventListener("keydown", this.keyDownHandler);
    document.addEventListener("keyup", this.keyUpHandler);
    document.addEventListener("mousemove", this.mouseMoveHandler, false);
  }

  // game over logic by Seth
  // https://github.com/thraxxed
  gameOver() {
    clearInterval(this.interval);
    let score = this.score;

    this.ctx.fillText(`Strokes: ${score}`, 255, 275);
    this.ctx.fillText(`Score: ${SCORES[score]}`, 255, 305);
    this.over = true;
  }

  drawScore() {
    this.ctx.font = "16px Arial";
    this.ctx.fillStyle = "#000000";
    this.ctx.fillText("Strokes: "+this.score, 8, 20);
  }

  drawMessages(messageKeys) {
    messageKeys.forEach(key => {
      this.ctx.font = "16px Arial";
      this.ctx.fillStyle = "#000000";
      this.ctx.fillText(`${POWERS[key]}`, 8, 40);
    });
  }

  draw(ctx) {
    ctx.clearRect(0, 0, this.canvasEl.width, this.canvasEl.height);
    this.bricks.drawBricks(this.ctx);
    this.hole.draw(this.ctx);
    this.bricks.colideWith(this.ball);
    this.drawScore();
    if (this.score === 10) {
      this.gameOver();
    }
    // powerups
    this.powerups.forEach((powerup) => {
      powerup.draw(ctx);
      powerup.move();
      this.paddle.collectPowerup(powerup);
    });

    this.drawMessages(this.powerMessages);

    this.ball.draw(this.ctx);
    this.hole.contactWith(this.ball);
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
    if (xPos > 0 && xPos < this.canvasEl.width) {
        this.paddle.pos[0] = xPos - moveLimit;
    }
  }
}

Game.DIM_X = 600;
Game.DIM_Y = 600;
