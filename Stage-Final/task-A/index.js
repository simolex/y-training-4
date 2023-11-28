/**
 * A. Объединение последовательностей
 *
 * Даны две бесконечных возрастающих последовательности чисел A и B. i-ый член последовательности A равен i2.
 * i-ый член последовательности B равен i3.Требуется найти Cx, где C – возрастающая последовательность,
 * полученная при объединении последовательностей A и B. Если существует некоторое число, которое встречается
 * и в последовательности A и в последовательности B, то в последовательность C это число попадает
 * в единственном экземпляре.
 *
 * Формат ввода:
 * В единственной строке входного файла дано натуральное число x (1 ≤ x ≤ 10^7).
 *
 * Формат вывода:
 * В выходной файл выведите Cx.
 *
 */

function merge(n) {
    let power2 = 1;
    let power3 = 1;
    let counter2 = 1;
    let counter3 = 1;

    let pos = 0;
    let current;

    do {
        pos++;
        if (power2 == power3) {
            current = power2;
            counter2++;
            counter3++;
            power2 = counter2 * counter2;
            power3 = counter3 * counter3 * counter3;
        } else if (power2 < power3) {
            current = power2;
            counter2++;
            power2 = counter2 * counter2;
        } else if (power3 < power2) {
            current = power3;
            counter3++;
            power3 = counter3 * counter3 * counter3;
        }
    } while (pos != n);
    return current;
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
    const result = merge(n);

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

module.exports = merge;
