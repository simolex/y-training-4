/**
 * G. Кролик учит геометрию
 *
 * Кролики очень любопытны. Они любят изучать геометрию, бегая по грядкам. Наш кролик как раз такой. Сегодня он решил изучить
 * новую фигуру — квадрат. Кролик бегает по грядке — клеточному полю N × M клеток. В некоторых из них посеяны морковки,
 * в некоторых нет.
 * Помогите кролику найти сторону квадрата наибольшей площади, заполненного морковками полностью.
 *
 * Формат ввода:
 * В первой строке даны два натуральных числа N и M (1 ≤ N, M ≤ 1000). Далее в N строках расположено по M чисел, разделенных
 * пробелами (число равно 0, если в клетке нет морковки или 1, если есть).
 *
 * Формат вывода:
 * Выведите одно число — сторону наибольшего квадрата, заполненного морковками.
 */

function getMaxSquare(n, m, carrotField) {
    const amounts = [];
    for (let i = 0; i <= n; i++) {
        amounts[i] = [];
        for (let j = 0; j <= m; j++) {
            if (i !== 0 && j !== 0) {
                amounts[i][j] =
                    amounts[i - 1][j] +
                    amounts[i][j - 1] -
                    amounts[i - 1][j - 1] +
                    carrotField[i - 1][j - 1];
            } else {
                amounts[i][j] = 0;
            }
        }
    }

    let max = 0;
    function getSum(i_1, j_1, i_2, j_2) {
        return (
            amounts[i_2][j_2] -
            amounts[i_1 - 1][j_2] -
            amounts[i_2][j_1 - 1] +
            amounts[i_1 - 1][j_1 - 1]
        );
    }

    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= m; j++) {
            let l = 0;
            let r = Math.min(n - i + 1, m - j + 1);
            let med;
            while (l < r) {
                med = Math.ceil((l + r) / 2);
                if (med > 0 && getSum(i, j, i + med - 1, j + med - 1) === med ** 2) {
                    l = med;
                } else {
                    r = med - 1;
                }
            }

            if (l > 0) max = Math.max(max, l);
        }
    }
    return max;
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
    const line = readArray();
    const n = line[0];
    const m = line[1];

    const carrotField = readEdges(n);
    const result = getMaxSquare(n, m, carrotField);

    console.log(result);
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

module.exports = getMaxSquare;
