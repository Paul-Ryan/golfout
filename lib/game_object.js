export default class GameObject {
  constructor(options) {
    this.pos = options.pos;
    this.color = options.color;
  }

  colideWith(otherObject) {
    // default is do nothing
  }

  draw(ctx) {
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(
      this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI, true
    );
    ctx.fill();
  }
}
