let canvas = document.getElementById("smashout");
let ctx = canvas.getContext("2d");

export default class Paddle {
  constructor() {

  }

  drawPaddle() {
    ctx.beginPath();
    ctx.fillRect(300, 300, 80, 20);
    ctx.fillStyle = "green";
    ctx.fill();
  }
}
