/**
 * B. Затерянный мир
 *
 * Территория зоопарка Юрского периода «Затерянный мир» представляет собой решётку N × N,
 * в каждой клетке которой находится вольер для динозавра. Директор зоопарка Степан
 * Савельев планирует расселить в зоопарке N динозавров. Вольеры отделены друг от друга
 * невысоким забором. Сотрудникам зоопарка известно, что динозавр не покидает пределов
 * своего вольера, и не ломает забор, если он не видит на территории парка других динозавров.
 * Зрительный аппарат у динозавров таков, что он видит всех динозавров, которые находятся
 * на одной строке, на одном столбце или на одной диагонали с ним. Если же динозавр видит
 * другого ящера, то ломает забор и вступает в борьбу. Директор зоопарка не хочет терпеть
 * убытки, поэтому просит вас посчитать количество способов так расселить динозавров
 * в зоопарке, чтобы никакой ящер не видел остальных динозавров.
 *
 * Формат ввода:
 * Задано единственное число N (N ≤ 10)
 *
 * Формат вывода:
 * Необходимо вывести количество способов, которыми можно расселить в зоопарке
 * N динозавров, чтобы у зоопарка не было убытков.
 */
function countDino(vr, rD, lD, n, max, count) {
    //let prev = 0;
    for (let i = 1; i <= max; i++) {
        if (!vr[i] && !rD[i - 1 + n] && !lD[max - n + i - 1]) {
            vr[i] = true;
            rD[i - 1 + n] = true;
            lD[max - n + i - 1] = true;
            if (n > 0) {
                count = countDino(vr, rD, lD, n - 1, max, count);
            } else {
                count++;
            }

            vr[i] = false;
            rD[i - 1 + n] = false;
            lD[max - n + i - 1] = false;
        }
    }
    return count;
}

function getCountSettling(n) {
    const rightDiagonal = new Array(2 * n).fill(false);
    const leftDiagonal = new Array(2 * n).fill(false);
    const vertical = new Array(n + 1).fill(false);

    const result = countDino(vertical, rightDiagonal, leftDiagonal, n - 1, n, 0);

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
    // delete _readline;
    // delete _reader;
    // delete _inputLines;
    const result = getCountSettling(n);
    console.log(result);
}

function readInt() {
    const n = Number(_inputLines[_curLine]);
    _curLine++;
    return n;
}

module.exports = getCountSettling;
