// It is not working
const getChange = require('./getChange');

describe('getChange', () => {
  let result, expected;

  test('returns an empty array when there is no change', () => {
    result = getChange(1, 1); //no change/coins just an empty array
    expected = [];
    expect(result).toEqual(expected);
  });

  test('returns the correct change when there is change', () => {
    result = getChange(215, 300); // expect an array containing [50, 20, 10, 5]
    expected = [50, 20, 10, 5];
    expect(result).toEqual(expected);

    result = getChange(486, 600); // expect an array containing [100, 10, 2, 2]
    expected = [100, 10, 2, 2];
    expect(result).toEqual(expected);

    result = getChange(12, 400); // expect an array containing [200, 100, 50, 20, 10, 5, 2, 1]
    expected = [200, 100, 50, 20, 10, 5, 2, 1];
    expect(result).toEqual(expected);
  });

  test('throws an error when paid value is not enougth', () => {
    expect(() => {
      getChange(100, 10)
    }).toThrow(/paid value is not enough/);
  });

});
