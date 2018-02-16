import PowerUp from './powerup';
import Sound from './sound';


export default class Bricks {
  constructor(options = {}) {
    this.brickRowCount = options.brickRowCount;
    this.brickColumnCount = options.brickColumnCount;
    this.brickWidth = options.brickWidth;
    this.brickHeight = options.brickHeight;
    this.brickPadding = options.brickPadding;
    this.brickOffsetTop = options.brickOffsetTop;
    this.brickOffsetLeft = options.brickOffsetLeft;
    this.brickPowerups = options.brickPowerups;
    this.bricks = [];
    this.setupBricks();
    this.game = options.game;
    this.bounceSound = new Sound("./sound/bounce2.wav");
  }

  setupBricks() {
    for(let c = 0; c < this.brickColumnCount; c++) {
      this.bricks[c] = [];
      for(let r = 0; r < this.brickRowCount; r++) {
        this.bricks[c][r] = { x: 0, y: 0, status: 1, hasPowerup: false };
      }
    }
    this.addPowerUp(this.brickPowerups);
  }

  addPowerUp(pwrArr) {
    for (let i = 0; i < pwrArr.length; i++) {
      let pLoc = [pwrArr[i][0], pwrArr[i][1]];
      this.bricks[pLoc[0]][pLoc[1]].hasPowerup = true;
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
          if (this.bricks[c][r].hasPowerup === true) {
            ctx.fillStyle = "blue";
          }
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
            if (brick.hasPowerup) {
              this.game.powerups.push(new PowerUp({
                game: this.game,
                pos: [brick.x + this.brickWidth / 2, brick.y]
              }));
            }
            ball.vel[1] *= -1;
            brick.status = 0;
            this.bounceSound.play();
          }
        }
      }
    }
  }
}
