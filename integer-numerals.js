const romanToIntegerMap = {
  'I': 1,
  'V': 5,
  'X': 10,
  'L': 50,
  'C': 100,
  'D': 500,
  'M': 1000,
};

const valueOf = romanSymbol => romanToIntegerMap[romanSymbol];

const convertToInteger = romanNum =>
  romanNum.split('').reduce(
    (total, symbol, index, symbols) => {
      const currentValue = valueOf(symbol);
      const nextValue = valueOf(symbols[index + 1]);

      if (currentValue < nextValue) return total - currentValue;
      return total + currentValue;
    },
    0
  );

module.exports = convertToInteger;
