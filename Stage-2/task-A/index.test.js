const solution = require(".");

describe("Задача: A.Равенство подстрок", () => {
    test("test-1", () => {
        const result = solution("acabaca", 3, [
            [4, 3, 2],
            [3, 4, 0],
            [2, 0, 1],
        ]);
        expect(result).toEqual(["no", "yes", "no"]);
    });
    test("test-2", () => {
        const result = solution("caeabaeadedcbdcdccec", 10, [
            [13, 4, 3],
            [2, 12, 15],
            [10, 1, 3],
            [3, 8, 15],
            [13, 5, 6],
            [7, 2, 6],
            [9, 8, 8],
            [19, 0, 0],
            [19, 0, 0],
            [6, 7, 13],
        ]);
        expect(result).toEqual(["no", "no", "no", "no", "no", "no", "yes", "yes", "yes", "no"]);
    });
});
