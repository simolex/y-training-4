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
