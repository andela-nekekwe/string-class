'use strict';

const stringManipulator = {

  hasVowels() {
    return /[aeiou]/i.test(this);
  },

  toUpper() {
    return this.replace(/[a-z]/g, found =>
      String.fromCharCode(found.charCodeAt(0) - 32)
    );
  },

  toLower() {
    return this.replace(/[A-Z]/g, found =>
      String.fromCharCode(found.charCodeAt(0) + 32)
    );
  },

  ucFirst() {
    return this.replace(/^[a-z]/, found =>
    String.fromCharCode(found.charCodeAt(0) - 32)
    );
  },

  isQuestion() {
    return /[?]$/i.test(this.removeSpace());
  },

  removeSpace() {
    return this.replace(/^\s+|\s+$/g, '');
  },

  words() {
    return this.replace(/[^\w\s+]/gi, '').split(/\s+/);
  },

  wordCount() {
    let count = 0;
    const arr = this.words();
    arr.forEach((item, index) => {
      count += index;
    });
    return count;
  },

  toCurrency() {
    return this.replace(/(\d+)(?=(\d{3})+(?!\d))/g, '$1,');
  },

  fromCurrency() {
    return parseFloat((this.replace(/,+/g, '')));
  },

  inverseCase() {
    return this.replace(/\w/g, found =>
    /[A-Z]/g.test(found) ? found.toLower() : found.toUpper()
    );
  },
  alternatingCase() {
    return this.replace(/\w/g, (found, index) =>
    (index % 2 === 0) ? found.toLower() : found.toUpper()
    );
  },

  getMiddle() {
    const length = this.length;
    const middle = Math.floor(length / 2);
    return (middle % 2 === 0) ? this[middle - 1] + this[middle] : this[middle];
  },
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

  isDigit() {
    return /^[\d]$/.test(this);
  },

  doubleCheck() {
    return /(.)\1/.test(this);
  }

};
Object.assign(String.prototype, stringManipulator);
