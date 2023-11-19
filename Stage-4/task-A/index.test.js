const solution = require(".");

describe("A. Все перестановки заданной длины", () => {
    // test("test-1", () => {
    //     const result = solution(1);
    //     expect(result).toEqual([1]);
    // });
    test("test-2", () => {
        const result = solution(2);
        expect(result).toEqual(["12", "21"]);
    });
    test("test-3", () => {
        const result = solution(3);
        expect(result).toEqual(["123", "132", "213", "231", "312", "321"]);
    });
});
