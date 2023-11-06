/**
 * A. Partition
 *
 * Базовым алгоритмом для быстрой сортировки является алгоритм partition, который разбивает набор
 * элементов на две части относительно заданного предиката. По сути элементы массива просто меняются
 * местами так, что левее некоторой точки в нем после этой операции лежат элементы, удовлетворяющие
 * заданному предикату, а справа — не удовлетворяющие ему. Например, при сортировке можно использовать
 * предикат «меньше опорного», что при оптимальном выборе опорного элемента может разбить массив на две
 * примерно равные части.
 * Напишите алгоритм partition в качестве первого шага для написания быстрой сортировки.
 *
 * Формат ввода:
 * В первой строке входного файла содержится число N — количество элементов массива (0 ≤ N ≤ 10^6).
 * Во второй строке содержатся N целых чисел a[i], разделенных пробелами (-10^9 ≤ a[i] ≤ 10^9).
 * В третьей строке содержится опорный элемент x (-10^9 ≤ x ≤ 10^9).
 * Заметьте, что x не обязательно встречается среди a[i].
 *
 * Формат вывода:
 * Выведите результат работы вашего алгоритма при использовании предиката «меньше x»:
 * в первой строке выведите число элементов массива, меньших x, а во второй — количество всех остальных.
 *
 * Примечания
 * Чтобы решить советуем реализовать функцию, которая принимает на вход предикат и пару итераторов,
 * задающих массив (или массив и два индекса в нём), а возвращает точку разбиения,
 * то есть итератор (индекс) на конец части, которая содержащит элементы, удовлетворяющие заданному
 * предикату.
 * В таком виде вам будет удобно использовать эту функцию для реализации сортировки.
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
    return { e: equalPointer, g: greatePointer };
}

function partitionApply(n, a, x) {
    return partition(a, 0, n, x);
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
    const x = readInt();

    const result = partitionApply(n, a, x);
    console.log(result.e);
    console.log(n - result.e);
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

module.exports = partitionApply;
