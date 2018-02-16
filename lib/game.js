import Ball from './ball';
import Paddle from './paddle';
import Bricks from './bricks';
import Hole from './hole';
import Util from './util';
import Sound from './sound';
import GameView from './game_view.js';


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
  constructor(ctx, canvasEl) {
    this.canvasEl = canvasEl;
    this.ctx = ctx;
    this.theme = new Sound("./sound/theme.mp3");
    this.music = false;
    this.view = new GameView(this, this.ctx);

    this.score = 0;
    this.level = 0;

    this.bricks = new Bricks({
      game: this,
      brickRowCount: 2,
      brickColumnCount: 5,
      brickWidth: 50,
      brickHeight: 15,
      brickPadding: 20,
      brickOffsetTop: 60,
      brickOffsetLeft: 130,
      brickPowerups: [[0, 0], [3, 1]],
    });
    this.hole = new Hole({game: this});
    this.ball = new Ball({game: this});
    this.paddle = new Paddle({game: this});
    this.ball.vel = [0, 0];

    this.bricksArr = this.bricks.setupBricks([]);
    this.powerups = [];
    this.powerMessages= [];

    this.keyDownHandler = this.keyDownHandler.bind(this); //set this to game
    this.keyUpHandler = this.keyUpHandler.bind(this);
    this.mouseMoveHandler = this.mouseMoveHandler.bind(this);
    this.gameOver = this.gameOver.bind(this);
    this.start = this.start.bind(this);
  }

  start(){
    if (this.level === 0 || this.level === 2 || this.level === 4) {
      this.level += 1;
      this.ball = new Ball({game: this});
      this.ball.vel = [0, 4];
    }
  }

  render() {
    this.addListeners();
    this.view.beginLoop();
  }

  addListeners() {
    document.addEventListener("keydown", this.keyDownHandler);
    document.addEventListener("keyup", this.keyUpHandler);
    document.addEventListener("mousemove", this.mouseMoveHandler, false);
    document.addEventListener("click", this.start);
  }

  menu(ctx) {
    let y = ctx.canvas.height / 2;

    ctx.fillStyle = 'white';
    ctx.font = "48px 'Source Sans Pro'";
    this.centerText(ctx, 'GolfOut', y);

    ctx.fillStyle = 'black';
    ctx.font = "24px 'Source Sans Pro'";
    this.centerText(ctx, 'click to begin', y + 30);

    ctx.fillStyle = 'black';
    ctx.font = "16px 'Source Sans Pro'";
    this.centerText(ctx, 'Use your mouse to move the paddle', y + 60);
    this.centerText(ctx, 'Collect powerups from blue blocks to decrease your score', y + 90);
    this.centerText(ctx, 'Get the ball in the hole in the fewest strokes possible', y + 120);
  }

  levelMenu(ctx, level) {
    let y = ctx.canvas.height / 2;

    ctx.fillStyle = 'white';
    ctx.font = "48px 'Source Sans Pro'";
    this.centerText(ctx, `${level}`, y);

    ctx.fillStyle = 'black';
    ctx.font = "24px 'Source Sans Pro'";
    this.centerText(ctx, 'click to begin', y + 30);
  }

  centerText(ctx, text, y) {
    var measurement = ctx.measureText(text);
    var x = (ctx.canvas.width - measurement.width) / 2;
    ctx.fillText(text, x, y);
  }

  gameOver(lossCondition) {
    let y = this.ctx.canvas.height / 2;
    let score = this.score;
    let ctx = this.ctx;
    let message1 = `Strokes: ${score}`;
    let message2 = `Score: ${SCORES[score]}`;
    let message3 = "You Win!";
    if (lossCondition === "water") {
      message1 = "Lost ball";
      message2 = "You lose";
    }
    if (lossCondition === "win") {
      ctx.fillStyle = 'black';
      ctx.font = "48px 'Source Sans Pro'";

      this.centerText(ctx, message3, y - 60);
    }

    ctx.fillStyle = 'black';
    ctx.font = "48px 'Source Sans Pro'";

    this.centerText(ctx, message1, y);
    this.centerText(ctx, message2, y + 60);

    this.view.gameOver();
  }

  drawScore() {
    this.ctx.font = "16px 'Source Sans Pro'";
    this.ctx.fillStyle = "#000000";
    this.ctx.fillText("Strokes: "+this.score, 8, 20);
  }

  drawMessages(messageKeys) {
    messageKeys.forEach(key => {
      this.ctx.font = "16px 'Source Sans Pro'";
      this.ctx.fillStyle = "#000000";
      this.ctx.fillText(`${POWERS[key]}`, 8, 40);
    });
  }

  draw(ctx) {
    ctx.clearRect(0, 0, this.canvasEl.width, this.canvasEl.height);
    this.bricks.drawBricks(this.ctx);
    this.hole.draw(this.ctx);
    this.bricks.colideWith(this.ball);
    if (this.level === 0) {
      this.menu(ctx);
    } else if (this.level === 2) {
        this.score = 0;
        this.bricks = new Bricks({
          game: this,
          brickRowCount: 4,
          brickColumnCount: 5,
          brickWidth: 50,
          brickHeight: 15,
          brickPadding: 20,
          brickOffsetTop: 60,
          brickOffsetLeft: 130,
          brickPowerups: [[1, 2], [3, 1]],
        });
        this.hole = new Hole({game: this});
        this.ball = new Ball({game: this});
        this.powerups = [];
        this.powerMessages= [];
        this.bricksArr = this.bricks.setupBricks([]);
        this.levelMenu(this.ctx, "Level 2");
      } else if (this.level === 4) {
          this.score = 0;
          this.bricks = new Bricks({
            game: this,
            brickRowCount: 5,
            brickColumnCount: 6,
            brickWidth: 60,
            brickHeight: 15,
            brickPadding: 10,
            brickOffsetTop: 60,
            brickOffsetLeft: 90,
            brickPowerups: [[1, 2], [3, 1]],
          });
          this.hole = new Hole({game: this});
          this.ball = new Ball({game: this});
          this.powerups = [];
          this.powerMessages= [];
          this.bricksArr = this.bricks.setupBricks([]);
          this.levelMenu(this.ctx, "level 3");
      } else if (this.level > 5) {
        this.gameOver("win");
      }

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
