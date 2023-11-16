/**
 * B. Дейкстра с восстановлением пути
 *
 * Дан ориентированный взвешенный граф. Найдите кратчайший путь от одной заданной вершины до другой.
 *
 * Формат ввода:
 * В первой строке содержатся три числа: N, S и F (1≤ N ≤ 100, 1 ≤ S, F ≤ N), где N — количество вершин
 * графа, S — начальная вершина, а F — конечная. В следующих N строках вводится по N чисел,
 * не превосходящих 100, – матрица смежности графа, где -1 означает что ребра между вершинами нет,
 * а любое неотрицательное число — наличие ребра данного веса. На главной диагонали матрицы записаны нули.
 *
 * Формат вывода:
 * Последовательно выведите все вершины одного (любого) из кратчайших путей, или -1, если пути между
 * указанными вершинами не существует
 */

function lengthShortPath(n, s, f, a) {
    const dists = new Array(n + 1);
    const visited = new Array(n + 1);
    const path = new Array(n + 1);

    dists.fill(Infinity, 0);
    dists[s] = 0;
    visited.fill(false, 1);

    const weightPath = (from, to) => a[from - 1][to - 1];
    const getMinVertex = () =>
        dists.reduce((minIndex, v, i) => (dists[i] < dists[minIndex] && !visited[i] ? i : minIndex), 0);

    let minVertex;
    let value;
    let currentLenPath;

    for (let i = 1; i <= n; i++) {
        minVertex = getMinVertex();
        if (minVertex === 0) break;

        visited[minVertex] = true;
        currentLenPath = dists[minVertex];

        for (let j = 1; j <= n; j++) {
            value = weightPath(minVertex, j);
            if (value > 0) {
                if (dists[j] > currentLenPath + value) {
                    dists[j] = currentLenPath + value;
                    path[j] = minVertex;
                }
            }
        }
    }
    let currentPoint;
    const pathArr = [];
    let result;

    if (dists[f] === Infinity) {
        result = -1;
    } else {
        currentPoint = f;
        while (currentPoint !== s) {
            pathArr.push(currentPoint);
            currentPoint = path[currentPoint];
        }
        pathArr.push(s);
        pathArr.reverse();
        result = pathArr.join(" ");
    }
    return result;
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
    const params = readArray();
    const n = params[0];
    const s = params[1];
    const f = params[2];
    const a = [];

    for (let i = 0; i < n; i++) {
        a.push(readArray());
    }

    const len = lengthShortPath(n, s, f, a);
    console.log(len);
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

module.exports = lengthShortPath;
