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
const fs = require("fs");

const mapBrackets = {
    0: "(",
    1: "[",
    2: ")",
    3: "]"
};

function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
        currentDate = Date.now();
    } while (currentDate - date < milliseconds);
}

const fileBuffer = () => {
    const size = 2 ** 13;
    const buffer = new Array(size);
    const output = fs.createWriteStream("brackets2.out", { highWaterMark: 10240 });
    let current = 0;
    let bitValue;
    let v;
    return {
        close() {
            if (current > 0) output.write(buffer.slice(0, current).join(""));
            current = 0;
        },
        print(bitMask, n) {
            if (size - current < 1) {
                this.close();
            }
            let v = "";
            for (let k = 0; k < n; k++) {
                bitValue = (bitMask >> (k * 2)) & 3;
                v = mapBrackets[bitValue] + v;
            }
            buffer[current] = v + "\n";
            v = null;
            current++;
        },
        end() {
            output.end();
        }
    };
};
const file = fileBuffer();

function getValidSet(parentStack, parentSet, position, n) {
    const stack = new Uint8Array(8);
    const sets = new Uint32Array(4);

    if (parentStack[0] > n / 2) return false;
    if (position < n) {
        let curIndex;
        position++;

        for (let i = 0; i < 4; i++) {
            curIndex = 2 * i;

            if (i > 1) {
                if (parentStack[0] > 0 && ((parentStack[1] & 1) | 2) === i) {
                    stack[curIndex] = parentStack[0] - 1;
                    stack[curIndex + 1] = parentStack[1] >> 1;
                    sets[i] = (parentSet[0] << 2) + i;

                    if (position === n && stack[curIndex] === 0) {
                        file.print(sets[i], n);
                        return true;
                    }
                } else stack[curIndex] = n;
            } else {
                if (parentStack[0] <= n / 2 - 1) {
                    stack[curIndex] = parentStack[0] + 1;
                    stack[curIndex + 1] = (parentStack[1] << 1) | i;
                    sets[i] = (parentSet[0] << 2) | i;
                } else {
                    stack[curIndex] = n;
                }
            }
            if (stack[curIndex] <= n / 2 && position < n) {
                getValidSet(stack.slice(curIndex, curIndex + 2), sets.slice(i, i + 1), position, n);
            }
        }
    }
}

function getCountSettling(n) {
    if (n % 2 == 1 || n === 0) {
        console.log("");
        return;
    }
    const stack = new Uint8Array(2);
    const arrSet = new Uint32Array(1);

    stack[0] = 1;
    stack[1] = 0;
    arrSet[0] = 0;

    getValidSet(stack, arrSet, 1, n);

    stack[0] = 1;
    stack[1] = 1;
    arrSet[0] = 1;

    getValidSet(stack, arrSet, 1, n);
    file.close();
    file.end();
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
