/**
 * E. Средний уровень
 *
 * В группе учатся n студентов, каждый из которых имеет свой рейтинг a[i]. Им нужно выбрать старосту;
 * для этого студенты хотят выбрать старосту таким образом чтобы суммарный уровень недовольства группы
 * был минимальный. Если выбрать j-го старостой, то уровень недовольства i-го студента равен ∣∣ a[i] − a[j] ∣∣.
 * Например, если в группе есть три студента с рейтингами 1, 3 и 4 и в качестве старосты выбирают второго,
 * то уровень недовольства группы будет равен |1−3|+|3−3|+|4−3|=3. Вычислите уровень недовольства группы
 * при выборе каждого из студентов старостой.
 *
 * Формат ввода:
 * В первой строке дано единственное целое число n (1 ≤ n ≤ 10^5)  — количество студентов в группе.
 * Во второй строке даны n целых чисел a[1], a[2], …, a[n], идущих по неубыванию
 * (0 ≤ a[1] ≤ a[2] ≤ … ≤ a[n] ≤ 10^4)  — рейтинги студентов.
 *
 * Формат вывода:
 * Выведите n чисел через пробел, i-е из которых будет обозначать уровень недовольства группы
 * при выборе i-го студента старостой.
 */

function getRateResult(n, rates) {
    const result = [];
    const lineRates = [0];
    for (let i = 1; i <= n; i++) {
        lineRates[i] = lineRates[i - 1] + rates[i - 1];
    }
    for (let i = 0; i < n; i++) {
        const low = i < n - 1 ? lineRates[n] - lineRates[i + 1] - (n - i - 1) * rates[i] : 0;
        const high = i > 0 ? (i + 1) * rates[i] - lineRates[i + 1] : 0;
        result.push(low + high);
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

    const rates = readArray(n);
    const result = getRateResult(n, rates);

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

module.exports = getRateResult;
