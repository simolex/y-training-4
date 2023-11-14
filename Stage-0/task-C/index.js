/**
 * C. Путешествие по Москве
 *
 * Мэрия Москвы основательно подготовилась к празднованию тысячелетия города в 2147 году,
 * построив под столицей бесконечную асфальтированную площадку, чтобы заменить все существующие
 * в городе автомобильные дороги. В память о кольцевых и радиальных дорогах разрешили двигаться
 * по площадке только двумя способами:
 * 1) В сторону точки начала координат или от неё. При этом из точки начала координат разрешено
 * двигаться в любом направлении.
 * 2) Вдоль окружности с центром в начале координат и радиусом, который равен текущему расстоянию
 * до начала координат. Двигаться вдоль такой окружности разрешается в любом направлении
 * (по или против часовой стрелки).
 * Вам, как ведущему программисту ответственной инстанции поручено разработать модуль, который
 * будет определять кратчайший путь из точки A, с координатами (xA, yA) в точку B с координатами
 * (xB, yB). Считайте, что менять направление движения можно произвольное количество раз, но оно
 * должно всегда соответствовать одному из двух описанных выше вариантов.
 *
 * Формат ввода:
 * В первой строке ввода заданы четыре целых числа xA, yA, xB и yB, по модулю не превосходящие 10^6.
 *
 * Формат вывода:
 * Выведите одно число — минимальное расстояние, которое придётся преодолеть по пути из точки A
 * в точку B, если не нарушать правил дорожного движения. Ваш ответ будет принят, если его абсолютная
 * или относительная погрешность не превосходит 10^-6.
 */

function getShortPath(coords) {
    const xA = coords[0];
    const yA = coords[1];
    const xB = coords[2];
    const yB = coords[3];

    const getAngle = (y, x) => {
        const a = Math.atan2(y, x);
        return a < 0 ? 2 * Math.PI + a : a;
    };

    const rA = Math.sqrt(xA ** 2 + yA ** 2);
    const rB = Math.sqrt(xB ** 2 + yB ** 2);

    const minR = Math.min(rA, rB);
    const dR = Math.abs(rB - rA);

    let angle = Math.abs(getAngle(yA, xA) - getAngle(yB, xB));
    angle = angle > Math.PI ? 2 * Math.PI - angle : angle;

    return Math.min(rA + rB, dR + minR * angle);
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
    const coords = readArray();
    const result = getShortPath(coords);

    console.log(result);
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

function readEdges(n) {
    let grid = [];
    for (let i = 0; i < n; i++) {
        let vertex = readArray();
        grid.push(vertex);
    }
    return grid;
}

module.exports = getShortPath;
