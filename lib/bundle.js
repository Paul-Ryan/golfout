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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ball_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__paddle_js__ = __webpack_require__(4);



class Game {
  constructor(ctx, canvasEl, ball) {
    this.canvasEl = canvasEl;
    this.ctx = ctx;
    this.score = 0;

    let options;
    let ballPos = [canvasEl.width/2, canvasEl.height - 10];
    options = {pos: ballPos};
    this.ball = new __WEBPACK_IMPORTED_MODULE_0__ball_js__["a" /* default */](options);

    let paddlePos = [canvasEl.width/2, canvasEl.height - 20];
    options = {pos: paddlePos};
    this.paddle = new __WEBPACK_IMPORTED_MODULE_1__paddle_js__["a" /* default */](options);
    this.keyDownHandler = this.keyDownHandler.bind(this); //set this to game
    this.keyUpHandler = this.keyUpHandler.bind(this);
  }

  draw(ctx) {
    ctx.clearRect(0, 0, this.canvasEl.width, this.canvasEl.height);
    this.ball.draw(this.ctx);
    this.ball.hitPaddle(this.paddle);
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
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Game;



/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__game_object__ = __webpack_require__(5);


class Ball extends __WEBPACK_IMPORTED_MODULE_0__game_object__["a" /* default */] {
  constructor(options = {}) {
    super(options);
    this.radius = 8;
    this.offsetX = 1.4;
    this.offsetY = -2;
    this.color = "#505050";
  }

  moveBall() {
    this.pos = [this.pos[0] += this.offsetX, this.pos[1] += this.offsetY];

    if (this.pos[1] < this.radius) {
      this.offsetY *= -1;
    }
    if (this.pos[0] > 600 - this.radius) {
      this.offsetX *= -1;
    }
    if (this.pos[1] > 600 - this.radius) {
      this.offsetY *= -1;
    }
    if (this.pos[0] < this.radius) {
      this.offsetX *= -1;
    }
  }
  hitPaddle(paddle) {
    if (this.pos[1] > 590 - this.radius) {
      if (this.pos[0] > paddle.pos[0] && this.pos[0] < paddle.pos[0] + 50) {
        this.offsetY *= -1;
      }
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
  // const game = new Game(ctx);
});

const canvasEl = document.getElementById("smashout");
const ctx = canvasEl.getContext("2d");
const game = new __WEBPACK_IMPORTED_MODULE_0__lib_game_js__["a" /* default */](ctx, canvasEl);

document.addEventListener("keydown", game.keyDownHandler);
document.addEventListener("keyup", game.keyUpHandler);

function draw() {
  game.draw(ctx);
}

setInterval(draw, 1000/60);
// setInterval(draw, 2000);


/***/ }),
/* 3 */,
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__game_object__ = __webpack_require__(5);


class Paddle extends __WEBPACK_IMPORTED_MODULE_0__game_object__["a" /* default */] {
  constructor(options = {}) {
    super(options);
    this.pos = options.pos;
    this.color = "#0e0e0e";
  }

  draw(ctx) {
    ctx.fillStyle = "#000000";
    ctx.fillRect(this.pos[0], this.pos[1], 50, 10);
  }

  movePaddle(num){
    let newPos = this.pos[0] + num;
    if (newPos < 600 && newPos > 0) {
      this.pos[0] += num;
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

  // isCollidedWith(otherObject) {
  //   const centerDist = Util.dist(this.pos, otherObject.pos);
  //   return centerDist < (this.radius + otherObject.radius);
  // }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = GameObject;



/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map