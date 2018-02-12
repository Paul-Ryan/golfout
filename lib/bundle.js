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


class Game {
  constructor(ctx, ball) {
    this.ctx = ctx;
    this.ball = new __WEBPACK_IMPORTED_MODULE_0__ball_js__["a" /* default */];
  }

  addBall() {
    this.ball.drawBall(this.ctx);
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Game;



/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
let canvas = document.getElementById("smashout");
let ctx = canvas.getContext("2d");

class Ball {
  constructor(options) {
    this.ballRadius = 8;
  }

  drawBall(x, y) {
    ctx.beginPath();
    ctx.arc(x, y, this.ballRadius, 0, Math.PI*2, false);
    ctx.fillStyle = "blue";
    ctx.fill();
    ctx.closePath();
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


// import GameView from './lib/game_view.js';


document.addEventListener("DOMContentLoaded", () => {
  const game = new __WEBPACK_IMPORTED_MODULE_0__lib_game_js__["a" /* default */](ctx);
  // new GameView(game, ctx);
});

const canvasEl = document.getElementById("smashout");
const ctx = canvasEl.getContext("2d");
const ball = new __WEBPACK_IMPORTED_MODULE_1__lib_ball_js__["a" /* default */]();
ball.drawBall();

let x = canvasEl.width/2;
let y = canvasEl.height - 30;
let dx = 0;
let dy = -2;

function draw() {
  ctx.clearRect(0, 0, canvasEl.width, canvasEl.height);
  ball.drawBall(x, y);
  x += dx;
  y += dy;
  if(y + dy < 0) {
    dy = -dy;
  }
}

// setInterval(draw, 10);


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map