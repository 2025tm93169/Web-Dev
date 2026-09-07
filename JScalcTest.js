const calculate = require("./calculator");

describe("Calculator", () => {

  test("adds two numbers", () => {
    expect(calculate(10, "+", 5)).toBe(15);
  });

  test("subtracts two numbers", () => {
    expect(calculate(10, "-", 5)).toBe(5);
  });

  test("multiplies two numbers", () => {
    expect(calculate(10, "*", 5)).toBe(50);
  });

  test("divides two numbers", () => {
    expect(calculate(10, "/", 5)).toBe(2);
  });

  test("handles division by zero", () => {
    expect(calculate(10, "/", 0)).toBe("Cannot divide by zero");
  });

  test("handles invalid operator", () => {
    expect(calculate(10, "%", 5)).toBe("Invalid operator");
  });

  test("works with decimal numbers", () => {
    expect(calculate(10.5, "+", 2.5)).toBe(13);
  });

  test("works with negative numbers", () => {
    expect(calculate(-10, "+", 5)).toBe(-5);
  });

});
