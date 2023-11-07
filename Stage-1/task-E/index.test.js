const solution = require(".");

describe("B. Быстрая сортировка", () => {
    test("test-1", () => {
        const result = solution(5, [1, 5, 2, 4, 3]);
        expect(result).toEqual([1, 2, 3, 4, 5]);
    });
    test("test-2", () => {
        const result = solution(5, [2, 2, 2, 2, 2]);
        expect(result).toEqual([2, 2, 2, 2, 2]);
    });
    test("test-3", () => {
        const result = solution(5, [3, 3, 2, 2, 1]);
        expect(result).toEqual([1, 2, 2, 3, 3]);
    });
    test("test-4", () => {
        const result = solution(1, [2]);
        expect(result).toEqual([2]);
    });
    test("test-4", () => {
        const result = solution(0, []);
        expect(result).toEqual([]);
    });
});
