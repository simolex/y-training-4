/**
 * D. Анаграмма?
 * Задано две строки, нужно проверить, является ли одна анаграммой другой.
 * Анаграммой называется строка, полученная из другой перестановкой букв.
 *
 * Формат ввода:
 * Строки состоят из строчных латинских букв, их длина не превосходит 100000.
 * Каждая записана в отдельной строке.
 *
 * Формат вывода:
 * Выведите "YES" если одна из строк является анаграммой другой и "NO" в противном случае.
 */

function testWords(a, b) {
    const setOfLetters = a.split("").reduce((s, l) => {
        if (s[l]) {
            s[l]++;
        } else {
            s[l] = 1;
        }
        return s;
    }, {});

    b.split("").forEach((l) => {
        if (setOfLetters[l] && setOfLetters[l] > 0) {
            setOfLetters[l]--;
        } else {
            return "NO";
        }
    });

    let balance = 0;
    for (let key in setOfLetters) {
        balance += setOfLetters[key];
    }

    return balance === 0 ? "YES" : "NO";
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
    const a = readLine();
    const b = readLine();

    console.log(testWords(a, b));
}

function readLine() {
    var arr = _inputLines[_curLine].trim();

    _curLine++;
    return arr;
}

module.exports = testWords;
