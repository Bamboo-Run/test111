/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _src_page_event__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/page/event */ \"./src/page/event.js\");\n\r\n\n\n//# sourceURL=webpack://test/./src/index.js?");

/***/ }),

/***/ "./src/page/appendNumber.js":
/*!**********************************!*\
  !*** ./src/page/appendNumber.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _util_radColor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/radColor */ \"./src/util/radColor.js\");\n// 关于页面的操作都在这里进行处理\r\n\r\n\r\n\r\n\r\n\r\nconst divContainer = document.getElementById(\"divContainer\");\r\nconst divCenter = document.getElementById(\"divCenter\");\r\n\r\n\r\n/**\r\n * \r\n * @param {*} n 传入的数字的值\r\n * @param {*} isPrime 这个数字是否是素数\r\n */\r\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(n, isPrime) {\r\n    let span = document.createElement(\"span\");\r\n    span.innerText = n;\r\n    let randomColor = (0,_util_radColor__WEBPACK_IMPORTED_MODULE_0__.default)();\r\n    if (isPrime) {\r\n        span.style.color = `${randomColor}`;\r\n    }\r\n    divContainer.appendChild(span);\r\n    // *对于中间数字的处理：一个是正常的产生数字，一个是对产生素数的特殊处理\r\n    createCenterNumner(n);\r\n    createCenterPrimeNumner(n, isPrime, randomColor);\r\n}\r\n\r\nfunction createCenterNumner(n) {\r\n    divCenter.innerText = n;\r\n}\r\n\r\nfunction createCenterPrimeNumner(n, isPrime, color) {\r\n    let div = document.createElement(\"div\");\r\n\r\n    if (isPrime) {\r\n        div.className = \"center\";\r\n        div.innerText = n;\r\n        div.style.color = color;\r\n        div.style.opacity = 1;\r\n        document.body.appendChild(div);\r\n    }\r\n\r\n    // !加入了div之后，强行让页面重新渲染\r\n    getComputedStyle(div);\r\n\r\n    // 使得这个div飘出去，因为这个是新增的，没有用了，正常的中心是正常的\r\n    setTimeout(function () {\r\n        div.style.transform = `translate(${getRandom(-150,150)}px,${getRandom(-150,150)}px)`;\r\n        div.style.opacity = 0;\r\n    }, 0);\r\n\r\n    // document.removeChild(div);\r\n}\r\n\r\n\r\nfunction getRandom(min, max) {\r\n    return Math.floor(Math.random() * (max - min) + min);\r\n}\n\n//# sourceURL=webpack://test/./src/page/appendNumber.js?");

/***/ }),

/***/ "./src/page/event.js":
/*!***************************!*\
  !*** ./src/page/event.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _util_number__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/number */ \"./src/util/number.js\");\n/* harmony import */ var _page_appendNumber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../page/appendNumber */ \"./src/page/appendNumber.js\");\n\r\n\r\n\r\n\r\n\r\nconst n = new _util_number__WEBPACK_IMPORTED_MODULE_0__.default();\r\nn.onCreateNumber = function (n, isPrime) {\r\n    // console.log(n, isPrime);\r\n    (0,_page_appendNumber__WEBPACK_IMPORTED_MODULE_1__.default)(n, isPrime);\r\n}\r\n\r\nlet isBegin = false;\r\n\r\nwindow.onclick = function () {\r\n    if (isBegin) {\r\n        n.stop();\r\n        isBegin = false;\r\n\r\n    } else {\r\n        n.start();\r\n        isBegin = true;\r\n    }\r\n}\n\n//# sourceURL=webpack://test/./src/page/event.js?");

/***/ }),

/***/ "./src/util/isPrime.js":
/*!*****************************!*\
  !*** ./src/util/isPrime.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/**\r\n * 判断n是否是素数\r\n * 这个模块仅仅导出一个函数\r\n * 传入：一个参数\r\n * 返回值：布尔值，true或者是false\r\n * !每次写完代码或者是一个模块之后都应该进行测试\r\n */\r\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(n) {\r\n    if (n < 2) {\r\n        return false;\r\n    }\r\n    for (let i = 2; i <= n - 1; i++) {\r\n        if (n % i == 0) {\r\n            return false;\r\n        }\r\n    }\r\n    return true;\r\n}\n\n//# sourceURL=webpack://test/./src/util/isPrime.js?");

/***/ }),

/***/ "./src/util/number.js":
/*!****************************!*\
  !*** ./src/util/number.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _util_isPrime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/isPrime */ \"./src/util/isPrime.js\");\n// 该模块返回一个类，该类的实例可以产生数字，也可以终止产生数字\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (class {\r\n    constructor(duration = 500) {\r\n        this.duration = duration;\r\n        this.number = 0; //默认值从0开始，并且通过this不断保存\r\n        this.onCreateNumber = null;\r\n        this.timer = null; //保存计时器的上次位置\r\n    }\r\n    start() {\r\n        // 产生数字的过程就是不断调用计时器函数的过程\r\n        if (this.timer) { //如果已经在产生数字，避免重复产生数字\r\n            return;\r\n        }\r\n        this.timer = setInterval(() => {\r\n            this.number++;\r\n            // 产生一个数字过后，在回调函数中判断该数字是否是素数，明显是一个异步操作（即在产生了数字之后才可以判断）\r\n            this.onCreateNumber && this.onCreateNumber(this.number, (0,_util_isPrime__WEBPACK_IMPORTED_MODULE_0__.default)(this.number));\r\n        }, this.duration)\r\n    }\r\n    stop() {\r\n        clearInterval(this.timer);\r\n        this.timer = null;\r\n    }\r\n});\n\n//# sourceURL=webpack://test/./src/util/number.js?");

/***/ }),

/***/ "./src/util/radColor.js":
/*!******************************!*\
  !*** ./src/util/radColor.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// 怎么产生一种随机的颜色呢？\r\n\r\nfunction getRandom(min, max) {\r\n    return Math.floor(Math.random() * (max - min) + min);\r\n}\r\n\r\n\r\n\r\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {\r\n    return `rgb(${getRandom(0,255)},${getRandom(0,255)},${getRandom(0,255)})`;\r\n};\n\n//# sourceURL=webpack://test/./src/util/radColor.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;