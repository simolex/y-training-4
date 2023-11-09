/**
 * B. Основание строки
 *
 * Строка S была записана много раз подряд, после чего от получившейся строки взяли префикс
 * и дали вам. Ваша задача определить минимально возможную длину исходной строки S.
 *
 * Формат ввода:
 * В первой и единственной строке входного файла записана строка, которая содержит только
 * латинские буквы, длина строки не превышает 50000 символов.
 *
 * Формат вывода:
 * Выведите ответ на задачу.
 */

function lengthBasedString(s) {
    const len = s.length;
    const h = [];
    const x = [];
    h[0] = [0];
    h[1] = [0];
    h[2] = [0];
    x[0] = [1];
    x[1] = [1];
    x[2] = [1];
    const colFact = h.length;

    const xValue = [];
    xValue[0] = 257;
    xValue[1] = 263;
    xValue[2] = 269;

    const pMod = [];
    pMod[0] = 10 ** 8 + 37;
    pMod[1] = 10 ** 8 + 7;
    pMod[2] = 10 ** 8 + 39;

    //TODO need multiTest

    const isEqual = (from_1, from_2, subLen) => {
        let result = true;
        let j = 0;
        do {
            result =
                result &&
                (h[j][from_1 + subLen] + h[j][from_2] * x[j][subLen]) % pMod[j] ===
                    (h[j][from_2 + subLen] + h[j][from_1] * x[j][subLen]) % pMod[j];
            j++;
        } while (result && j < colFact);
        return result;
    };

    s = " " + s;
    const sArr = s.split("");
    for (let i = 1; i <= len; i++) {
        for (let j = 0; j < colFact; j++) {
            h[j][i] =
                (h[j][i - 1] * xValue[j] + (sArr[i].charCodeAt(0) - "0".charCodeAt(0))) % pMod[j];
            x[j][i] = (x[j][i - 1] * xValue[j]) % pMod[j];
        }
    }

    let maxBase = 0;
    do {
        maxBase++;
    } while (maxBase < len && !isEqual(0, maxBase, len - maxBase));

    return maxBase;
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
    const s = readString();

    const result = lengthBasedString(s);
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

module.exports = lengthBasedString;
