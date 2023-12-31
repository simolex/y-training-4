/**
 * B. Зеркальная z-функция
 *
 * Строка S состоит из N букв. Зеркальная z-функция определяется для индекса i как максимально возможное k,
 * такое что:
 * S[1] + S[2] + S[3] + … + S[k] = S[i] + S[i–1] + S[i–2] + ... + S[i–k+1]
 *
 * Определите значение зеркальной z-функции для всех i от 1 до N.
 *
 * Формат ввода:
 * В первой строке записано одно число N (1 ≤ N ≤ 200000). Во второй строке записана строка длиной N символов,
 * состоящая только из заглавных и строчных латинских букв.
 *
 * Формат вывода:
 * Выведите N чисел — значения функции для i от 1 до N.
 *
 */
const hashSettings = [
    { xValue: 257, pMod: 10 ** 7 + 19 },
    { xValue: 263, pMod: 10 ** 7 + 79 },
    { xValue: 269, pMod: 10 ** 7 + 103 }
];

function mirroredString(n, s) {
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

    const maxMirrorZ = (from_2) => {
        let l = 0;
        let r = len - from_2 + 1;
        let m;
        while (l < r) {
            m = Math.ceil((l + r) / 2);
            if (isEqual(0, from_2, m)) {
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

    const result = [];
    for (let i = 0; i < n; i++) {
        result[i] = maxMirrorZ(n - i - 1);
    }

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
    const s = readString();

    const result = mirroredString(n, s);
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

module.exports = mirroredString;
