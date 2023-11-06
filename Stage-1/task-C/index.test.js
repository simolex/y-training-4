const solution = require(".");

describe("A. Partition", () => {
    test("test-1", () => {
        const result = solution(5, [1, 3, 5, 5, 9], 3, [2, 5, 6]);
        expect(result).toEqual([1, 2, 3, 5, 5, 5, 6, 9]);
    });
    test("test-2", () => {
        const result = solution(1, [0], 0, []);
        // console.log(result.e);
        // console.log(0 - result.e);
        expect(result).toEqual([0]);
    });
    test("test-3", () => {
        const result = solution(0, [], 1, [0]);
        // console.log(result.e);
        // console.log(1 - result.e);
        expect(result).toEqual([0]);
    });
});
