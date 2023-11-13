const solution = require(".");

describe("E. Средний уровень", () => {
    test("test-1", () => {
        const result = solution(3, [1, 3, 4]);
        expect(result).toEqual([5, 3, 4]);
    });
    test("test-2", () => {
        const result = solution(5, [3, 7, 8, 10, 15]);
        expect(result).toEqual([28, 16, 15, 17, 32]);
    });
});
