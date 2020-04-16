const serviceTest = require('./service-string-mock');

describe("testing implementation", () => {
  it("mocking function to receive a parameter an return in lower case", () => {
    const first = jest
      .spyOn(serviceTest, "firstFunction")
      .mockImplementation(a => a.toLowerCase());

    expect(first("UPPERCASE")).toBe("uppercase");
    expect(first).toHaveBeenCalled();
    expect(first).toHaveBeenCalledTimes(1);
    expect(first).toHaveBeenCalledWith("UPPERCASE");

    serviceTest.firstFunction.mockRestore();

    expect(serviceTest.firstFunction("lowercase")).toBe("LOWERCASE");
  });

  it("mocking function that receives a parameter and returns the last letter", () => {
    serviceTest.secondFunction.mockImplementation(a => a.charAt(a.length - 1));

    expect(serviceTest.secondFunction("texting")).toBe("g");
    expect(serviceTest.secondFunction).toHaveBeenCalled();
    expect(serviceTest.secondFunction).toHaveBeenCalledTimes(1);
    expect(serviceTest.secondFunction).toHaveBeenCalledWith("texting");
  });

  it("mocking function that receives three parameters and concatenates them", () => {
    serviceTest.thirdFunction.mockImplementation((x, y, z) => x.concat(y, z));

    expect(serviceTest.thirdFunction("Tr", "y", "be")).toBe("Trybe");
    expect(serviceTest.thirdFunction).toHaveBeenCalled();
    expect(serviceTest.thirdFunction).toHaveBeenCalledTimes(1);
    expect(serviceTest.thirdFunction).toHaveBeenCalledWith("Tr", "y", "be");
  });
});
