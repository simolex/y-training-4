const solution = require(".");

describe("E. Подпалиндромы", () => {
    test("test-1", () => {
        const result = solution("aaa");
        expect(result).toBe(6);
    });
    // test("test-1", () => {
    //     const result = solution("aaaa");
    //     expect(result).toBe(9);
    // });
    // test("test-2", () => {
    //     const result = solution("aba");
    //     expect(result).toBe(4);
    // });
    // test("test-3", () => {
    //     const result = solution("a");
    //     expect(result).toBe(1);
    // });
    // test("test-4", () => {
    //     const result = solution("");
    //     expect(result).toBe(0);
    // });
    // test("test-5", () => {
    //     const result = solution("abdsaw");
    //     expect(result).toBe(7);
    // });
    // test("test-2", () => {
    //     const result = solution("abac");
    //     expect(result).toBe(6);
    // });
});
