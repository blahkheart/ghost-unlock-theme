/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./assets/js/modals-controller.js":
/*!****************************************!*\
  !*** ./assets/js/modals-controller.js ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   closeModal: function() { return /* binding */ closeModal; }\n/* harmony export */ });\n/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./settings */ \"./assets/js/settings.js\");\n/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_settings__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction closeModal($el) {\n  _settings__WEBPACK_IMPORTED_MODULE_0__.subscribeBtn.forEach(btn => {\n    btn.classList.remove(\"is-loading\");\n  });\n  $el.classList.remove(\"is-active\");\n}\nfunction openModal($el) {\n  $el.classList.add(\"is-active\");\n}\nfunction fadeInModal(modal) {\n  modal.classList.add(\"gh-unlock-fade-in\");\n}\nfunction fadeOutModal(modal) {\n  modal.classList.add(\"gh-unlock-fade-out\");\n  setTimeout(function () {\n    modal.classList.remove(\"gh-unlock-fade-out\");\n  }, 300); // Match the duration of the fade-out animation\n}\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  function closeSubscriptionModal($el) {\n    closeModal($el);\n    location.reload();\n  }\n  function closeAllModals() {\n    (document.querySelectorAll(\".modal\") || []).forEach($modal => {\n      fadeOutModal($modal);\n      closeModal($modal);\n    });\n  }\n\n  /* Function to bind modals to trigger element */\n  function bindModalEvents(selector, modalId) {\n    (document.querySelectorAll(selector) || []).forEach($trigger => {\n      const $target = document.getElementById(modalId);\n      $trigger.addEventListener(\"click\", e => {\n        e.preventDefault();\n        fadeInModal($target);\n        openModal($target);\n      });\n    });\n  }\n\n  /* open plans modal i.e binds plans modal to modal trigger*/\n  bindModalEvents(\".plans-modal-trigger\", \"gh-unlock_plans-modal\");\n\n  /*close plans modal */\n  document.querySelectorAll(\".plans-modal-background, .plans-modal-close\").forEach($close => {\n    const $target = $close.closest(\".gh-unlock_plans-modal\");\n    $close.addEventListener(\"click\", () => {\n      closeModal($target);\n    });\n  });\n\n  /*close Tx modal */\n  document.querySelectorAll(\".tx-modal-background, .tx-modal-close\").forEach($close => {\n    const $target = $close.closest(\".gh-unlock_tx-modal\");\n    $close.addEventListener(\"click\", () => {\n      closeSubscriptionModal($target);\n    });\n  });\n\n  /*close all modals when esc key is pressed */\n  document.addEventListener(\"keydown\", event => {\n    const e = event || window.event;\n    if (e.keyCode === 27) {\n      closeAllModals();\n    }\n  });\n});\n\n//# sourceURL=webpack://unlock/./assets/js/modals-controller.js?");

/***/ }),

/***/ "./assets/js/settings.js":
/*!*******************************!*\
  !*** ./assets/js/settings.js ***!
  \*******************************/
/***/ (function(module) {

eval("const subscribeBtn = document.querySelectorAll(\".subscribe-btn\");\nconst plansModal = document.getElementById(\"gh-unlock_plans-modal\");\nconst unlockGhostApiBaseUrl = \"http://localhost:3000\";\nmodule.exports = {\n  subscribeBtn,\n  unlockGhostApiBaseUrl,\n  plansModal\n};\n\n//# sourceURL=webpack://unlock/./assets/js/settings.js?");

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./assets/js/modals-controller.js");
/******/ 	
/******/ })()
;