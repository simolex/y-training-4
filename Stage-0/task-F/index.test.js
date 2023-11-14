const solution = require(".");

describe("F. Лифт", () => {
    test("test-1", () => {
        const result = solution(2, 3, [3, 0, 1]);
        expect(result).toBe(8n);
    });
    test("test-1", () => {
        const result = solution(2, 3, [1, 1, 1]);
        expect(result).toBe(8n);
    });
    // test("test-2", () => {
    //     const result = solution(
    //         3,
    //         100,
    //         [
    //             0, 2, 2, 0, 0, 0, 2, 2, 0, 2, 0, 0, 1, 0, 0, 2, 0, 0, 2, 2, 0, 0, 2, 1, 1, 0, 0, 0,
    //             1, 0, 0, 0, 0, 0, 1, 1, 2, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 1, 0, 2,
    //             0, 0, 0, 2, 0, 0, 0, 2, 0, 1, 0, 1, 0, 2, 2, 1, 2, 0, 0, 0, 0, 2, 0, 0, 0, 2, 0, 2,
    //             0, 2, 0, 2, 0, 1, 0, 0, 2, 0, 2, 1, 2, 0, 1, 0,
    //         ]
    //     );
    //     expect(result).toEqual(8);
    // });
});
