/**
 * A. Дейкстра
 *
 * Дан ориентированный взвешенный граф. Найдите кратчайшее расстояние от одной заданной вершины до другой.
 *
 * Формат ввода:
 * В первой строке содержатся три числа: N, S и F (1≤ N ≤ 100, 1 ≤ S, F ≤ N), где N — количество вершин
 * графа, S — начальная вершина, а F — конечная. В следующих N строках вводится по N чисел,
 * не превосходящих 100, – матрица смежности графа, где -1 означает что ребра между вершинами нет,
 * а любое неотрицательное число — наличие ребра данного веса. На главной диагонали матрицы записаны нули.
 *
 * Формат вывода:
 * Выведите искомое расстояние или -1, если пути между указанными вершинами не существует.
 */

function getPhase(n, a, m) {
    const p = [];
    for (let i = 0; i < 10; i++) {
        p[i] = [];
    }
    for (let j = 0; j < n; j++) {
        const index = a[j].length - m;
        const basket = index < 0 ? 0 : a[j].substring(index, index + 1);
        p[basket].push(a[j]);
    }

    console.log("Phase " + m);
    for (let i = 0; i < 10; i++) {
        console.log("Bucket " + i + ": " + (p[i].length > 0 ? p[i].join(", ") : "empty"));
    }
    console.log("**********");

    return p.flat();
}

function sort(n, a, max) {
    console.log("Initial array:");
    console.log(a.join(", "));
    console.log("**********");

    let r = a;
    for (let i = 0; i < max; i++) {
        r = getPhase(n, r, i + 1);
    }

    console.log("Sorted array:");
    console.log(r.join(", "));
    return r;
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
    const a = [];
    let max = 0;
    for (let i = 0; i < n; i++) {
        const s = readString();
        max = Math.max(max, s.length);
        a.push(s);
    }

    sort(n, a, max);
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

module.exports = sort;
