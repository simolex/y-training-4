/**
 * E. Подпалиндромы
 *
 * Строка называется палиндромом, если она читается одинаково как слева направо, так и справа налево.
 * Например, строки abba, ata являются палиндромами.Вам дана строка. Ее подстрокой называется некоторая
 * непустая последовательность подряд идущих символов. Напишите программу, которая определит, сколько
 * подстрок данной строки является палиндромами.
 *
 * Формат ввода:
 * Вводится одна строка, состоящая из прописных латинских букв. Длина строки не превышает 100000 символов.
 *
 * Формат вывода:
 * Выведите одно число — количество подстрок данной строки, которые являются палиндромам
 */
const hashSettings = [
    { xValue: 257, pMod: 10 ** 7 + 19 },
    { xValue: 263, pMod: 10 ** 7 + 79 },
    { xValue: 269, pMod: 10 ** 7 + 103 }
];

function mirroredString(s) {
    const len = s.length;
    const h = [];
    const r = [];
    const x = [];
    const xValue = [];
    const pMod = [];

    const countSettings = hashSettings.length;

    for (let i = 0; i < countSettings; i++) {
        h[i] = [0];
        r[i] = [0];
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
                (h[j][from_1 + subLen] + r[j][from_2] * x[j][subLen]) % pMod[j] ===
                    (r[j][from_2 + subLen] + h[j][from_1] * x[j][subLen]) % pMod[j];
            j++;
        } while (result && j < countSettings);
        return result;
    };

    const maxSubpolydrome = (from_1, from_2) => {
        let l = 0;
        let r = Math.min(len - from_2 + from_1 - 1, len - from_1 + from_2 - 1);
        let m;
        while (l < r) {
            m = Math.ceil((l + r) / 2);
            if (isEqual(from_1 - 1, from_2 - 1, m)) {
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
            r[j][i] = (r[j][i - 1] * xValue[j] + (sArr[len - i + 1].charCodeAt(0) & 255)) % pMod[j];
            x[j][i] = (x[j][i - 1] * xValue[j]) % pMod[j];
        }
    }

    let countSubpolydrome = 0;

    let pos = 0;
    const len2 = (len - 1) * 2;
    for (let i = 1; i < 2 * len; i++) {
        pos = i / 2;
        const m = maxSubpolydrome(Math.ceil(pos + 1) - (i % 2), Math.floor(len2 - pos));
        console.log(m);
        countSubpolydrome += m + (i % 2);
    }

    return len === 1 ? 1 : countSubpolydrome;
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

    const result = mirroredString(s);
    console.log(result);
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

module.exports = mirroredString;
