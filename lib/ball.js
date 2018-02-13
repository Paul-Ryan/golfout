import GameObject from "./game_object";

export default class Ball extends GameObject {
  constructor(options = {}) {
    super(options);
    this.radius = 8;
    this.offsetX = 1.4;
    this.offsetY = -2;
  }

  moveBall() {
    this.pos = [this.pos[0] += this.offsetX, this.pos[1] += this.offsetY];

    if (this.pos[1] < this.radius) {
      this.offsetY *= -1;
    }
    if (this.pos[0] > 600 - this.radius) {
      this.offsetX *= -1;
    }
    if (this.pos[1] > 600 - this.radius) {
      this.offsetY *= -1;
    }
    if (this.pos[0] < this.radius) {
      this.offsetX *= -1;
    }
  }
}
