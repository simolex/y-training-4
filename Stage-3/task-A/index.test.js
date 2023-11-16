const solution = require(".");

describe("A. Дейкстра", () => {
    test("test-1", () => {
        const result = solution(3, 2, 1, [
            [0, 1, 1],
            [4, 0, 1],
            [2, 1, 0]
        ]);
        expect(result).toBe(3);
    });
    test("test-2", () => {
        const result = solution(4, 2, 3, [
            [0, -1, -1, -1],
            [1, 0, -1, 1],
            [1, -1, 0, 1],
            [-1, -1, -1, 0]
        ]);
        expect(result).toBe(-1);
    });
});
