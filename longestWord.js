const assert = require('assert');

const longestWord = (text) => {
  const words = text.split(' ');
  let maxLength = 0;
  let biggestWord;

  for (let i = 0; i < words.length; i++) {
    if (words[i].length > maxLength) {
      maxLength = words[i].length;
      biggestWord = words[i];
    }
  }

  return biggestWord;
};

const param = 'Antonio foi ao banheiro e não sabemos o que aconteceu';
const expected = 'aconteceu';

assert.strictEqual(longestWord(param), expected);
