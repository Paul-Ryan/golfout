export default class Paddle {
  constructor(options) {
    this.pos = options.pos;
  }

  drawPaddle(ctx) {
    ctx.fillStyle = "#000000";
    ctx.fillRect(this.pos[0], this.pos[1], 50, 10);
  }

  movePaddle(){
    
  }
}
