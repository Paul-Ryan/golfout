export default class Ball {
  constructor(options) {
    this.radius = 8;
    this.pos = options.pos;
    this.offsetX = 1.4;
    this.offsetY = -2;
  }

  drawBall(ctx) {
    ctx.beginPath();
    ctx.arc(this.pos[0], this.pos[1], this.radius, 0, Math.PI*2, false);
    ctx.fillStyle = "#e4e7d5";
    ctx.fill();
    ctx.closePath();
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
