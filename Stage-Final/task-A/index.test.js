const solution = require(".");

describe("A. Объединение последовательностей", () => {
    test("test-1", () => {
        const result = solution(1);
        expect(result).toBe(1);
    });
    test("test-2", () => {
        const result = solution(2);
        expect(result).toBe(4);
    });
    test("test-3", () => {
        const result = solution(4);
        expect(result).toEqual(9);
    });
});
