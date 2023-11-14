const solution = require(".");

describe("C. Путешествие по Москве", () => {
    test("test-1", () => {
        const result = solution([0, 5, 4, 3]);
        expect(result).toBeCloseTo(4.636476090008, 6);
    });
    test("test-2", () => {
        const result = solution([0, 5, 4, -3]);
        expect(result).toBeCloseTo(10.0, 6);
    });
});
