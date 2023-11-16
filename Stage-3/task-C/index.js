/**
 * C. Быстрый алгоритм Дейкстры
 *
 * Вам дано описание дорожной сети страны. Ваша задача – найти длину кратчайшего пути между городами А и B.
 *
 * Формат ввода:
 * Сеть дорог задана во входном файле следующим образом: первая строка содержит числа N и K
 * (1 ≤ N ≤ 100000, 0 ≤ K ≤ 300000), где K – количество дорог. Каждая из следующих K строк содержит описание
 * дороги с двусторонним движением – три целых числа a[i], b[i] и l[i] (1 ≤ a[i], b[i] ≤ N, 1 ≤ l[i] ≤ 10^6).
 * Это означает, что имеется дорога длины l[i], которая ведет из города ai в город bi. В последней строке
 * находятся два числа А и В – номера городов, между которыми надо посчитать кратчайшее расстояние (1 ≤ A, B ≤ N)
 *
 * Формат вывода:
 * Выведите одно число – расстояние между нужными городами.
 * Если по дорогам от города А до города В доехать невозможно, выведите –1
 */

function fastDijkstra(n, k, arr, a, b) {
    // const dists = new Array(n + 1);
    // const visited = new Array(n + 1);
    // const path = new Array(n + 1);
    // dists.fill(Infinity, 0);
    // dists[s] = 0;
    // visited.fill(false, 1);
    // const weightPath = (from, to) => arr[from - 1][to - 1];
    // const getMinVertex = () =>
    //     dists.reduce((minIndex, v, i) => (dists[i] < dists[minIndex] && !visited[i] ? i : minIndex), 0);
    // let minVertex;
    // let value;
    // let currentLenPath;
    // for (let i = 1; i <= n; i++) {
    //     minVertex = getMinVertex();
    //     if (minVertex === 0) break;
    //     visited[minVertex] = true;
    //     currentLenPath = dists[minVertex];
    //     for (let j = 1; j <= n; j++) {
    //         value = weightPath(minVertex, j);
    //         if (value > 0) {
    //             if (dists[j] > currentLenPath + value) {
    //                 dists[j] = currentLenPath + value;
    //                 path[j] = minVertex;
    //             }
    //         }
    //     }
    // }
    // let currentPoint;
    // const pathArr = [];
    // let result;
    // if (dists[f] === Infinity) {
    //     result = -1;
    // } else {
    //     currentPoint = f;
    //     while (currentPoint !== s) {
    //         pathArr.push(currentPoint);
    //         currentPoint = path[currentPoint];
    //     }
    //     pathArr.push(s);
    //     pathArr.reverse();
    //     result = pathArr.join(" ");
    // }
    // return result;
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
    const params_1 = readArray();
    const n = params_1[0];
    const k = params_1[1];

    const arr = [];
    for (let i = 0; i < k; i++) {
        arr.push(readArray());
    }

    const params_2 = readArray();
    const a = params_2[0];
    const b = params_2[1];

    const len = fastDijkstra(n, k, arr, a, b);
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

module.exports = fastDijkstra;
