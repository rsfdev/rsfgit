const serviceTest = require('./service-random-number');

it("testing if the function was called, what is the return, how many times it was called and with what parameters", () => {
  serviceTest.randomNumber = jest.fn().mockImplementationOnce((a, b) => a / b);

  expect(serviceTest.randomNumber(10, 2)).toBe(5);
  expect(serviceTest.randomNumber).toHaveBeenCalled();
  expect(serviceTest.randomNumber).toHaveBeenCalledTimes(1);
  expect(serviceTest.randomNumber).toHaveBeenCalledWith(10, 2);
});
