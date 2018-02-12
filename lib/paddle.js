let canvas = document.getElementById("smashout");
let ctx = canvas.getContext("2d");

export default class Paddle {
  constructor() {

  }

  drawPaddle(pos) {
    // ctx.beginPath();
    ctx.fillStyle = "#000000";
    ctx.fillRect(pos[0], pos[1], 50, 10);
    // ctx.fill();
  }
}
