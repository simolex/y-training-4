const solution = require(".");

describe("E. Подпалиндромы", () => {
    test("test-1", () => {
        const result = solution(5, "BBABB");
        expect(result).toEqual([1, 2, 0, 1, 5]);
    });
    test("test-2", () => {
        const result = solution(49, "burannarubabyrrybaglipspiritmatankollokvzumbboyus");
        expect(result).toEqual([
            1, 0, 0, 0, 0, 0, 0, 0, 0, 10, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0
        ]);
    });
});
