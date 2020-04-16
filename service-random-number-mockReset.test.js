const serviceTest = require('./service-random-number');

describe("testing implementation", () => {
  it("testing if the function was called, what is the return, how many times it was called and with what parameters", () => {
    serviceTest.randomNumber = jest.fn().mockImplementation((a, b, c) => a * b * c);

    expect(serviceTest.randomNumber(10, 2, 3)).toBe(60);
    expect(serviceTest.randomNumber).toHaveBeenCalled();
    expect(serviceTest.randomNumber).toHaveBeenCalledTimes(1);
    expect(serviceTest.randomNumber).toHaveBeenCalledWith(10, 2, 3);
  });

  it("mocking function that receives a parameter and returns its double", () => {
    expect(serviceTest.randomNumber).toHaveBeenCalledTimes(1);
    serviceTest.randomNumber.mockReset();
    expect(serviceTest.randomNumber).toHaveBeenCalledTimes(0);

    serviceTest.randomNumber.mockImplementation(a => a * 2);

    expect(serviceTest.randomNumber(10)).toBe(20);
    expect(serviceTest.randomNumber).toHaveBeenCalled();
    expect(serviceTest.randomNumber).toHaveBeenCalledTimes(1);
    expect(serviceTest.randomNumber).toHaveBeenCalledWith(10);
  })
});
