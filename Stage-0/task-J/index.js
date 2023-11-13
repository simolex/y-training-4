/**
 * J. Групповой проект
 *
 * Всего студентов по направлению «Мировая культура» — n человек. Преподаватель дал задание — групповой проект.
 * Для выполнения этого задания студенты должны разбиться на группы численностью от a до b человек.
 * Скажите, можно ли разбить всех студентов на группы для выполнения проекта или преподаватель
 * что-то перепутал.
 *
 * Формат ввода:
 * В первой строке вводится число t (1 ≤ t ≤ 100) — количество тестовых случаев.
 * Далее для каждого тестового случая вводится 3 целых числа n, a и b
 * (1 ≤ n ≤ 10^9, 1 ≤ a ≤ b ≤ n) — общее число студентов и ограничение на число студентов в одной группе.
 *
 * Формат вывода:
 * Для каждого тестового случая выведите "YES", если можно разбить студентов на группы и "NO", если нельзя.
 */

function getQueriesResult(n, queries) {
    const result = [];
    for (let i = 0; i < n; i++) {
        let isCan = false;
        const students = queries[i][0];
        const lowSize = queries[i][1] <= queries[i][2] ? queries[i][1] : queries[i][2];
        const hiSize = queries[i][1] <= queries[i][2] ? queries[i][2] : queries[i][1];

        let currentSize = lowSize;
        const groups = Math.floor(students / currentSize);
        let residue = students % currentSize;

        if (residue === 0) {
            isCan = true;
        } else {
            for (let i = 1; i <= hiSize - lowSize; i++) {
                if (residue > groups) {
                    residue -= groups;
                } else {
                    isCan = true;
                    break;
                }
            }
        }

        result.push(isCan ? "YES" : "NO");
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
    const n = readInt();

    const queries = readEdges(n);
    const result = getQueriesResult(n, queries);

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
