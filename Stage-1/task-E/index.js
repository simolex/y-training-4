/**
 * E. Поразрядная сортировка
 *
 * Поразрядная сортировка является одним из видов сортировки, которые работают практически за линейное
 * от размера сортируемого массива время. Такая скорость достигается за счет того, что эта сортировка
 * использует внутреннюю структуру сортируемых объектов. Изначально этот алгоритм использовался
 * для сортировки перфокарт. Первая его компьютерная реализация была создана в университете MIT Гарольдом
 * Сьюардом (Harold Н. Seward). Опишем алгоритм подробнее. Пусть задан массив строк s1 , ..., si причём
 * все строки имеют одинаковую длину m. Работа алгоритма состоит из m фаз. На i-ой фазе строки
 * сортируются на i-ой с конца букве. Происходит это следующим образом. Будем, для простоты, в этой задаче
 * рассматривать строки из цифр от 0 до 9. Для каждой цифры создается «корзина» («bucket»), после чего
 * строки s[i] распределяются по «корзинам» в соответствии с i-ой цифрой с конца. Строки, у которых i-ая
 * с конца цифра равна j попадают в j-ую корзину (например, строка 123 на первой фазе попадет в третью
 * корзину, на второй — во вторую, на третьей — в первую). После этого элементы извлекаются из корзин
 * в порядке увеличения номера корзины. Таким образом, после первой фазы строки отсортированы по последней
 * цифре, после двух фаз — по двум последним, ..., после m фаз — по всем. При важно, чтобы элементы
 * в корзинах сохраняли тот же порядок, что и в исходном массиве (до начала этой фазы). Например,
 * если массив до первой фазы имеет вид: 111, 112, 211, 311, то элементы по корзинам распределятся
 * следующим образом: в первой корзине будет. 111, 211, 311, а второй: 112. Напишите программу, детально
 * показывающую работу этого алгоритма на заданном массиве.
 *
 * Формат ввода:
 * Первая строка входного файла содержит целое число n (1 ≤ n ≤ 1000) . Последующие n строк содержат
 * каждая по одной строке s[i] . Длины всех s[i] , одинаковы и не превосходят 20. Все s[i] состоят только
 * из цифр от 0 до 9.
 *
 * Формат вывода:
 * В выходной файл выведите исходный массив строк в, состояние «корзин» после распределения элементов
 * по ним для каждой фазы и отсортированный массив. Следуйте формату, приведенному в примере.
 */

function getPhase(n, a, m) {
    const p = [];
    for (let i = 0; i < 10; i++) {
        p[i] = [];
    }
    for (let j = 0; j < n; j++) {
        const index = a[j].length - m;
        const basket = index < 0 ? 0 : a[j].substring(index, index + 1);
        p[basket].push(a[j]);
    }

    console.log("Phase " + m);
    for (let i = 0; i < 10; i++) {
        console.log("Bucket " + i + ": " + (p[i].length > 0 ? p[i].join(", ") : "empty"));
    }
    console.log("**********");

    return p.flat();
}

function sort(n, a, max) {
    console.log("Initial array:");
    console.log(a.join(", "));
    console.log("**********");

    let r = a;
    for (let i = 0; i < max; i++) {
        r = getPhase(n, r, i + 1);
    }

    console.log("Sorted array:");
    console.log(r.join(", "));
    return r;
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
    const a = [];
    let max = 0;
    for (let i = 0; i < n; i++) {
        const s = readString();
        max = Math.max(max, s.length);
        a.push(s);
    }

    sort(n, a, max);
}

function readInt() {
    const n = Number(_inputLines[_curLine]);
    _curLine++;
    return n;
}

function readString() {
    const s = _inputLines[_curLine].trim();
    _curLine++;
    return s;
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
