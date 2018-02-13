import GameObject from './game_object';

export default class Hole extends GameObject {
  constructor(options = {}) {
    super(options);
    this.radius = 15;
    this.color = "#000000";
    this.pos = [300, 30];
  }
}
