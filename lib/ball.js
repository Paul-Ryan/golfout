import GameObject from "./game_object";
import Util from './util';

export default class Ball extends GameObject {
  constructor(options = {}) {
    super(options);
    this.radius = 8;
    this.vel = Util.randomVec(3);
    this.color = "#FFF7DF";
  }

  moveBall() {
    this.pos = [this.pos[0] += this.vel[0], this.pos[1] += this.vel[1]];

    if (this.pos[1] < this.radius) {
      this.vel[1] *= -1;
    }
    if (this.pos[0] > 600 - this.radius) {
      this.vel[0] *= -1;
    }
    if (this.pos[1] > 600 - this.radius) {
      this.vel[1] *= -1;
    }
    if (this.pos[0] < this.radius) {
      this.vel[0] *= -1;
    }
  }
}
