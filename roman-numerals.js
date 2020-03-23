const convertToRoman = (integer) => {
  const digits = [...integer + ''];
  const romanDigits = [];

  if (digits.length === 1) {
    return convertDigit(Number(digits[0]), 'I', 'V');
  } else if (digits.length === 2) {
    romanDigits[0] = convertDigit(Number(digits[0]), 'X', 'L');
    romanDigits[1] = convertDigit(Number(digits[1]), 'I', 'V');

    return `${romanDigits[0]}${romanDigits[1]}`;
  } else if (digits.length === 3) {
    romanDigits[0] = convertDigit(Number(digits[0]), 'C', 'D');
    romanDigits[1] = convertDigit(Number(digits[1]), 'X', 'L');
    romanDigits[2] = convertDigit(Number(digits[2]), 'I', 'V');

    return `${romanDigits[0]}${romanDigits[1]}${romanDigits[2]}`;
  } else if (digits.length === 4) {
    romanDigits[0] = 'M'.repeat(Number(digits[0]));
    romanDigits[1] = convertDigit(Number(digits[1]), 'C', 'D');
    romanDigits[2] = convertDigit(Number(digits[2]), 'X', 'L');
    romanDigits[3] = convertDigit(Number(digits[3]), 'I', 'V');

    return `${romanDigits[0]}${romanDigits[1]}${romanDigits[2]}${romanDigits[3]}`;
  }
}

const convertDigit = (digit, romanNumber, prefix) => {
  if (digit >= 5) return `${prefix}${romanNumber.repeat(digit - 5)}`;
  return romanNumber.repeat(digit);
}

module.exports = convertToRoman;
