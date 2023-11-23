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
    0: 40,
    1: 91,
    2: 41,
    3: 93,
};

function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
        currentDate = Date.now();
    } while (currentDate - date < milliseconds);
}

const fileBuffer = () => {
    const size = 2 ** 14;
    const buffer = new Uint8Array(size);
    let current = 0;
    let bitValue;
    return {
        close() {
            if (current > 0) console.log(String.fromCharCode.apply(null, buffer.slice(0, current)));
            current = 0;
        },
        print(bitMask, n) {
            if (size - current < n + 1) {
                this.close();
            }
            current = current + n;
            for (let k = 0; k < n; k++) {
                bitValue = (bitMask >> (k * 2)) & 3;
                buffer[current - k - 1] = mapBrackets[bitValue];
            }
            buffer[current] = 10;
            current++;
        },
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
                if (parentStack[0] > 0 && (parentStack[1] & 1) + 2 === i) {
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
                    stack[curIndex + 1] = (parentStack[1] << 1) + i;
                    sets[i] = (parentSet[0] << 2) + i;
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
    //console.log(result);
}

function readInt() {
    const n = Number(_inputLines[_curLine]);
    _curLine++;
    return n;
}

module.exports = getCountSettling;
