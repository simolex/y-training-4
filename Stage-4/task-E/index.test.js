const solution = require(".");

describe("E. Генерация правильных скобочных последовательностей - 2", () => {
    test("test-0", () => {
        const result = solution(0);
        expect(result).toEqual([""]);
    });
    test("test-1", () => {
        const result = solution(1);
        expect(result).toEqual([""]);
    });
    test("test-4", () => {
        const result = solution(4);
        expect(result).toEqual(["(())", "([])", "()()", "()[]", "[()]", "[[]]", "[]()", "[][]"]);
    });
});
