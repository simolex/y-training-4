/**
 * C. Z-функция
 *
 * Дана непустая строка S, длина которой N не превышает 106. Будем считать, что элементы строки нумеруются от 0 до N-1.
 * Вычислите z-функцию z[i] для всех i от 0 до N-1. z[i] определяется как максимальная длина подстроки, начинающейся
 * с позиции i и совпадающей с префиксом всей строки. z[0] = 0
 *
 * Формат ввода:
 * Одна строка длины N, 0 < N ≤ 106, состоящая из прописных латинских букв.
 *
 * Формат вывода:
 * Выведите N чисел — значения z-функции для каждой позиции, разделённые пробелом.
 */
const hashSettings = [
    { xValue: 257, pMod: 10 ** 7 + 19 },
    { xValue: 263, pMod: 10 ** 7 + 79 },
    { xValue: 269, pMod: 10 ** 7 + 103 }
];

function lengthBasedString(s) {
    const len = s.length;
    const h = [];
    const x = [];
    const xValue = [];
    const pMod = [];

    const countSettings = hashSettings.length;

    for (let i = 0; i < countSettings; i++) {
        h[i] = [0];
        x[i] = [1];
        xValue[i] = hashSettings[i].xValue;
        pMod[i] = hashSettings[i].pMod;
    }

    const isEqual = (from_1, from_2, subLen) => {
        let result = true;
        let j = 0;
        do {
            result =
                result &&
                (h[j][from_1 + subLen] + h[j][from_2] * x[j][subLen]) % pMod[j] ===
                    (h[j][from_2 + subLen] + h[j][from_1] * x[j][subLen]) % pMod[j];
            j++;
        } while (result && j < countSettings);
        return result;
    };

    const maxEqualString = (from) => {
        let l = 0;
        let r = len - from + 1;
        let m;
        while (l < r) {
            m = Math.ceil((l + r) / 2);
            if (isEqual(0, from, m)) {
                l = m;
            } else {
                r = m - 1;
            }
        }
        return l;
    };

    s = " " + s;
    const sArr = s.split("");
    for (let i = 1; i <= len; i++) {
        for (let j = 0; j < countSettings; j++) {
            h[j][i] = (h[j][i - 1] * xValue[j] + (sArr[i].charCodeAt(0) & 255)) % pMod[j];
            x[j][i] = (x[j][i - 1] * xValue[j]) % pMod[j];
        }
    }

    const zFunction = [0];

    for (let i = 1; i < len; i++) {
        zFunction.push(maxEqualString(i));
    }

    return zFunction;
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
    const s = readString();

    const result = lengthBasedString(s);
    console.log(result.join(" "));
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

module.exports = lengthBasedString;
