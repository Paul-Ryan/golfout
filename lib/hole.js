import GameObject from './game_object';
import Util from './util';

export default class Hole extends GameObject {
  constructor(options = {}) {
    super(options);
    this.radius = 15;
    this.color = "#000000";
    this.pos = [300, 400];
  }

  contactWith(ball) {
    let widths = this.radius + ball.radius;
    let distance = Util.dist(ball.pos, this.pos);
    if (widths > distance) {
      console.log("Hole in one!");
      this.game.gameOver();
    }
  }
}
