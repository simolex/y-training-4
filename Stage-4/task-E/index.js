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
    3: "]",
};

class Bracket {
    constructor(pos, prev = null) {
        this.code = 0;
        this.pos = pos;
        this.prev = prev;
    }
    nextBracket() {
        this.code++;
        return this.code < 4 ? this : this.prev; // TODO
    }
    toString() {
        return !!this.prev ? this.prev.toString() + mapBrackets[this.code] : mapBrackets[this.code];
    }
}

const fileBuffer = () => {
    const size = 2 ** 11;
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
        print(setOfBrackets) {
            if (size - current < 1) {
                this.close();
            }
            buffer[current] = setOfBrackets;
            current++;
        },
        end() {
            output.end();
        },
    };
};
const file = fileBuffer();

function getValidSet(parentStack, parentBracket, position, n) {
    const stack = new Uint8Array(8);
    const curBrackets = [];

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
                    curBrackets[i] = new Bracket(mapBrackets[i], parentBracket);

                    if (position === n && stack[curIndex] === 0) {
                        file.print(curBrackets[i].toString() + "\n");
                        curBrackets[i] = null;
                        return true;
                    }
                } else stack[curIndex] = n;
            } else {
                if (parentStack[0] <= n / 2 - 1) {
                    stack[curIndex] = parentStack[0] + 1;
                    stack[curIndex + 1] = (parentStack[1] << 1) | i;
                    curBrackets[i] = new Bracket(mapBrackets[i], parentBracket);
                } else {
                    stack[curIndex] = n;
                }
            }
            if (stack[curIndex] <= n / 2 && position < n) {
                getValidSet(stack.slice(curIndex, curIndex + 2), curBrackets[i], position, n);
            }
            curBrackets[i] = null;
        }
    }
    delete stack;
    delete curBrackets;
}

function getCountSettling(n) {
    if (n % 2 == 1 || n === 0) {
        console.log("");
        return;
    }
    const stack = new Uint8Array(2);
    if (n > 15) {
        // ((
        stack[0] = 2;
        stack[1] = 0;
        let b = new Bracket("((");
        getValidSet(stack, b, 2, n);
        b = null;
        file.close();
        // ([
        stack[0] = 2;
        stack[1] = 1;
        b = new Bracket("([");
        getValidSet(stack, b, 2, n);
        b = null;
        file.close();
        // ()
        stack[0] = 0;
        stack[1] = 0;
        b = new Bracket("()");
        getValidSet(stack, b, 2, n);
        b = null;
        file.close();
        // [(
        stack[0] = 2;
        stack[1] = 2;
        b = new Bracket("[(");
        getValidSet(stack, b, 2, n);
        b = null;
        file.close();
        // [[
        stack[0] = 2;
        stack[1] = 3;
        b = new Bracket("[[");
        getValidSet(stack, b, 2, n);
        b = null;
        file.close();
        // []
        stack[0] = 0;
        stack[1] = 0;
        b = new Bracket("[]");
        getValidSet(stack, b, 2, n);
        b = null;
    } else {
        stack[0] = 1;
        stack[1] = 0;
        let b = new Bracket("(");
        getValidSet(stack, b, 1, n);
        b = null;

        stack[0] = 1;
        stack[1] = 1;
        b = new Bracket("[");
        getValidSet(stack, b, 1, n);
        b = null;
    }

    file.close();
    file.end();
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
