/**
 * E. Генерация правильных скобочных последовательностей - 2
 *
 * По данному числу N выведите все правильные скобочные последовательности из круглых
 * и квадратных скобок длины N в лексикографическом порядке.
 *
 * Формат ввода:
 * Одно целое число N (0 ≤ N ≤ 16).
 *
 * Формат вывода:
 * Выведите все правильные скобочные последовательности из круглых и квадратных скобок
 * длины N в лексикографическом порядке. Каждая последовательность должна выводиться в новой строке.
 *
 */

const bracketSet = ["(", "[", ")", "]"];

// function countDino(vr, rD, lD, n, max, count) {
//     //let prev = 0;
//     for (let i = 1; i <= max; i++) {
//         if (!vr[i] && !rD[i - 1 + n] && !lD[max - n + i - 1]) {
//             vr[i] = true;
//             rD[i - 1 + n] = true;
//             lD[max - n + i - 1] = true;
//             if (n > 0) {
//                 count = countDino(vr, rD, lD, n - 1, max, count);
//             } else {
//                 count++;
//             }

//             vr[i] = false;
//             rD[i - 1 + n] = false;
//             lD[max - n + i - 1] = false;
//         }
//     }
//     return count;
// }

function getCountSettling(n) {
    const rightDiagonal = new Array(2 * n).fill(false);
    const leftDiagonal = new Array(2 * n).fill(false);
    const vertical = new Array(n + 1).fill(false);

    const result = countDino(vertical, rightDiagonal, leftDiagonal, n - 1, n, 0);

    return result;
}

const _readline = require("readline");

const _reader = _readline.createInterface({
    input: process.stdin
});

const _inputLines = [];
let _curLine = 0;

_reader.on("line", (line) => {
    _inputLines.push(line);
});

process.stdin.on("end", solve);

function solve() {
    const n = readInt();
    // delete _readline;
    // delete _reader;
    // delete _inputLines;
    const result = getCountSettling(n);
    console.log(result);
}

function readInt() {
    const n = Number(_inputLines[_curLine]);
    _curLine++;
    return n;
}

module.exports = getCountSettling;
