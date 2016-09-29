/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	/** Params */
	//pattern
	// left
	// right
	// operator
	"use strict";
	/*
	function patternChecking(pattern) {
	    switch(pattern) {

	    }
	}

	class operate {
	    plus = "+";
	    minus = "-";
	    multiply = "*";
	}

	function generate(pattern, left, right, operate) {

	}
	*/
	class Captcha {
	    generate(pattern, left, right, operate) {
	        let _pattern = "";
	        switch (pattern) {
	            case 1:
	                _pattern = `${left} ${textOperand(operate)} ${numberOperand(right)}`;
	                break;
	            case 2:
	                _pattern = `${numberOperand(right)} ${textOperand(operate)} ${left}`;
	                break;
	            default:
	                break;
	        }
	        console.log(_pattern);
	        return _pattern;
	    }
	}
	exports.Captcha = Captcha;
	function textOperand(n) {
	    let _operate = "";
	    switch (n) {
	        case 1:
	            _operate = "+";
	            break;
	        case 2:
	            _operate = "+";
	            break;
	        case 3:
	            _operate = "+";
	            break;
	        default:
	            _operate = "WTF";
	            break;
	    }
	    return _operate;
	}
	exports.textOperand = textOperand;
	function numberOperand(n) {
	    let decimal = ["Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten"];
	    let _rigth = decimal[n];
	    return _rigth;
	}
	exports.numberOperand = numberOperand;


/***/ }
/******/ ]);