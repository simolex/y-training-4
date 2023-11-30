/**
 * D. Кирпичи
 *
 * Вася решил выложить бордюр из кипричей для дорожки на своем участке. Расположенный по соседству кирпичный
 * завод выпускает кирпичи длиной A1, A2, …, Am. Промоутеры завода раздают потенциальным клиентам по 2 кирпича
 * бесплатно. Вася взял по 2 кирпича каждого типа и теперь хочет узнать, может ли он выложить из них бордюр
 * длиной N и толщиной в один кирпич.
 *
 * Формат ввода:
 * Сначала вводится число N (1 ≤ N ≤ 10^9), затем — число M (1 ≤ M ≤ 15)
 * и далее M различных чисел A1, A2, …, AM (1 ≤ Ai ≤ 10^9).
 *
 * Формат вывода:
 * Выведите сначала K — количество кипричей, которое нужно использовать для выкладывания бордюра, если можно
 * выложить бордюр длиной ровно N. Далее выведите K чисел, задающих длины использованных кирпичей. Если решений
 * несколько, выведите вариант, в котором Вася использует наименьшее количество кирпичей. Если таких вариантов
 * несколько, выведите любой из них.Если для выкладывания бордюра придется обязательно разломить какой-то кирпич,
 * то выведите одно число 0. Если же у Васи не хватит кипричей, чтобы выложить бордюр,
 * выведите одно число –1 (минус один).
 */

function combineBrick(n, m, arrBricks) {}

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
    const params_2 = readArray();
    const n = params_2[0];
    const m = params_2[1];

    const arr = readArray();

    const result = combineBrick(n, m, arr);
    if ([].isArray(result)) {
        console.log(result.length);
        if (result.length > 0) {
            console.log(result.join(" "));
        }
    } else {
        console.log(-1);
    }
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

module.exports = combineBrick;
