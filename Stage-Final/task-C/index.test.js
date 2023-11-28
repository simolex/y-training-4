const solution = require(".");

describe("C. Переезд", () => {
    test("test-1", () => {
        const result = solution(3, 3, [
            [2, 3, 40, 3000299],
            [1, 3, 4, 3000056],
            [1, 2, 10, 3000201]
        ]);
        expect(result).toBe(2);
    });
});
