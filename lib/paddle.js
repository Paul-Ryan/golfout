import GameObject from "./game_object";

export default class Paddle extends GameObject {
  constructor(options = {}) {
    super(options);
    this.pos = options.pos;
    this.color = "#0e0e0e";
  }

  draw(ctx) {
    ctx.fillStyle = "#000000";
    ctx.fillRect(this.pos[0], this.pos[1], 50, 10);
  }

  movePaddle(num){
    let newPos = this.pos[0] + num;
    if (newPos < 600 && newPos > 0) {
      this.pos[0] += num;
    }
  }
}
