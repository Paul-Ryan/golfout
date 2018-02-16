# GolfOut
![logo](smashout/docs/logo.png)

## Background and Overview

![intro](smashout/docs/ball.gif)

GolfOut is a game based loosely on the classic Atari game Breakout. It's a exploration of a classic game genre, with my own personal twist.

Users progress through levels of increasing difficulty by attempting to bounce the ball into a hole obscured by blocks in the fewest number of bounces to clear a level.

## Features

 * Simple hit detection and bounce physics.
 * Object-like classes, allowing game elements to track their own state
 * Collect powerups to lower your score as you play
 * Compete to try and get the lowest score!

### Game objects inherit from game object prototype
I built a simple game object protoype that I could base my bricks, ball, and paddle on to keep the code DRY and to keep the game objects behavior predictable.
```JavaScript
export default class GameObject {
  constructor(options = {}) {
    this.pos = options.pos;
    this.color = options.color;
    this.game = options.game;
  }
```

### Simple hit detection for game objects

![bounce](smashout/docs/dblbounce.gif)
The game objects are simple shapes, so it's possible to create good hit detection with simple math. For the hole and the ball, anytime the distance between their centers is less than their combined radiuses, we know they're in contact.
```JavaScript
contactWith(ball) {
  let widths = this.radius + ball.radius;
  let distance = Util.dist(ball.pos, this.pos);
  if (widths > distance) {
    this.game.level += 1;
  }
}
```

### Paddle can be used to aim the shot
![paddle](https://github.com/Paul-Ryan/smashout/blob/master/docs/bounce2.gif)
I decided that because I would be developing this game in just a week, and because this was my first game, I wouldn't try to recreate real paddle/ball physics. Instead, the paddle modifies the balls trajectory based on how far from the center of the paddle the ball impacts The further from the center, the more the ball is pushed to the left or the right.
```JavaScript
if (Math.abs(paddleMid - ball.pos[0]) < offset) {
  // distance ball impacts from mid (-1 to 1)
  let angelMod = (ball.pos[0] - paddleMid) / offset;
  ball.vel[1] *= -1;
  // controlls how much the impact location changes ball path
  ball.vel[0] += angelMod * 3;
  this.bounceSound.play();
  this.game.score++;
}
```

## Technologies

* Vanilla JavaScript for the game structure and logic
* `HTML5 Canvas` for DOM manipulation and rendering the game
* Webpack to bundle and serve various scripts

## Future improvements

* Add more realistic paddle physics, so ball responds to paddle motion.
* Additional powerups and additional block types to stop players from reaching the hole.
