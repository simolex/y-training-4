const solution = require(".");

describe("C. Z-функция", () => {
    test("test-1", () => {
        const result = solution("abracadabra");
        expect(result).toEqual([0, 0, 0, 1, 0, 1, 0, 4, 0, 0, 1]);
    });
});
