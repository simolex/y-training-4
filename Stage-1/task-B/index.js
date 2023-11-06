/**
 * B. Быстрая сортировка
 *
 * Реализуйте быструю сортировку, используя алгоритм из предыдущей задачи.На каждом шаге выбирайте
 * опорный элемент и выполняйте partition относительно него. Затем рекурсивно запуститесь от двух
 * частей, на которые разбился исходный массив.
 *
 * Формат ввода:
 * В первой строке входного файла содержится число N — количество элементов массива (0 ≤ N ≤ 10^6).
 * Во второй строке содержатся N целых чисел a[i], разделенных пробелами (-10^9 ≤ a[i] ≤ 10^9).
 *
 * Формат вывода:
 * Выведите результат сортировки, то есть N целых чисел, разделенных пробелами.
 */

function partition(a, l, r, x) {
    let equalPointer = l;
    let greatePointer = l;
    let newValue;
    for (let i = l; i < r; i++) {
        newValue = a[i];
        switch (true) {
            case a[i] < x:
                if (i !== greatePointer) {
                    a[i] = a[greatePointer];
                }
                if (greatePointer !== equalPointer) {
                    a[greatePointer] = a[equalPointer];
                }
                if (equalPointer !== i) {
                    a[equalPointer] = newValue;
                }
                greatePointer++;
                equalPointer++;
                break;
            case a[i] === x:
                if (i !== greatePointer) {
                    a[i] = a[greatePointer];
                    a[greatePointer] = newValue;
                }
                greatePointer++;
                break;
            // case a[i] > x:
            // break;
        }
    }
    if (l < equalPointer) {
        partition(a, l, equalPointer, a[l + Math.floor(Math.random() * (equalPointer - l - 1))]);
    }

    if (greatePointer + 1 < r) {
        partition(a, greatePointer, r, a[greatePointer + Math.floor(Math.random() * (r - greatePointer - 1))]);
    }
    return a;
}

function sort(n, a) {
    return partition(a, 0, n, a[Math.floor(Math.random() * n)]);
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
    const a = readArray();

    const result = sort(n, a);

    n === 0 ? "" : console.log(result.join(" "));
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

module.exports = sort;
