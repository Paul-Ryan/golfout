/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ball__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__paddle__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__bricks__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__hole__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__util__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__sound__ = __webpack_require__(10);







const SCORES = {
  0: "zero strokes!!!",
  1: "Hole in 1!",
  2: "Double Eagle",
  3: "Eagle",
  4: "Birdie",
  5: "Par",
  6: "Bogey",
  7: "Double Bogey",
  8: "Triple Bogey",
  9: "Just playing for fun :)",
  10: "Pick up your ball"
};

const POWERS = {
  blue: "Minus two strokes",
};

const bounce = document.getElementById("myAudio");


class Game {
  constructor(ctx, canvasEl, ball) {
    this.canvasEl = canvasEl;
    this.ctx = ctx;
    this.theme = new __WEBPACK_IMPORTED_MODULE_5__sound__["a" /* default */]("./sound/theme.mp3");
    this.music = false;

    this.score = 0;
    this.level = 1;
    this.over = false;

    this.bricks = new __WEBPACK_IMPORTED_MODULE_2__bricks__["a" /* default */]({game: this});
    this.hole = new __WEBPACK_IMPORTED_MODULE_3__hole__["a" /* default */]({game: this});
    this.ball = new __WEBPACK_IMPORTED_MODULE_0__ball__["a" /* default */]({game: this});
    this.paddle = new __WEBPACK_IMPORTED_MODULE_1__paddle__["a" /* default */]({game: this});

    this.bricksArr = this.bricks.setupBricks([]);
    this.powerups = [];
    this.powerMessages= [];


    this.keyDownHandler = this.keyDownHandler.bind(this); //set this to game
    this.keyUpHandler = this.keyUpHandler.bind(this);
    this.mouseMoveHandler = this.mouseMoveHandler.bind(this);
    this.gameOver = this.gameOver.bind(this);
  }

  start(){
    this.interval = setInterval((() => this.draw(this.ctx)), 1000/60);
    if (this.music) {
      this.theme.play();
    }
  }

  addListeners() {
    document.addEventListener("keydown", this.keyDownHandler);
    document.addEventListener("keyup", this.keyUpHandler);
    document.addEventListener("mousemove", this.mouseMoveHandler, false);
  }

  // game over logic by Seth
  // https://github.com/thraxxed
  gameOver() {
    clearInterval(this.interval);
    let score = this.score;

    this.ctx.fillText(`Strokes: ${score}`, 255, 275);
    this.ctx.fillText(`Score: ${SCORES[score]}`, 255, 305);
    this.over = true;
  }

  drawScore() {
    this.ctx.font = "16px Arial";
    this.ctx.fillStyle = "#000000";
    this.ctx.fillText("Strokes: "+this.score, 8, 20);
  }

  drawMessages(messageKeys) {
    messageKeys.forEach(key => {
      this.ctx.font = "16px Arial";
      this.ctx.fillStyle = "#000000";
      this.ctx.fillText(`${POWERS[key]}`, 8, 40);
    });
  }

  draw(ctx) {
    ctx.clearRect(0, 0, this.canvasEl.width, this.canvasEl.height);
    this.bricks.drawBricks(this.ctx);
    this.hole.draw(this.ctx);
    this.bricks.colideWith(this.ball);
    this.drawScore();
    if (this.score === 10) {
      this.gameOver();
    }
    // powerups
    this.powerups.forEach((powerup) => {
      powerup.draw(ctx);
      powerup.move();
      this.paddle.collectPowerup(powerup);
    });

    this.drawMessages(this.powerMessages);

    this.ball.draw(this.ctx);
    this.hole.contactWith(this.ball);
    this.paddle.contactWith(this.ball);
    this.ball.moveBall();
    this.paddle.draw(this.ctx);
  }

  keyDownHandler(e) {
    if (e.keyCode === 37) {
      this.paddle.movePaddle(-10);
    } else if (e.keyCode === 39) {
      this.paddle.movePaddle(10);
    }
  }

  keyUpHandler(e) {
    if (e.keyCode === 37) {
      this.leftPressed = false;
    } else if (e.keyCode === 39) {
      this.rightPressed = false;
    }
  }

  mouseMoveHandler(e) {
    let xPos = e.clientX - this.canvasEl.offsetLeft;
    let moveLimit = this.paddle.width/2;
    if (xPos > moveLimit && xPos < this.canvasEl.width - moveLimit) {
        this.paddle.pos[0] = xPos - moveLimit;
    }
  }

  // bounceSound() {
  //   bounce.play();
  // }


}
/* harmony export (immutable) */ __webpack_exports__["a"] = Game;



/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__game_object__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sound__ = __webpack_require__(10);




class Ball extends __WEBPACK_IMPORTED_MODULE_0__game_object__["a" /* default */] {
  constructor(options = {}) {
    super(options);
    this.radius = 8;
    this.pos = [300, 300];
    this.vel = [0, 3.5];
    this.color = "#FFF7DF";
    this.bounceSound = new __WEBPACK_IMPORTED_MODULE_2__sound__["a" /* default */]("./sound/bounce1.wav");
  }

  moveBall() {
    this.pos = [this.pos[0] += this.vel[0], this.pos[1] += this.vel[1]];

    if (this.pos[1] < this.radius) {
      this.vel[1] *= -1;
      this.game.score += 1;
      this.bounceSound.play();
    }
    if (this.pos[0] > this.game.canvasEl.width - this.radius) {
      this.vel[0] *= -1;
      this.game.score += 1;
      this.bounceSound.play();
    }
    if (this.pos[1] > this.game.canvasEl.height - this.radius) {
      this.vel[1] *= -1;
      this.game.score += 1;
      this.bounceSound.play();
    }
    if (this.pos[0] < this.radius) {
      this.vel[0] *= -1;
      this.game.score += 1;
      this.bounceSound.play();
    }
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Ball;



/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_game_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_ball_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lib_paddle_js__ = __webpack_require__(4);



// import GameView from './lib/game_view.js';

document.addEventListener("DOMContentLoaded", () => {
  const canvasEl = document.getElementById("smashout");
  const ctx = canvasEl.getContext("2d");
  const game = new __WEBPACK_IMPORTED_MODULE_0__lib_game_js__["a" /* default */](ctx, canvasEl);
  game.addListeners();
  game.start();

});


// todo:

// X adjust bounce based on paddle contact point
// X add hole
// X add victory/loss messages
// X add powerup
// X powerup messages
// learn about requestAnimationFrame
// //  http://dev.bennage.com/blog/2012/12/07/game-dev-01/
// improve physics of ball
// improve physics of bounces
// add level 2
// add start message and kepress to start
// add block health
// refactor to allow resizing of level

// add sound effects
// // add paddle and put bounce on bricks
// // setup start screen, allow mute
// // add end game
// // add effects to all objects
// // imporove sound with web audio api


/***/ }),
/* 3 */,
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__game_object__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sound__ = __webpack_require__(10);





class Paddle extends __WEBPACK_IMPORTED_MODULE_0__game_object__["a" /* default */] {
  constructor(options = {}) {
    super(options);
    this.pos = options.pos || [300, 580];
    this.color = "#0e0e0e";
    this.width = 100;
    this.height = 10;
    this.game = options.game;
    this.bounceSound = new __WEBPACK_IMPORTED_MODULE_2__sound__["a" /* default */]("./sound/wall_hit.wav");
    this.powerSound = new __WEBPACK_IMPORTED_MODULE_2__sound__["a" /* default */]("./sound/powerup.mp3");
  }

  draw(ctx) {
    ctx.fillStyle = "#000000";
    ctx.fillRect(this.pos[0], this.pos[1], this.width, this.height);
  }

  movePaddle(num) {
    let newPos = this.pos[0] + num;
    if (newPos + this.width <= 600 && newPos >= 0) {
      this.pos[0] += num;
    }
  }

  contactWith(ball) {
    if (ball.pos[1] + ball.radius < 580 && ball.pos[1] + ball.radius > 570) {
      let offset = this.width/2;
      let paddleMid = this.pos[0] + offset;
      if (Math.abs(paddleMid - ball.pos[0]) < offset) {
        // distance ball impacts from mid (-1 to 1)
        let angelMod = (ball.pos[0] - paddleMid) / offset;
        ball.vel[1] *= -1;
        // controlls how much the impact location changes ball path
        ball.vel[0] += angelMod * 3;
        this.bounceSound.play();
      }
    }
  }

  // refactor to contactWith, eventually
  collectPowerup(powerup) {
    if (powerup.pos[1] + powerup.radius > 580
      && powerup.pos[1] + powerup.radius < 590) {
        let xPos = powerup.pos[0];
        if (xPos > this.pos[0] && xPos < this.pos[0] + this.width) {
          this.game.powerMessages.push('blue');
          this.game.powerups.pop();
          this.game.score -= 2;
          this.powerSound.play();
        }
    }
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Paddle;



/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class GameObject {
  constructor(options) {
    this.pos = options.pos;
    this.color = options.color;
    this.game = options.game;
  }

  colideWith(otherObject) {
    // default is do nothing
  }

  draw(ctx) {
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(
      this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI, true
    );
    ctx.fill();
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = GameObject;



/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__powerup__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sound__ = __webpack_require__(10);




class Bricks {
  constructor(options = {}) {
    this.brickRowCount = 2;
    this.brickColumnCount = 5;
    this.brickWidth = 50;
    this.brickHeight = 15;
    this.brickPadding = 20;
    this.brickOffsetTop = 60;
    this.brickOffsetLeft = 130;
    this.brickPowerups = [[0, 0], [3, 1]];
    this.bricks = [];
    this.setupBricks();
    this.game = options.game;
    this.bounceSound = new __WEBPACK_IMPORTED_MODULE_1__sound__["a" /* default */]("./sound/bounce2.wav");
  }

  setupBricks() {
    for(let c = 0; c < this.brickColumnCount; c++) {
      this.bricks[c] = [];
      for(let r = 0; r < this.brickRowCount; r++) {
        this.bricks[c][r] = { x: 0, y: 0, status: 1, hasPowerup: false };
      }
    }
    this.addPowerUp(this.brickPowerups);
  }

  addPowerUp(pwrArr) {
    for (let i = 0; i < pwrArr.length; i++) {
      // console.log("pwrArr ", pwrArr);
      let pLoc = [pwrArr[i][0], pwrArr[i][1]];
      // console.log("pLoc", pLoc);
      this.bricks[pLoc[0]][pLoc[1]].hasPowerup = true;
    }
  }

  drawBricks(ctx) {
    for (let c = 0; c < this.brickColumnCount; c++) {
      for (let r = 0; r < this.brickRowCount; r++) {
        if (this.bricks[c][r].status === 1) {
          let brickX = (c*(this.brickWidth+this.brickPadding))+this.brickOffsetLeft;
          let brickY = (r*(this.brickHeight+this.brickPadding))+this.brickOffsetTop;

          this.bricks[c][r].x = brickX;
          this.bricks[c][r].y = brickY;
          ctx.beginPath();
          ctx.rect(brickX, brickY, this.brickWidth, this.brickHeight);
          ctx.fillStyle = "#FFED3D";
          if (this.bricks[c][r].hasPowerup === true) {
            ctx.fillStyle = "blue";
          }
          ctx.fill();
          ctx.closePath();
        }
      }
    }
  }

  colideWith(ball) {
    for (let c=0; c < this.brickColumnCount; c++) {
      for (let r=0; r < this.brickRowCount; r++) {
        let brick = this.bricks[c][r];
        if (brick.status === 1) {
          if ( ball.pos[0] > brick.x
          && ball.pos[0] < brick.x + this.brickWidth
          && ball.pos[1] > brick.y
          && ball.pos[1] < brick.y + this.brickHeight ) {
            if (brick.hasPowerup) {
              this.game.powerups.push(new __WEBPACK_IMPORTED_MODULE_0__powerup__["a" /* default */]({
                game: this.game,
                pos: [brick.x + this.brickWidth / 2, brick.y]
              }));
            }
            ball.vel[1] *= -1;
            brick.status = 0;
            this.bounceSound.play();
            this.game.score++;
          }
        }
      }
    }
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Bricks;



/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const Util = {
  // Normalize the length of the vector to 1, maintaining direction.
  dir(vec) {
    const norm = Util.norm(vec);
    return Util.scale(vec, 1 / norm);
  },
  // Find distance between two points.
  dist(pos1, pos2) {
    return Math.sqrt(
      Math.pow(pos1[0] - pos2[0], 2) + Math.pow(pos1[1] - pos2[1], 2)
    );
  },
  // Find the length of the vector.
  norm(vec) {
    return Util.dist([0, 0], vec);
  },
  // Return a randomly oriented vector with the given length.
  randomVec(length) {
    const deg = 2 * Math.PI * Math.random();
    return Util.scale([Math.sin(deg), Math.cos(deg)], length);
  },
  // Scale the length of a vector by the given amount.
  scale(vec, m) {
    return [vec[0] * m, vec[1] * m];
  },
};

/* harmony default export */ __webpack_exports__["a"] = (Util);


/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__game_object__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util__ = __webpack_require__(7);



class Hole extends __WEBPACK_IMPORTED_MODULE_0__game_object__["a" /* default */] {
  constructor(options = {}) {
    super(options);
    this.radius = 15;
    this.color = "#000000";
    this.pos = [295, 30];
  }

  contactWith(ball) {
    let widths = this.radius + ball.radius;
    let distance = __WEBPACK_IMPORTED_MODULE_1__util__["a" /* default */].dist(ball.pos, this.pos);
    if (widths > distance) {
      this.game.gameOver();
    }
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Hole;



/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__game_object__ = __webpack_require__(5);


class PowerUp extends __WEBPACK_IMPORTED_MODULE_0__game_object__["a" /* default */] {
  constructor(options = {}) {
    super(options);
    this.radius = 8;
    this.pos = options.pos || [300, 300];
    this.vel = [0, 5];
    this.color = "#000000";
  }

  move() {
    this.pos = [this.pos[0] += this.vel[0], this.pos[1] += this.vel[1]];
    if (this.pos[1] > this.game.canvasEl.height + this.radius) {
      this.game.powerups.pop();
    }
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = PowerUp;



/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

class Sound {
  constructor(src) {
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
  }

  play() {
    this.sound.play();
  }

  stop() {
    this.sound.pause();
  }  
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Sound;



/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map