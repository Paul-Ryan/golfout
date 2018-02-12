let canvas = document.getElementById("smashout");
let ctx = canvas.getContext("2d");

export default class Ball {
  constructor(options) {
  }

  drawBall(x, y) {
    ctx.beginPath();
    ctx.arc(x, y, 8, 0, Math.PI*2, false);
    ctx.fillStyle = "blue";
    ctx.fill();
    ctx.closePath();
  }

}
