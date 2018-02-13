export default class Bricks {
  constructor(options = {}) {
    this.brickRowCount = 3;
    this.brickColumnCount = 5;
    this.brickWidth = 50;
    this.brickHeight = 15;
    this.brickPadding = 20;
    this.brickOffsetTop = 60;
    this.brickOffsetLeft = 130;
    this.bricks = [];
    this.setupBricks();
    this.game = options.game;
  }

  setupBricks() {
    for(let c=0; c < this.brickColumnCount; c++) {
      this.bricks[c] = [];
      for(let r=0; r < this.brickRowCount; r++) {
        this.bricks[c][r] = { x: 0, y: 0, status: 1 };
      }
    }
  }

  drawBricks(ctx) {
    for (let c = 0; c < this.brickColumnCount; c++) {
      for (let r = 0; r < this.brickRowCount; r++) {
        if (this.bricks[c][r].status === 1) {
          let brickX = (c*(this.brickWidth+this.brickPadding))+this.brickOffsetLeft;
          let brickY = (r*(this.brickHeight+this.brickPadding))+this.brickOffsetTop;

          this.bricks[c][r].x = brickX;
          this.bricks[c][r].y = brickY;
          ctx.beginPath();
          ctx.rect(brickX, brickY, this.brickWidth, this.brickHeight);
          ctx.fillStyle = "#FFED3D";
          ctx.fill();
          ctx.closePath();
        }
      }
    }
  }

  colideWith(ball) {
    for (let c=0; c < this.brickColumnCount; c++) {
      for (let r=0; r < this.brickRowCount; r++) {
        let brick = this.bricks[c][r];
        if (brick.status === 1) {
          if ( ball.pos[0] > brick.x
          && ball.pos[0] < brick.x + this.brickWidth
          && ball.pos[1] > brick.y
          && ball.pos[1] < brick.y + this.brickHeight ) {
            ball.vel[1] *= -1;
            brick.status = 0;
            this.game.score++;
          }
        }
      }
    }
  }
}
