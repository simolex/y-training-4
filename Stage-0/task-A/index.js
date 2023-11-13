/**
 * A. Не минимум на отрезке
 *
 * Задана последовательность целых чисел a1, a2, …, an. Задаются запросы: сказать любой элемент
 * последовательности на отрезке от L до R включительно, не равный минимуму на этом отрезке.
 *
 * Формат ввода:
 * В первой строке содержатся два целых числа N, 1 ≤ N ≤ 100 и M, 1 ≤ M ≤ 1000 — длина
 * последовательности и количество запросов соответственно.
 * Во второй строке — сама последовательность, 0 ≤ ai ≤ 1000.
 * Начиная с третьей строки перечисляются M запросов, состоящих из границ отрезка L и R,
 * где L, R - индексы массива, нумеруются с нуля.
 *
 * Формат вывода:
 * На каждый запрос выведите в отдельной строке ответ — любой элемент на [L, R], кроме минимального.
 * В случае, если такого элемента нет, выведите "NOT FOUND".
 */

function getQueriesResult(n, m, numberLine, queries) {
    const result = [];

    for (let i = 0; i < m; i++) {
        const l = queries[i][0];
        const r = queries[i][1];
        let min = 1001;
        let max = 0;
        for (let j = l; j <= r && j < n; j++) {
            min = Math.min(numberLine[j], min);
            max = Math.max(numberLine[j], max);
        }
        result.push(min === max ? "NOT FOUND" : max);
    }
    return result;
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
    const n = firsLine[0];
    const m = firsLine[1];
    const numberLine = readArray();

    const queries = readEdges(m);
    const result = getQueriesResult(n, m, numberLine, queries);
    console.log(result.join("\n"));
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

module.exports = getQueriesResult;
