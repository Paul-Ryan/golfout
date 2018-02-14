import GameObject from "./game_object";
import Util from './util';
import Sound from './sound';

export default class Ball extends GameObject {
  constructor(options = {}) {
    super(options);
    this.radius = 8;
    this.pos = [300, 300];
    this.vel = [0, 3.5];
    this.color = "#FFF7DF";
    this.bounceSound = new Sound("./sound/bounce1.wav");
  }

  moveBall() {
    this.pos = [this.pos[0] += this.vel[0], this.pos[1] += this.vel[1]];

    if (this.pos[1] < this.radius) {
      this.vel[1] *= -1;
      this.game.score += 1;
      this.bounceSound.play();
    }
    if (this.pos[0] > this.game.canvasEl.width - this.radius) {
      this.vel[0] *= -1;
      this.game.score += 1;
      this.bounceSound.play();
    }
    if (this.pos[1] > this.game.canvasEl.height - this.radius) {
      this.vel[1] *= -1;
      this.game.score += 1;
      this.bounceSound.play();
    }
    if (this.pos[0] < this.radius) {
      this.vel[0] *= -1;
      this.game.score += 1;
      this.bounceSound.play();
    }
  }
}
