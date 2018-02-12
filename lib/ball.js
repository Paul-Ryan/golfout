let canvas = document.getElementById("smashout");
let ctx = canvas.getContext("2d");

export default class Ball {
  constructor(options) {
    this.radius = 8;
  }

  drawBall(pos) {
    ctx.beginPath();
    ctx.arc(pos[0], pos[1], this.radius, 0, Math.PI*2, false);
    ctx.fillStyle = "#e4e7d5";
    ctx.fill();
    ctx.closePath();
  }



}
