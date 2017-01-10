const assert = require('assert');
require('../src/string-class');

describe('hasVowels', () => {
  it('should return true if the string contains vowels', () => {
    assert.strictEqual('hhgah'.hasVowels(), true);
    assert.strictEqual('aagoh'.hasVowels(), true);
  });

  it('should return false if the string does not contain vowels', () => {
    assert.strictEqual('hghghg'.hasVowels(), false);
    assert.strictEqual('hhppppp'.hasVowels(), false);
  });
});

describe('toUpper', () => {
  it('should transform any lowercase characters to uppercase', () => {
    assert.strictEqual('anDela'.toUpper(), 'ANDELA');
    assert.strictEqual('anDela fellow'.toUpper(), 'ANDELA FELLOW'); 
  });
});

describe('toLower', () => {
  it('should transfrom all uppercase characters to lowercase', () => {
    assert.strictEqual('andela'.toLower(), 'andela');
  });
  it('should transfrom all uppercase characters in a string to lowercase', () => {
    assert.strictEqual('anDELA'.toLower(), 'andela');
  });
});

describe('ucFirst', () => {
  it('should return the string but transform the first character to uppercase', () => {
    assert.strictEqual('aNDELA'.ucFirst(), 'ANDELA');
  });
});

describe('isQuestion', () => {
  it('should return true if the string is a question', () => {
    assert.strictEqual('Andela ?'.isQuestion(), true);
  });
});

describe('words', () => {
  it('should return a list of the words in the string as an Array', () => {
    assert.deepEqual('It is working'.words(), ['It', 'is', 'working']);
  });
});

describe('wordCount', () => {
  it('should return the number of words in the string', () => {
    assert.strictEqual('This is Andela'.wordCount(), 3);
    assert.strictEqual('Andela'.wordCount(), 1);
  });
});

describe('toCurrency', () => {
  it('should return a currency representation of the string', () => {
    assert.strictEqual('11111.11'.toCurrency(), '11,111.11');
  });
});

describe('fromCurrency', () => {
  it('should return a number representation of the currency', () => {
    assert.strictEqual('11,111.11'.fromCurrency(), 11111.11);
  });
});

describe('inverseCase', () => {
  it('should return each letter in the string as an inverse of its current case', () => {
    assert.strictEqual('Mr. Ben.'.inverseCase(), 'mR. bEN.');
  });
});

describe('alternatingCase', () => {
  it('should return the letters in the alternating cases', () => {
    assert.strictEqual('Onomatopoeia'.alternatingCase(), 'oNoMaToPoEiA');
  });
});

describe('getMiddle', () => {
  it('should return the character(s) in the middle of the string', () => {
    assert.strictEqual('read'.getMiddle(), 'ea');
  });
});

describe('numberWords', () => {
  it('should return the numbers in words', () => {
    assert.strictEqual('325'.numberWords(), 'three two five');
  });
});

describe('isDigit', () => {
  it('should return true if the string is a digit', () => {
    assert.strictEqual('3'.isDigit(), true);
  });
  it('should return false if the string is a digit', () => {
    assert.strictEqual('34'.isDigit(), false);
  });
});

describe('doubleCheck', () => {
  it('should return true if a string contains doubole characters', () => {
    assert.strictEqual('aa, !!'.doubleCheck(), true);
  });
});
