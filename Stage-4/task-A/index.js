/**
 * A. Все перестановки заданной длины
 *
 * По данному числу N (0 < N < 10) выведите все перестановки чисел от 1 до N в лексикографическом порядке.
 *
 */
const fs = require("fs");

const output = fs.createWriteStream("output.txt", { highWaterMark: 10240 });

// Алгоритм Нарайаны
function reshuffle(n) {
    const value = new Int8Array(n);

    let steps = 1;
    for (let i = 1; i <= n; i++) {
        value[i - 1] = "" + i;
        steps *= i;
    }
    let v;
    for (let j = 0; j < n; j++) {
        v = [];
        for (let i = 0; i < steps / n; i++) {
            let l, r;
            let temp;
            v.push(value.join("") + "\n");

            l = n - 2;
            while (value[l] > value[l + 1] && l >= 0) {
                l--;
            }
            r = n - 1;
            while (value[r] < value[l] && l >= 0) {
                r--;
            }

            temp = value[r];
            value[r] = value[l];
            value[l] = temp;

            l = l + 1;
            r = n - 1;
            while (l < r) {
                temp = value[r];
                value[r] = value[l];
                value[l] = temp;
                l++;
                r--;
            }
        }
        output.write(v.join(""));
        v = null;
    }

    output.end();
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
    delete _readline;
    delete _reader;
    delete _inputLines;
    reshuffle(n);
}

function readInt() {
    const n = Number(_inputLines[_curLine]);
    _curLine++;
    return n;
}

module.exports = reshuffle;
