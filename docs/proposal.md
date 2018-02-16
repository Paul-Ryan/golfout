# GolfOut

## Background and Overview

GolfOut is a game based loosely on the classic Atari game Breakout. The main twist will be that instead of breaking bricks to clear a level, users will attempt to get the ball in the hole in the fewest number of bounces.

Users progress through levels of increasing difficulty by attempting to shoot and catch the ball the to reach a hole in the fewest number of bounces to clear a level.

Each time the ball hits a wall or the paddle there is an accompanying visual and audio experience, which will be cool, but the users score goes up by one, which will be bad.

## Functionality & MVP

 * Users can control the paddle, catch and shoot the ball
 * Ball destroys walls and recognizes when the level is over.
 * Points are added with each ball bounce.
 * Power-ups drop from special walls and can be collected by paddle
 * Play sound when the ball destroys walls or encounters the paddle

## Wireframes
````
__________________________
| score: 3                |
|     _______0_____       |
|     |_|_|_|_|_|_|       |
|     |_|_|_|_|_|_|       |
|                         |
|         .               |
|           ___           |
|_________________________|

````

## Implementation Timeline

**Over the weekend**
* read canvas tutorial and get a game area setup
* get ball rendered

### Day 1:
Get the basic canvas structure up and write some scrips to create game elements including ball, walls, and paddle
### Day 2:
Continue day 1, add powerups, levels, and start to make the game juicy (eg. bounce animation, walls break apart, colors change on level-up, backgrounds)
### Day 3:
Learn Web Audio API and play some sounds during the game
### Day 4:
Style the front end and add instructions/controls


## Technologies

* Vanilla JavaScript for the game structure and logic
* `HTML5 Canvas` for DOM manipulation and rendering the game
* Webpack to bundle and serve various scripts
* Web audio API for playing sound during the game
