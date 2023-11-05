const solution = require(".");

describe("001. Pins", () => {
    test("test", () => {
        const result = solution(6, [3, 13, 12, 4, 14, 6]);
        expect(result).toBe(5);
    });
});
