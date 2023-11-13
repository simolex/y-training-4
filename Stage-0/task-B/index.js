/**
 * B. Сложить две дроби
 *
 * Даны две рациональные дроби: a/b и c/d. Сложите их и результат представьте в виде
 * несократимой дроби m/n.
 *
 * Формат ввода:
 * Программа получает на вход 4 натуральных числа a, b, c, d, каждое из которых не больше 100.
 *
 * Формат вывода:
 * Программа должна вывести два натуральных числа m и n такие, что m/n=a/b+c/d
 * и дробь m/n – несократима.
 */
function gcd(a, b) {
    return b === 0 ? a : gcd(b, a % b);
}

function getSumFraction(a, b, c, d) {
    const n = a * d + c * b;
    const m = b * d;
    const gcdValue = gcd(n, m);

    return [n / gcdValue, m / gcdValue];
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
    const firsLine = readArray();
    const a = firsLine[0];
    const b = firsLine[1];
    const c = firsLine[2];
    const d = firsLine[3];
    const result = getSumFraction(a, b, c, d);
    console.log(result.join(" "));
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

function readEdges(n) {
    let grid = [];
    for (let i = 0; i < n; i++) {
        let vertex = readArray();
        grid.push(vertex);
    }
    return grid;
}

module.exports = getSumFraction;
