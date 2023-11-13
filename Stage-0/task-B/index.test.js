const solution = require(".");

describe("B. Сложить две дроби", () => {
    test("test-1", () => {
        const result = solution(1, 2, 1, 2);
        expect(result).toEqual([1, 1]);
    });

    test("test-1", () => {
        const result = solution(2, 3, 1, 4);
        expect(result).toEqual([11, 12]);
    });
});
