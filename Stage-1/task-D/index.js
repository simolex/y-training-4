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

function merge(l1, r1, l2, r2, a, l0, b) {
    let PointerA = l1;
    let PointerB = l2;

    const c = b;
    for (let i = l0; i < l0 + r1 + r2 - l1 - l2; i++) {
        if (PointerA < r1 && PointerB === r2) {
            c[i] = a[PointerA];
            PointerA++;
        }
        if (PointerA === r1 && PointerB < r2) {
            c[i] = a[PointerB];
            PointerB++;
        }
        if (PointerA < r1 && PointerB < r2) {
            if (a[PointerA] <= a[PointerB]) {
                c[i] = a[PointerA];
                PointerA++;
            } else {
                c[i] = a[PointerB];
                PointerB++;
            }
        }
    }
    return c;
}

function sortWrapper(l, r, index, buffer) {
    const m = l + Math.floor((r - l) / 2);
    const nextIndex = (index + 1) % 2;
    if (m - l > 1) sortWrapper(l, m, nextIndex, buffer);
    if (r - m > 1) sortWrapper(m, r, nextIndex, buffer);
    return merge(l, m, m, r, buffer[nextIndex], l, buffer[index]);
}

function sort(n, a) {
    const b = [];
    for (let i = 0; i < 2; i++) {
        b[i] = [].concat(a);
    }
    return sortWrapper(0, n, 0, b);
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
