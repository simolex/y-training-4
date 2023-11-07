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

// function merge(l1, r1, l2, r2, a, l0, b) {
//     let PointerA = l1;
//     let PointerB = l2;

//     const c = b;
//     for (let i = l0; i < l0 + r1 + r2 - l1 - l2; i++) {
//         if (PointerA < r1 && PointerB === r2) {
//             c[i] = a[PointerA];
//             PointerA++;
//         }
//         if (PointerA === r1 && PointerB < r2) {
//             c[i] = a[PointerB];
//             PointerB++;
//         }
//         if (PointerA < r1 && PointerB < r2) {
//             if (a[PointerA] <= a[PointerB]) {
//                 c[i] = a[PointerA];
//                 PointerA++;
//             } else {
//                 c[i] = a[PointerB];
//                 PointerB++;
//             }
//         }
//     }
//     return c;
// }

// function sortWrapper(l, r, index, buffer) {
//     const m = l + Math.floor((r - l) / 2);
//     const nextIndex = (index + 1) % 2;
//     if (m - l > 1) sortWrapper(l, m, nextIndex, buffer);
//     if (r - m > 1) sortWrapper(m, r, nextIndex, buffer);
//     return merge(l, m, m, r, buffer[nextIndex], l, buffer[index]);
// }

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
