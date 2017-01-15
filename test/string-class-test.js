/*eslint import/no-unresolved: 2*/

const assert = require('assert');
const chai = require('chai');
require('../src/string-class');

const should = chai.should();


describe('hasVowels', () => {
  it('should return a boolean', () => {
    'hello'.hasVowels().should.be.a('boolean');
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
    'hello'.toUpper().should.be.a('String');
  });
  it('should transform  lowercase characters to uppercase', () => {
    assert.strictEqual('anDela'.toUpper(), 'ANDELA');
    assert.strictEqual('ANDELA'.toUpper(), 'ANDELA');
  });
});

describe('toLower', () => {
  it('should return a string', () => {
    'hello'.toLower().should.be.a('String');
  });

  it('should transform uppercase characters to lowercase', () => {
    assert.strictEqual('ANDELA'.toLower(), 'andela');
    assert.strictEqual('ANDELA M55'.toLower(), 'andela m55');
  });
});

describe('ucFirst', () => {
  it('should return a string', () => {
    'hello'.ucFirst().should.be.a('String');
  });

  it('Should transform the first character to uppercase', () => {
    assert.strictEqual('aNDELA'.ucFirst(), 'ANDELA');
    assert.strictEqual('Andela m55'.ucFirst(), 'Andela m55');
  });
});

describe('isQuestion', () => {
  it('should return a boolean', () => {
    'hello'.isQuestion().should.be.a('boolean');
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
    'hello'.words().should.be.a('array');
  });

  it('should return a list of the words in the string as an Array', () => {
    assert.deepEqual('It is working'.words(), ['It', 'is', 'working']);
  });
});

describe('wordCount', () => {
  it('should return a number', () => {
    'hello'.wordCount().should.be.a('number');
  });

  it('should return the number of words in the string', () => {
    assert.strictEqual('This is Andela'.wordCount(), 3);
    assert.strictEqual('Andela'.wordCount(), 1);
    assert.strictEqual('Hello from the other side'.wordCount(), 5);
  });
});

describe('toCurrency', () => {
  it('should return a String', () => {
    '123456.789'.toCurrency().should.be.a('String');
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
    '1,111.11'.fromCurrency().should.be.a('Number');
  });

  it('should return a number representation of the currency', () => {
    assert.strictEqual('11,111.11'.fromCurrency(), 11111.11);
    assert.strictEqual('5,006,254.00'.fromCurrency(), 5006254);
  });
});

describe('inverseCase', () => {
  it('should return a String', () => {
    'Mr. Ben.'.inverseCase().should.be.a('String');
  });

  it('should return the inverseCase for an input string', () => {
    assert.strictEqual('Mr. Ben.'.inverseCase(), 'mR. bEN.');
    assert.strictEqual('HELLO woRLD'.inverseCase(), 'hello WOrld');
    assert.strictEqual('HELLO 9999 you'.inverseCase(), 'hello 9999 YOU');
  });
});

describe('alternatingCase', () => {
  it('should return a String', () => {
    'Onomatopoeia'.alternatingCase().should.be.a('String');
  });

  it('should return the letters in the alternating cases', () => {
    assert.strictEqual('Onomatopoeia'.alternatingCase(), 'oNoMaToPoEiA');
    assert.strictEqual('ngozi 555'.alternatingCase(), 'nGoZi 555');
  });
});

describe('getMiddle', () => {
  it('should return a String', () => {
    'read'.getMiddle().should.be.a('String');
  });

  it('should return the character(s) in the middle of the string', () => {
    assert.strictEqual('read'.getMiddle(), 'ea');
    assert.strictEqual('reads'.getMiddle(), 'a');
    assert.strictEqual('shallow hallow'.getMiddle(), 'w ');
  });
});

describe('numberWords', () => {
  it('should return a String', () => {
    '325'.numberWords().should.be.a('String');
  });

  it('should return the numbers in words', () => {
    assert.strictEqual('325'.numberWords(), 'three two five');
  });
});

describe('isDigit', () => {
  it('should return a boolean', () => {
    '3'.isDigit().should.be.a('boolean');
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
    'aa, !!'.doubleCheck().should.be.a('boolean');
  });

  it('should return true if it contains double characters', () => {
    assert.strictEqual('aa, !!'.doubleCheck(), true);
  });

  it('should return false if it does not contain double characters', () => {
    assert.strictEqual('Ngozi'.doubleCheck(), false);
  });
});
