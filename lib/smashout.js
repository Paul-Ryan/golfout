const Ball = require('./ball');

document.addEventListener("DOMContentLoaded", () => {
  const canvasEl = document.getElementById("smashout");

  const ctx = canvasEl.getContext("2d");
  const ball = new Ball();
  ball.draw(ctx);
});
