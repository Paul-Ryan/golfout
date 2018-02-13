import GameObject from "./game_object";

export default class Paddle extends GameObject {
  constructor(options = {}) {
    super(options);
    this.pos = options.pos;
    this.color = "#0e0e0e";
    this.width = 50;
    this.height = 10;
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
}
