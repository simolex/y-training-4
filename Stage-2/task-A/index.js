/**
 * A. Равенство подстрок
 *
 * Дана строка S, состоящая из строчных латинских букв.
 * Определите, совпадают ли строки одинаковой длины L, начинающиеся с позиций A и B.
 *
 * Формат ввода:
 * В первой строке записана S (1 ≤ |S| ≤ 2 ⋅ 105), состоящая из строчных латинских букв.
 * Во второй строке записано число Q (1 ≤ Q ≤ 2 ⋅ 105) — количество запросов.
 * В следющих Q строках записаны запросы: целые числа L, A и B
 * (1 ≤ L ≤ |S|, 0 ≤ A, B ≤ (|S| - L)) — длина подстрок и позиции, с которых они начинаются.
 *
 * Формат вывода:
 * Если строки совпадают — выведите "yes", иначе — "no".
 */

function equalSubstrings(s, n, queries) {
    const len = s.length;
    const h = [0];
    const x = [1];

    const xValue = 257;
    const pMod = 10 ** 8 + 7;
    //TODO need multiTest

    const isEqual = (from_1, from_2, subLen) => {
        return (
            (h[from_1 + subLen] + h[from_2] * x[subLen]) % pMod ===
            (h[from_2 + subLen] + h[from_1] * x[subLen]) % pMod
        );
    };

    s = " " + s;
    const sArr = s.split("");
    for (let i = 1; i <= len; i++) {
        h[i] = (h[i - 1] * xValue + sArr[i].charCodeAt(0)) % pMod;
        x[i] = (x[i - 1] * xValue) % pMod;
    }

    return queries.map((q) => (isEqual(q[1], q[2], q[0]) ? "yes" : "no"));
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
    const s = readString();
    const n = readInt();
    const queries = [];
    for (let i = 0; i < n; i++) {
        queries.push(readArray());
    }

    const result = equalSubstrings(s, n, queries);
    console.log(result.join("\n"));
}

function readInt() {
    const n = Number(_inputLines[_curLine]);
    _curLine++;
    return n;
}

function readString() {
    const s = _inputLines[_curLine].trim();
    _curLine++;
    return s;
}

function readArray() {
    var arr = _inputLines[_curLine]
        .trim(" ")
        .split(" ")
        .map((num) => Number(num));
    _curLine++;
    return arr;
}

module.exports = equalSubstrings;
