# SmashOut

## Background and Overview

SmashOut is a game based on the classic Atari game Breakout

Users progress through levels of increasing difficulty by attempting to use a paddle to bounce a ball into brick objects to destroy them. If the ball flies past the user's paddle, the game ends.

Each time the ball hits a brick or the paddle there is an accompanying visual and audio experience, which will be cool.

## Functionality & MVP

 * Users can control the paddle and reflect the ball
 * Ball destroys bricks and bounces back
 * Score points when bricks are destroyed
 * Power-ups drop from special bricks and can be collected by paddle
 * Play sound when the ball destroys bricks or encounters the paddle

## Wireframes
````
__________________________
|                         |
|     ____________        |
|     |_|_|_|_|_|_|       |
|     |_|_|_|_|_|_|       |
|                         |
|         .               |
|           ___           |
|_________________________|

````

## Implementation Timeline

**Over the weekend**
* general panic
* read canvas tutorial and get a game area setup
* get ball rendered

### Day 1:
Get the basic canvas structure up and write some scrips to create game elements including ball, bricks, and paddle
### Day 2:
Continue day 1, add powerups, levels, and start to make the game juicy (eg. bounce animation, bricks break apart, colors change on level-up)
### Day 3:
Learn Web Audio API and play some sounds during the game
### Day 4:
Style the front end and add instructions/controls


## Technologies

* Vanilla JavaScript for the game structure and logic
* `HTML5 Canvas` for DOM manipulation and rendering the game
* Webpack to bundle and serve various scripts
* Web audio API for playing sound during the game
