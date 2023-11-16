const solution = require(".");

describe("C. Быстрый алгоритм Дейкстры", () => {
    test("test-1", () => {
        const result = solution(
            6,
            4,
            [
                [1, 2, 7],
                [2, 4, 8],
                [4, 5, 1],
                [4, 3, 100]
            ],
            3,
            1
        );
        expect(result).toBe(115);
    });
});
