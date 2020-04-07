const convertToRoman = integer => {
  if (typeof integer !== 'number') {
    throw new Error('Argument must be a number');
  }

  if (integer <= 0) {
    throw new Error('Argument must be greater than zero');
  }

  const romanValues = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  const romanSymbols = [
    'M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I',
  ];
  let roman = '';

  romanValues.forEach((romanValue, index) => {
    while (integer >= romanValue) {
      integer -= romanValue;
      roman = roman.concat(romanSymbols[index]);
    }
  });

  return roman;
}

module.exports = convertToRoman;
