const solution = require(".");

describe("A. Partition", () => {
    test("test-1", () => {
        const result = solution(5, [1, 9, 4, 2, 3], 3);
        // console.log(result.e);
        // console.log(5 - result.e);
        expect(result).toEqual({ e: 2, g: 3 });
    });
    test("test-2", () => {
        const result = solution(0, [], 0);
        // console.log(result.e);
        // console.log(0 - result.e);
        expect(result).toEqual({ e: 0, g: 0 });
    });
    test("test-3", () => {
        const result = solution(1, [0], 0);
        // console.log(result.e);
        // console.log(1 - result.e);
        expect(result).toEqual({ e: 0, g: 1 });
    });
});
