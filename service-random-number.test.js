const serviceTest = require('./service-random-number');

it("testing if the function was called, what is the return and how many times it was called", () => {
  serviceTest.randomNumber = jest.fn().mockReturnValue(10);

  expect(serviceTest.randomNumber()).toBe(10);
  expect(serviceTest.randomNumber).toHaveBeenCalled();
  expect(serviceTest.randomNumber).toHaveBeenCalledTimes(1);
});
