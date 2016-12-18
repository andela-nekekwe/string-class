const assert = require('assert');
require('../src/string-class');

describe('hasVowels', () => {
  it('should return true if the string contains vowels', () => {
    assert.equal('hhgah'.hasVowels(), true);
  });

  it('should return false if the string does not contain vowels', () => {
    assert.equal('hghghg'.hasVowels(), false);
  });
});

describe('toUpper', () => {
  it('should transform any lowercase characters to uppercase', () => {
    assert.equal('anDela'.toUpper(), 'ANDELA');
  });
});

describe('toLower', () => {
  it('should transfrom all uppercase characters to lowercase', () => {
    assert.equal('anDELA'.toLower(), 'andela');
  });
});

describe('ucFirst', () => {
  it('should return the string but transform the first character to uppercase', () => {
    assert.equal('aNDELA'.ucFirst(), 'ANDELA');
  });
});

describe('isQuestion', () => {
  it('should return true if the string is a question', () => {
    assert.equal('Andela ?'.isQuestion(), true);
  });
});

describe('words', () => {
  it('should return a list of the words in the string as an Array', () => {
    assert.equal('This is Andela'.words(), ['This', 'is', 'Andela']);
  });
});

describe('wordCount', () => {
  it('should return the number of words in the string', () => {
    assert.equal('This is Andela'.wordCount(), 3);
  });
});

describe('toCurrency', () => {
  it('should return a currency representation of the string', () => {
    assert.equal('11111.11'.toCurrency(), 11, 111.11);
  });
});

describe('fromCurrency', () => {
  it('should return a number representation of the currency', () => {
    assert.equal('11,111.11'.fromCurrency(), '11111.11');
  });
});

describe('inverseCase', () => {
  it('should return each letter in the string as an inverse of its current case', () => {
    assert.equal('Mr. Ben.'.inverseCase(), 'mR. bEN.');
  });
});

describe('alternatingCase', () => {
  it('should return the letters in the alternating cases', () => {
    assert.equal('Onomatopoeia'.alternatingCase(), 'oNoMaToPoEiA');
  });
});

describe('getMiddle', () => {
  it('should return the character(s) in the middle of the string', () => {
    assert.equal('read'.getMiddle(), 'ea');
  });
});

describe('numberWords', () => {
  it('should return the numbers in words', () => {
    assert.equal('325'.numberWords(), 5);
  });
});

describe('isDigit', () => {
  it('should return true if the string is a digit', () => {
    assert.equal('3'.isDigit(), true);
  });
  it('should return false if the string is a digit', () => {
    assert.equal('34'.isDigit(), false);
  });
});

describe('doubleCheck', () => {
  it('should return true if a string contains doubole characters', () => {
    assert.equal('aa, !!'.doubleCheck(), true);
  });
});
