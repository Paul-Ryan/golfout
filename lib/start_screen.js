// `input` will be defined elsewhere, it's a means
// for us to capture the state of input from the player
class StartScreen {
  constructor(ctx, canvasEl) {
    this.canvasEl = canvasEl;
    this.ctx = ctx;
    this.hue = 0;
    this.direction = 1;
    this.transitioning = false;

    this.wasButtonDown = false;
  }

  draw(ctx, elapsed) {
    let y = ctx.canvas.height / 2;
    let color = 'rgb(' + this.hue + ',0,0)';

    ctx.fillStyle = 'white';
    ctx.font = '48px monospace';
    this.centerText(ctx, 'GolfOut', y);

    ctx.fillStyle = color;
    ctx.font = '24px monospace';
    this.centerText(ctx, 'click to begin', y + 30);
  }

  centerText(ctx, text, y) {
    var measurement = ctx.measureText(text);
    var x = (ctx.canvas.width - measurement.width) / 2;
    ctx.fillText(text, x, y);
  }

  updateColor() {
    this.hue += 1 * this.direction;
    if (this.hue > 255) this.direction = -1;
    if (this.hue < 0) this.direction = 1;

    let isButtonDown = input.isButtonDown();
    let mouseJustClicked = !isButtonDown && this.wasButtonDown;
    if (mouseJustClicked && !this.transitioning) {
        this.transitioning = true;
        // do something here to transition to the actual game
    }
    this.wasButtonDown = isButtonDown;
  }
}
