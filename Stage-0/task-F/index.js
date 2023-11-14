/**
 * F. Лифт
 *
 * Всего студентов по направлению «Мировая культура» — n человек. Преподаватель дал задание — групповой проект.
 * Для выполнения этого задания студенты должны разбиться на группы численностью от a до b человек.
 * Скажите, можно ли разбить всех студентов на группы для выполнения проекта или преподаватель
 * что-то перепутал.
 *
 * Формат ввода:
 * В первой строке вводится число t (1 ≤ t ≤ 100) — количество тестовых случаев.
 * Далее для каждого тестового случая вводится 3 целых числа n, a и b
 * (1 ≤ n ≤ 10^9, 1 ≤ a ≤ b ≤ n) — общее число студентов и ограничение на число студентов в одной группе.
 *
 * Формат вывода:
 * Для каждого тестового случая выведите "YES", если можно разбить студентов на группы и "NO", если нельзя.
 */

function getNeedTime(k, n, peoples) {
    const floors = new Map();

    for (let i = n - 1; i >= 0; i--) {
        if (peoples[i] > 0n) {
            floors.set(i + 1, peoples[i]);
        }
    }
    let leftPlace = 0n;
    let needTime = 0n;
    floors.forEach((countPeoples, numFloor) => {
        if (countPeoples > leftPlace) {
            const peopleOnTheFloor = BigInt(countPeoples) - leftPlace;
            let voyages = peopleOnTheFloor / BigInt(k);

            const leftPeople = peopleOnTheFloor % BigInt(k);
            leftPlace = leftPeople > 0n ? BigInt(k) - leftPeople : 0n;

            if (leftPlace > 0) voyages++;
            needTime += voyages * BigInt(numFloor) * 2n;
        } else {
            leftPlace -= BigInt(countPeoples);
        }
    });

    return needTime;
}

const _readline = require("readline");

const _reader = _readline.createInterface({
    input: process.stdin,
});

const _inputLines = [];
let _curLine = 0;

_reader.on("line", (line) => {
    _inputLines.push(line);
});

process.stdin.on("end", solve);

function solve() {
    const k = readBigInt();
    const n = readInt();

    const peoples = new BigInt64Array(n);
    for (let i = 0; i < n; i++) {
        peoples[i] = readBigInt();
    }
    const result = getNeedTime(k, n, peoples);

    console.log(Number(result.toString()));
}

function readInt() {
    const n = Number(_inputLines[_curLine]);
    _curLine++;
    return n;
}

function readBigInt() {
    const n = BigInt(_inputLines[_curLine]);
    _curLine++;
    return n;
}

function readArray() {
    var arr = _inputLines[_curLine]
        .trim(" ")
        .split(" ")
        .map((num) => BigInt(num));
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

module.exports = getNeedTime;
