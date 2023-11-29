const solution = require(".");

describe("C. Переезд", () => {
    test("test-1", () => {
        const result = solution(5, 2, [1, 2]);
        expect(result).toBe([2, 2, 1]);
    });
    test("test-2", () => {
        const result = solution(7, 2, [1, 2]);
        expect(result).toBeUndefined();
    });
    test("test-3", () => {
        const result = solution(5, 2, [3, 4]);
        expect(result).toBe([]);
    });
});
