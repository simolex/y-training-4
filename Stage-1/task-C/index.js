/**
 * C. Слияние
 *
 * Базовый алгоритм для сортировки слиянием — алгоритм слияния двух упорядоченных массивов в один
 * упорядоченный массив. Эта операция выполняется за линейное время с линейным потреблением памяти.
 * Реализуйте слияние двух массивов в качестве первого шага для написания сортировки слиянием.
 *
 * Формат ввода:
 * В первой строке входного файла содержится число N — количество элементов первого массива (0 ≤ N ≤ 10^6).
 * Во второй строке содержатся N целых чисел a[i], разделенных пробелами, отсортированные
 * по неубыванию (-10^9 ≤ a[i] ≤ 10^9).
 * В третьей строке входного файла содержится число M — количество элементов второго массива (0 ≤ M ≤ 10^6).
 * В третьей строке содежатся M целых чисел b[i], разделенных пробелами, отсортированные
 * по неубыванию (-10^9 ≤ b[i] ≤ 10^9).
 *
 * Формат вывода:
 * Выведите результат слияния этих двух массивов, то есть M + N целых чисел, разделенных пробелами,
 * в порядке неубывания.
 *
 * Примечания
 * Для решения этой задачи советуем реализовать функцию, которая принимает на вход две пары итераторов,
 * задающие два массива, и итератор на начало буфера, в который необходимо записывать результат. Итераторы
 * можжно заменить на передачу массивов и индексов в них. В таком виде вам будет удобно использовать эту
 * функцию для реализации сортировки.
 */

function merge(l1, r1, l2, r2, a, l0, b) {
    let PointerA = l1;
    let PointerB = l2;

    const c = b;
    for (let i = l0; i < r1 + r2 - l1 - l2; i++) {
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

function solver(n, a, m, b) {
    a1 = a.concat(b);
    b2 = Array(n + m);

    const result = merge(0, n, n, n + m, a1, 0, b2);
    console.log(b2);
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
    const a = readArray();
    const m = readInt();
    let b;
    if (m === 0) {
        b = [];
    } else {
        b = readArray();
    }
    const result = solver(n, a, m, b);
    n + m === 0 ? "" : console.log(result.join(" "));
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

module.exports = solver;
