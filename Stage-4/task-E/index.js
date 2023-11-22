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

// const bracketsSet = ["(", "[", ")", "]"];
const mapBrackets = {
    0: "(",
    1: "[",
    2: ")",
    3: "]",
};

function getValidSet(vStack, szStack, arrSet, index, position, n) {
    if (position < n) {
        let curIndex;
        position++;

        for (let i = 0; i < 4; i++) {
            curIndex = 4 * index + i + 1;

            if (i > 1) {
                if (szStack[index] > 0 && (vStack[index] & 1) + 2 === i) {
                    szStack[curIndex] = szStack[index] - 1;
                    vStack[curIndex] = vStack[index] >> 1;
                    arrSet[curIndex] = (arrSet[index] << 2) + i;

                    if (position === n) {
                        let curSet = arrSet[curIndex];
                        let sLine = "";
                        for (let k = 0; k < n; k++) {
                            const bitValue = curSet & 3;
                            sLine = mapBrackets[bitValue] + sLine;
                            curSet = curSet >> 2;
                        }
                        console.log(sLine);
                    }
                }
            } else {
                if (szStack[index] >= n / 2) return false;
                szStack[curIndex] = szStack[index] + 1;
                vStack[curIndex] = (vStack[index] << 1) + i;
                arrSet[curIndex] = (arrSet[index] << 2) + i;
            }
            getValidSet(vStack, szStack, arrSet, curIndex, position, n);
        }
    }
}

function getCountSettling(n) {
    const valueStackValidate = new Uint8Array(4 ** (n - 1) + 1);
    const sizeStackValidate = new Uint8Array(4 ** (n - 1) + 1);
    const arrSetOfBrackets = new Uint16Array(4 ** (n - 1) + 1);

    const index = 0;
    valueStackValidate[index] = 0;
    sizeStackValidate[index] = 1;
    arrSetOfBrackets[index] = 0;

    getValidSet(valueStackValidate, sizeStackValidate, arrSetOfBrackets, index, 1, n);
}

const _readline = require("readline");

const _reader = _readline.createInterface({
    input: process.stdin,
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
