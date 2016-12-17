const stringManipulator = {

  hasVowels() {
    return /[aeiou]/i.test(this);
  },

  toUpper() {
    return this.replace(/[a-z]/g, found =>
      String.fromCharCode(found.charCodeAt(0) - 32),
    );
  },

  toLower() {
    return this.replace(/[A-Z]/g, found =>
      String.fromCharCode(found.charCodeAt(0) + 32),
    );
  },

  ucFirst() {
    return this.replace(/^[a-z]/, found =>
    String.fromCharCode(found.charCodeAt(0) - 32),
    );
  },

  isQuestion() {
    return /[?]/i.test(this);
  },

  words() {
    return this.split(/\s/);
  },

};
Object.assign(String.prototype, stringManipulator);
