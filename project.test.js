const { sum, isEven } = require("./project");

test("sum(2, 3) should be 5", () => {
    expect(sum(2, 3)).toBe(5);
});

test("isEven(4) should be true", () => {
    expect(isEven(4)).toBe(true);
});

test("isEven(5) should be false", () => {
    expect(isEven(5)).toBe(false);
});