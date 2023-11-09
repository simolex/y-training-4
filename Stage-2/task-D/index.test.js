const solution = require(".");

describe("D. Кубики в зеркале", () => {
    test("test-1", () => {
        const result = solution(6, 2, [1, 1, 2, 2, 1, 1]);
        expect(result).toEqual([3, 5, 6]);
    });
});
