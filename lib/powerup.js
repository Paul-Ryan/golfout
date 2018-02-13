import GameObject from './game_object';

export default class PowerUp extends GameObject {
  constructor(options = {}) {
    super(options);
    this.radius = 8;
    this.pos = options.pos || [300, 300];
    this.vel = [0, 3];
    this.color = "#000000";

    this.move = this.move.bind(this);
  }

  move() {
    this.pos = [this.pos[0] += this.vel[0], this.pos[1] += this.vel[1]];
    if (this.pos[1] > this.game.canvasEl.height + this.radius) {
      console.log(this.game);
      this.game.powerups.pop();
    }
  }
}
