const solution = require(".");

describe("A. Все перестановки заданной длины", () => {
    test("test-1", () => {
        const result = solution(1);
        expect(result).toEqual([[1]]);
    });
    test("test-2", () => {
        const result = solution(2);
        expect(result).toEqual([
            [1, 2],
            [2, 1]
        ]);
    });
    test("test-3", () => {
        const result = solution(3);
        expect(result).toEqual([
            [1, 2, 3],
            [1, 3, 2],
            [2, 1, 3],
            [2, 3, 1],
            [3, 1, 2],
            [3, 2, 1]
        ]);
    });
});
