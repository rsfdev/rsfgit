// Matcher error: received value must be a mock or spy function
// const service = require('./service');

// it("#randomRgbColor", () => {
//   // testing whether the funciotn was called
//   service.randomRgbColor();
//   expect(service.randomRgbColor).toHaveBeenCalled();
// });

const service = require('./service');

test("#randomRgbColor", () => {
  // testing whether the function was called. We don't simulate any behavior here because, for this test, it doesn't matter! We want to know if she was called, period.
  service.randomRgbColor = jest.fn().mockReturnValue("rgb(255, 255, 255)");

  service.randomRgbColor();
  expect(service.randomRgbColor).toHaveBeenCalled();
  expect(service.randomRgbColor()).toBe("rgb(255, 255, 255)");
});

