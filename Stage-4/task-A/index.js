/**
 * A. Все перестановки заданной длины
 *
 * По данному числу N (0 < N < 10) выведите все перестановки чисел от 1 до N в лексикографическом порядке.
 *
 */
const { createWriteStream } = require("fs");

const output = createWriteStream("output.txt");

const memoReshuffle = () => {
    let cache = new Map();
    const _reshuffle = (prefix, next) => {
        if (next.length > 1) {
            if (cache.has(next)) {
                for (let s of cache.get(next)) {
                    output.write(prefix + s + "\n");
                }
                return cache.get(next);
            } else {
                const r = [];
                for (let i = 0; i < next.length; i++) {
                    _reshuffle(
                        prefix + next.substring(i, i + 1),
                        next.substring(0, i) + next.substring(i + 1, next.length)
                    ).forEach((v) => {
                        r.push(next.substring(i, i + 1) + v);
                    });
                }
                cache.set(next, r);
                return r;
            }
        } else {
            output.write(prefix + next + "\n");
            return [next];
        }
    };
    return _reshuffle;
};

const fn = memoReshuffle();

function reshuffle(n) {
    let next = "";
    for (let i = 1; i <= n; i++) {
        next = next + i;
    }
    fn("", next);
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
    reshuffle(n);
}

function readInt() {
    const n = Number(_inputLines[_curLine]);
    _curLine++;
    return n;
}

function readArray() {
    var arr = _inputLines[_curLine]
        .trim(" ")
        .split(" ")
        .map((num) => Number(num));
    _curLine++;
    return arr;
}

module.exports = reshuffle;
