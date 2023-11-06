const solution = require(".");

describe("D. Анаграмма?", () => {
    // test("test-1", () => {
    //     const result = solution("dusty", "study");
    //     expect(result).toBe("YES");
    // });
    test("test-2", () => {
        const result = solution("rat", "bat");
        expect(result).toBe("NO");
    });
});
