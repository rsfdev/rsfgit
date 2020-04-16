const service = require("./service-fetch-mock");
describe("testing the request", () => {
  service.fetchDog = jest.fn();
  afterEach(service.fetchDog.mockReset);

  test("testing request if the promise is resolved", async () => {
    service.fetchDog.mockResolvedValue("request sucess");

    service.fetchDog();
    expect(service.fetchDog).toHaveBeenCalled();
    expect(service.fetchDog).toHaveBeenCalledTimes(1);
    expect(service.fetchDog()).resolves.toBe("request sucess");
    expect(service.fetchDog).toHaveBeenCalledTimes(2);
  });

  test("testing request if the promise is rejected", async () => {
    service.fetchDog.mockRejectedValue("request failed");

    expect(service.fetchDog).toHaveBeenCalledTimes(0);
    expect(service.fetchDog()).rejects.toMatch("request failed");
    expect(service.fetchDog).toHaveBeenCalledTimes(1);
  });
});
