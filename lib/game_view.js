export default class GameView {
  constructor(game, ctx) {
    this.ctx = ctx;
    this.game = game;
    this.currentScreen = game; // I think this will make sense
    this.frameId = 0;
    this.lastFrame = Date.now();
  }

  beginLoop() {
    let frameId = 0;
    this.lastFrame = Date.now();
    this.loop();
  }

  loop() {
    let thisFrame = Date.now();

    let elapsed = thisFrame - this.lastFrame;

    this.frameId = document.requestAnimationFrame(this.loop);

    // need current screen to have these two methods
    this.currentScreen.update(elapsed);
    this.currentScreen.draw(this.ctx);
  }
}
