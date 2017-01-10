'use strict'
const stringManipulator = {
  /**
   * hasVowels()
   * returns true if the string contains vowels
   * @returns {Boolean}
   */
  hasVowels() {
    return /[aeiou]/i.test(this);
  },

  /**
   * toUpper()
   * returns a string with all characters in upper case
   * @returns {String}
   */
  toUpper() {
    return this.replace(/[a-z]/g, found =>
      String.fromCharCode(found.charCodeAt(0) - 32)
    );
  },

  /**
   * toLower()
   * returns a string with all characters in lower case
   * @returns {String}
   */
  toLower() {
    return this.replace(/[A-Z]/g, found =>
      String.fromCharCode(found.charCodeAt(0) + 32)
    );
  },

  /**
   * ucFirst()
   * returns the first character in upper case
   * @returns {String}
   */
  ucFirst() {
    return this.replace(/^[a-z]/g, found =>
    found.toUpper()
    );
  },

  /**
   * isQuestion()
   * returns true if the string is a question
   * @returns {Boolean}
   */
  isQuestion() {
    return /[?]$/.test(this.removeSpace());
  },

  /**
   * removeSpace()
   * removes white spaces at the beginning and end of a string
   * @returns {String}
   */
  removeSpace() {
    return this.replace(/^\s+|\s+$/g, '');
  },

  /**
   * words()
   * returns a list of the words in the string, as an Array
   * @returns {Array}
   */
  words() {
    return this.replace(/[^\w\s+]/gi, ' ').split(/\s+/);
  },

  /**
   * wordCount()
   * returns the number of words in the string 
   * @returns {Number}
   */
  wordCount() {
    const words = this.words();
    return words.length;
  },

  /**
   * toCurrency()
   * returns a currency representation of the String 
   * @returns {String}
   */
  toCurrency() {
    return this.replace(/(\d+)(?=(\d{3})+(?!\d))/g, '$1,');
  },

  /**
   * fromCurrency()
   * returns a number representation of the Currency String
   * @returns {Number}
   */
  fromCurrency() {
    return parseFloat((this.replace(/,+/g, '')));
  },

  /**
   * inverseCase()
   * returns each letter in the string as an inverse of its current case
   * @returns {String}
   */
  inverseCase() {
    return this.replace(/\w/g, found =>
    /[A-Z]/g.test(found) ? found.toLower() : found.toUpper()
    );
  },

  /**
   * alternatingCase()
   * returns the letters in alternating cases
   * @returns {String}
   */
  alternatingCase() {
    return this.replace(/\w/g, (found, index) =>
    (index % 2 === 0) ? found.toLower() : found.toUpper()
    );
  },

  /**
   * getMiddle()
   * returns the character(s) in the middle of the string
   * @returns {String}
   */
  getMiddle() {
    const length = this.length;
    const middle = Math.floor(length / 2);
    return (middle % 2 === 0) ? this[middle - 1] + this[middle] : this[middle];
  },

  /**
   * numberWords()
   * returns the numbers in words
   * @returns {String}
   */
  numberWords() {
    const words = {
      0: 'zero',
      1: 'one',
      2: 'two',
      3: 'three',
      4: 'four',
      5: 'five',
      6: 'six',
      7: 'seven',
      8: 'eight',
      9: 'nine'
    };
    return this.replace(/\d/g, (found, index) =>
    (index === 0) ? words[found] : ` ${words[found]}`
    );
  },

  /**
   * isDigit()
   * returns true if the string is a digit(one number) 
   * @returns {Boolean}
   */
  isDigit() {
    return /^[\d]$/.test(this);
  },

  /**
   * doubleCheck()
   * Returns true if a string contains double characters(including whitespace character)
   * returns {Boolean}
   */
  doubleCheck() {
    return /(.)\1/.test(this);
  }

};
Object.assign(String.prototype, stringManipulator);
