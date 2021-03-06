/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	const stringManipulator = {
	  /**
	   * hasVowels
	   * @return {Boolean} true if the string contains vowels else false
	   */
	  hasVowels() {
	    return /[aeiou]/i.test(this);
	  },
	
	  /**
	   * toUpper
	   * @return {String} a string with all characters in upper case
	   */
	  toUpper() {
	    return this.replace(/[a-z]/g, letter =>
	      String.fromCharCode(letter.charCodeAt(0) - 32)
	    );
	  },
	
	  /**
	   * toLower
	   * @return {String} a string with all characters in lower case
	   */
	  toLower() {
	    return this.replace(/[A-Z]/g, letter =>
	      String.fromCharCode(letter.charCodeAt(0) + 32)
	    );
	  },
	
	  /**
	   * ucFirst
	   * @return {String} the first character in upper case
	   */
	  ucFirst() {
	    return this.replace(/^[a-z]/g, found =>
	    found.toUpper()
	    );
	  },
	
	  /**
	   * isQuestion
	   * @return {Boolean} true if the string is a question else false
	   */
	  isQuestion() {
	    return /^\w+[^?]*\?$/.test(this.trim());
	  },
	
	  /**
	   * words
	   * @returns {Array} a list of the words in the string, as an Array
	   */
	  words() {
	    return this.match(/\w+/g);
	  },
	
	  /**
	   * wordCount
	   * @returns {Number} the number of words in the string
	   */
	  wordCount() {
	    return this.words().length;
	  },
	
	  /**
	   * toCurrency
	   * @returns {String} a currency representation of the String
	   */
	  toCurrency() {
	    if (/[^\d.]/.test(this) || /\..*\./.test(this)) {
	      throw new TypeError('Invalid number');
	    }
	    return Number(this).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,');
	  },
	
	  /**
	   * fromCurrency
	   * @returns {Number} a number representation of the Currency String
	   */
	  fromCurrency() {
	    return +(this.replace(/,+/g, ''));
	  },
	
	  /**
	   * inverseCase
	   * @returns {String} each letter in the string as an inverse of its current case
	   */
	  inverseCase() {
	    return this.replace(/\w/g, letter =>
	    (/[A-Z]/g.test(letter) ? letter.toLower() : letter.toUpper())
	    );
	  },
	
	  /**
	   * alternatingCase
	   * @returns {String} the letters in alternating cases
	   */
	  alternatingCase() {
	    return this.replace(/\w/g, (found, index) =>
	    ((index % 2 === 0) ? found.toLower() : found.toUpper())
	    );
	  },
	
	  /**
	   * getMiddle
	   * @returns {String} the character(s) in the middle of the string
	   */
	  getMiddle() {
	    const length = this.length;
	    const middle = Math.floor(length / 2);
	    return (length % 2 === 0) ? this[middle - 1] + this[middle] : this[middle];
	  },
	
	  /**
	   * numberWords
	   * @returns {String} the numbers in words
	   */
	  numberWords() {
	    const words = [
	      'zero',
	      'one',
	      'two',
	      'three',
	      'four',
	      'five',
	      'six',
	      'seven',
	      'eight',
	      'nine'
	    ];
	    return this.replace(/\d/g, (number, index) =>
	    ((index === 0) ? words[number] : ` ${words[number]}`)
	    );
	  },
	
	  /**
	   * isDigit
	   * @return {Boolean} true if the string is a digit(one number)
	   */
	  isDigit() {
	    return /^[\d]$/.test(this);
	  },
	
	  /**
	   * doubleCheck
	   * @return {Boolean} true if string contains double characters else false
	   */
	  doubleCheck() {
	    return /(.)\1/.test(this);
	  }
	
	};
	Object.assign(String.prototype, stringManipulator);


/***/ }
/******/ ]);
//# sourceMappingURL=11fe2989cda080c1c928.js.map