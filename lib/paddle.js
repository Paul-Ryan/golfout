import GameObject from "./game_object";
import Util from './util';

export default class Paddle extends GameObject {
  constructor(options = {}) {
    super(options);
    this.pos = options.pos || [300, 580];
    this.color = "#0e0e0e";
    this.width = 100;
    this.height = 10;
    this.game = options.game;
  }

  draw(ctx) {
    ctx.fillStyle = "#000000";
    ctx.fillRect(this.pos[0], this.pos[1], this.width, this.height);
  }

  movePaddle(num){
    let newPos = this.pos[0] + num;
    if (newPos + this.width <= 600 && newPos >= 0) {
      this.pos[0] += num;
    }
  }

  // https://gamedev.stackexchange.com/questions/20456/a-more-sophisticated-ball-paddle-collision-algorithm-for-breakout

  contactWith(ball){
    if (ball.pos[1] + ball.radius < 580 && ball.pos[1] + ball.radius > 570) {
      let offset = this.width/2;
      let paddleMid = this.pos[0] + offset;
      if (Math.abs(paddleMid - ball.pos[0]) < offset) {
        // distance ball impacts from mid (-1 to 1)
        let angelMod = (ball.pos[0] - paddleMid) / offset;
        ball.vel[1] *= -1;
        // controlls how much the impact location changes ball path
        ball.vel[0] += angelMod * 2.3;
      }
    }
  }
}
