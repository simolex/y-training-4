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
    3: "]"
};

function getValidSet(vStack, szStack, arrSet, index, position, n) {
    if (szStack[index] > n / 2) return false;
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

                    if (position === n && szStack[curIndex] === 0) {
                        let sLine = "";
                        for (let k = 0; k < n; k++) {
                            const bitValue = (arrSet[curIndex] >> (k * 2)) & 3;
                            sLine = mapBrackets[bitValue] + sLine;
                        }
                        console.log(sLine);
                        return true;
                    }
                } else szStack[curIndex] = n;
            } else {
                if (szStack[index] <= n / 2) {
                    szStack[curIndex] = szStack[index] + 1;
                    vStack[curIndex] = (vStack[index] << 1) + i;
                    arrSet[curIndex] = (arrSet[index] << 2) + i;
                } else {
                    szStack[curIndex] = n;
                }
            }
            if (szStack[curIndex] <= n / 2) {
                getValidSet(vStack, szStack, arrSet, curIndex, position, n);
            }
        }
    }
}

function getCountSettling(n) {
    if (n % 2 == 1 || n === 0) {
        console.log("");
        return;
    }

    let lenArraies = 0;
    for (let k = 0; k < n; k++) {
        lenArraies = lenArraies * 4 + 1;
    }

    const valueStackValidate = new Uint8Array(lenArraies);
    const sizeStackValidate = new Uint8Array(lenArraies);
    const arrSetOfBrackets = new Uint32Array(lenArraies);

    const index = 0;
    valueStackValidate[index] = 0;
    sizeStackValidate[index] = 1;
    arrSetOfBrackets[index] = 0;

    getValidSet(valueStackValidate, sizeStackValidate, arrSetOfBrackets, index, 1, n);

    valueStackValidate[index] = 1;
    sizeStackValidate[index] = 1;
    arrSetOfBrackets[index] = 1;

    getValidSet(valueStackValidate, sizeStackValidate, arrSetOfBrackets, index, 1, n);
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
    //console.log(result);
}

function readInt() {
    const n = Number(_inputLines[_curLine]);
    _curLine++;
    return n;
}

module.exports = getCountSettling;
