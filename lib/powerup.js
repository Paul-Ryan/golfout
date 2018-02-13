import GameObject from './game_object';

export default class PowerUp extends GameObject {
  constructor(options = {}) {
    super(options);
    this.radius = 8;
    this.pos = options.pos || [300, 300];
    this.vel = [0, 3];
    this.color = "#000000";
  }
}
