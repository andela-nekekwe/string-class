/* eslint-disable import/no-unresolved */

const chai = require('chai');

const assert = chai.assert;
require('../src/string-class');

describe('hasVowels', () => {
  it('should return a boolean', () => {
    assert.isBoolean('hello'.hasVowels());
  });

  it('should return true if the string contains vowels', () => {
    assert.strictEqual('aaabb'.hasVowels(), true);
    assert.strictEqual('Ngozi Rose'.hasVowels(), true);
  });

  it('should return false if the string has no vowel', () => {
    assert.strictEqual('hhppppp'.hasVowels(), false);
    assert.strictEqual('yyhyhy fff'.hasVowels(), false);
  });
});

describe('toUpper', () => {
  it('should return a string', () => {
    assert.isString('hello'.toUpper());
  });

  it('should transform  lowercase characters to uppercase', () => {
    assert.strictEqual('anDela'.toUpper(), 'ANDELA');
    assert.strictEqual('ANDELA'.toUpper(), 'ANDELA');
  });
});

describe('toLower', () => {
  it('should return a string', () => {
    assert.isString('hello'.toLower());
  });

  it('should transform uppercase characters to lowercase', () => {
    assert.strictEqual('ANDELA'.toLower(), 'andela');
    assert.strictEqual('ANDELA M55'.toLower(), 'andela m55');
  });
});

describe('ucFirst', () => {
  it('should return a string', () => {
    assert.isString('hello'.ucFirst());
  });

  it('Should transform the first character to uppercase', () => {
    assert.strictEqual('aNDELA'.ucFirst(), 'ANDELA');
    assert.strictEqual('Andela m55'.ucFirst(), 'Andela m55');
  });
});

describe('isQuestion', () => {
  it('should return a boolean', () => {
    assert.isBoolean('hello'.isQuestion());
  });

  it('should return true if the string is a question', () => {
    assert.strictEqual('Andela ?'.isQuestion(), true);
  });

  it('should return false if the string is not a valid question', () => {
    assert.strictEqual('Andela ? is TIA?'.isQuestion(), false);
    assert.strictEqual('Andela TIA'.isQuestion(), false);
  });
});

describe('words', () => {
  it('should return an array', () => {
    assert.isArray('hello'.words());
  });

  it('should return a list of the words in the string as an Array', () => {
    assert.deepEqual('It is working'.words(), ['It', 'is', 'working']);
  });
});

describe('wordCount', () => {
  it('should return a number', () => {
    assert.isNumber('hello'.wordCount());
  });

  it('should return the number of words in the string', () => {
    assert.strictEqual('This is Andela'.wordCount(), 3);
    assert.strictEqual('Andela'.wordCount(), 1);
    assert.strictEqual('Hello from the other side'.wordCount(), 5);
  });
});

describe('toCurrency', () => {
  it('should return a String', () => {
    assert.isString('123456.789'.toCurrency());
  });

  it('should return a currency representation of the string', () => {
    assert.strictEqual('11111.11'.toCurrency(), '11,111.11');
    assert.strictEqual('52.999'.toCurrency(), '53.00');
    assert.strictEqual('5006254'.toCurrency(), '5,006,254.00');
  });

  it('should throw an error for invalid numbers', () => {
    assert.throws('dsd'.toCurrency, TypeError, 'Invalid number');
    assert.throws('7767676.66.45'.toCurrency, TypeError, 'Invalid number');
    assert.throws('helloo'.toCurrency, TypeError, 'Invalid number');
  });
});

describe('fromCurrency', () => {
  it('should return a Number', () => {
    assert.isNumber('1,111.11'.fromCurrency());
  });

  it('should return a number representation of the currency', () => {
    assert.strictEqual('11,111.11'.fromCurrency(), 11111.11);
    assert.strictEqual('5,006,254.00'.fromCurrency(), 5006254);
  });
});

describe('inverseCase', () => {
  it('should return a String', () => {
    assert.isString('Mr. Ben.'.inverseCase());
  });

  it('should return the inverseCase for an input string', () => {
    assert.strictEqual('Mr. Ben.'.inverseCase(), 'mR. bEN.');
    assert.strictEqual('HELLO woRLD'.inverseCase(), 'hello WOrld');
    assert.strictEqual('HELLO 9999 you'.inverseCase(), 'hello 9999 YOU');
  });
});

describe('alternatingCase', () => {
  it('should return a String', () => {
    assert.isString('Onomatopoeia'.alternatingCase());
  });

  it('should return the letters in the alternating cases', () => {
    assert.strictEqual('Onomatopoeia'.alternatingCase(), 'oNoMaToPoEiA');
    assert.strictEqual('ngozi 555'.alternatingCase(), 'nGoZi 555');
  });
});

describe('getMiddle', () => {
  it('should return a String', () => {
    assert.isString('read'.getMiddle());
  });

  it('should return the character(s) in the middle of the string', () => {
    assert.strictEqual('read'.getMiddle(), 'ea');
    assert.strictEqual('reads'.getMiddle(), 'a');
    assert.strictEqual('shallow hallow'.getMiddle(), 'w ');
  });
});

describe('numberWords', () => {
  it('should return a String', () => {
    assert.isString('325'.numberWords());
  });

  it('should return the numbers in words', () => {
    assert.strictEqual('325'.numberWords(), 'three two five');
  });
});

describe('isDigit', () => {
  it('should return a boolean', () => {
    assert.isBoolean('3'.isDigit());
  });

  it('should return true if the string is a digit', () => {
    assert.strictEqual('3'.isDigit(), true);
  });

  it('should return false if the string is not a digit', () => {
    assert.strictEqual('34'.isDigit(), false);
  });
});

describe('doubleCheck', () => {
  it('should return a boolean', () => {
    assert.isBoolean('aa, !!'.doubleCheck());
  });

  it('should return true if it contains double characters', () => {
    assert.strictEqual('aa, !!'.doubleCheck(), true);
  });

  it('should return false if it does not contain double characters', () => {
    assert.strictEqual('Ngozi'.doubleCheck(), false);
  });
});
