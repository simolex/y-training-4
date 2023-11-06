const solution = require(".");

describe("H. Результаты контеста", () => {
    test("test-1", () => {
        const result = solution(60, 30, 4);
        expect(result).toBe("Yes");
    });
    test("test-1", () => {
        const result = solution(30, 30, 1);
        expect(result).toBe("No");
    });
    test("test-1", () => {
        const result = solution(30, 150, 4);
        expect(result).toBe("No");
    });
});
