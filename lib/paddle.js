import GameObject from "./game_object";
import Util from './util';

export default class Paddle extends GameObject {
  constructor(options = {}) {
    super(options);
    this.pos = options.pos || [300, 580];
    this.color = "#0e0e0e";
    this.width = 50;
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

  // you need to calculate the absolute position where the ball hits the pad, normalize it (by subtracting the pad position and dividing by the pad length), and map it into a angle range (maybe -80 to 80 degrees). You can then calculate the desired horizontal and vertical velocities using trigonometric functions.

  contactWith(ball){
    console.log(this.pos[1]);
    if (ball.pos[1] + ball.radius < 580 && ball.pos[1] + ball.radius > 578) {
      let offset = this.width/2;
      let paddleMid = this.pos[0] + offset;
      if (Math.abs(paddleMid - ball.pos[0]) < offset) {
        // let angelMod = (ball.pos[0] - paddleMid) / offset; // % away from mid
        // console.log(angelMod);
        ball.vel[1] *= -1;
        // ball.vel[0] *=
      }
    }
  }
}
