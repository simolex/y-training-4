const solution = require(".");

describe("A. Не минимум на отрезке", () => {
    test("test-1", () => {
        const result = solution(
            10,
            5,
            [1, 1, 1, 2, 2, 2, 3, 3, 3, 10],
            [
                [0, 1],
                [0, 3],
                [3, 4],
                [7, 9],
                [3, 7],
            ]
        );
        expect(result).toEqual(["NOT FOUND", 2, "NOT FOUND", 10, 3]);
    });
    test("test-2", () => {
        const result = solution(
            4,
            2,
            [1, 1, 1, 2],
            [
                [0, 2],
                [0, 3],
            ]
        );
        expect(result).toEqual(["NOT FOUND", 2]);
    });
});
