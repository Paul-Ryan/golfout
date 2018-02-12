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
    let options;

    let ballPos = [canvasEl.width/2, canvasEl.height - 10];
    options = {pos: ballPos};
    this.ball = new __WEBPACK_IMPORTED_MODULE_0__ball_js__["a" /* default */](options);

    let paddlePos = [canvasEl.width/2, canvasEl.height - 20];
    options = {pos: paddlePos};
    this.paddle = new __WEBPACK_IMPORTED_MODULE_1__paddle_js__["a" /* default */](options);
  }

  // addBall() {
  //   this.ball.drawBall(this.ctx);
  // }

  draw(ctx) {
    ctx.clearRect(0, 0, 600, 600); // need to use canvas w/h
    this.ball.drawBall(this.ctx);
    this.ball.moveBall();
    this.paddle.drawPaddle(this.ctx);
    // ctx.fillRect(300, 300, 50, 10);

  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Game;



/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Ball {
  constructor(options) {
    this.radius = 8;
    this.pos = options.pos;
    this.offsetX = 1.4;
    this.offsetY = -2;
  }

  drawBall(ctx) {
    ctx.beginPath();
    ctx.arc(this.pos[0], this.pos[1], this.radius, 0, Math.PI*2, false);
    ctx.fillStyle = "#e4e7d5";
    ctx.fill();
    ctx.closePath();
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
class Paddle {
  constructor(options) {
    this.pos = options.pos;
  }

  drawPaddle(ctx) {
    ctx.fillStyle = "#000000";
    ctx.fillRect(this.pos[0], this.pos[1], 50, 10);
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Paddle;



/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map