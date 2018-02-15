export default class GameView {
  constructor(game, ctx) {
    this.ctx = ctx;
    this.currentScreen = game; 
    this.frameId = 0;
    this.lastFrame = Date.now();
    this.level = 0;
  }

  beginLoop() {
    let frameId = 0;
    this.lastFrame = Date.now();
    this.loop();
  }

  loop() {
    let thisFrame = Date.now();

    let elapsed = thisFrame - this.lastFrame;

    this.frameId = requestAnimationFrame(this.loop.bind(this));

    // // need current screen to have these two methods
    this.currentScreen.draw(this.ctx);
    // this.currentScreen.update(elapsed);
    // this.currentScreen.draw(this.ctx);
    if (this.currentScreen.score === 10) {
      this.currentScreen.gameOver();
    }
  }

  gameOver() {
    cancelAnimationFrame(this.frameId);
  }
}
