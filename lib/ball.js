class Ball {
  constructor(options) {

  }

  draw(ctx) {
    ctx.beginPath();
    ctx.arc(220, 360, 8, 0, Math.PI*2, false);
    ctx.fillStyle = "blue";
    ctx.fill();
    ctx.closePath();
  }
}



// ctx.beginPath();
// ctx.rect(160, 300, 100, 40);
// ctx.strokeStyle = "rgba(0, 0, 255, 0.5)";
// ctx.stroke();
// ctx.closePath();

module.exports = Ball;
