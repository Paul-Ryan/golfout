import GameObject from "./game_object";
import Util from './util';
import Sound from './sound';


export default class Paddle extends GameObject {
  constructor(options = {}) {
    super(options);
    this.pos = options.pos || [300, 580];
    this.color = "#0e0e0e";
    this.width = 100;
    this.height = 10;
    this.game = options.game;
    this.bounceSound = new Sound("./sound/wall_hit.wav");
    this.powerSound = new Sound("./sound/powerup.mp3");
  }

  draw(ctx) {
    ctx.fillStyle = "#000000";
    ctx.fillRect(this.pos[0], this.pos[1], this.width, this.height);
  }

  movePaddle(num) {
    let newPos = this.pos[0] + num;
    if (newPos + this.width <= 600 && newPos >= 0) {
      this.pos[0] += num;
    }
  }

  contactWith(ball) {
    if (ball.pos[1] + ball.radius < 580 && ball.pos[1] + ball.radius > 570) {
      let offset = this.width/2;
      let paddleMid = this.pos[0] + offset;
      if (Math.abs(paddleMid - ball.pos[0]) < offset) {
        // distance ball impacts from mid (-1 to 1)
        let angelMod = (ball.pos[0] - paddleMid) / offset;
        ball.vel[1] *= -1;
        // controlls how much the impact location changes ball path
        ball.vel[0] += angelMod * 3;
        this.bounceSound.play();
      }
    }
  }

  // refactor to contactWith, eventually
  collectPowerup(powerup) {
    if (powerup.pos[1] + powerup.radius > 580
      && powerup.pos[1] + powerup.radius < 590) {
        let xPos = powerup.pos[0];
        if (xPos > this.pos[0] && xPos < this.pos[0] + this.width) {
          this.game.powerMessages.push('blue');
          this.game.powerups.pop();
          this.game.score -= 2;
          this.powerSound.play();
        }
    }
  }
}
