/**
 * C. Переезд
 *
 * Васина семья переезжает в новую квартиру, а переезд — это всегда хлопоты. Например, Васе совершенно не хочется
 * расставаться со своей коллекцией кружек, которую он собрал, посещая олимпиады. Все-таки, его коллекция самая
 * большая в мире и насчитывает 107 экземпляров! Поскольку каждая кружка весит 100 грамм, для ее перевозки Вася
 * хочет нанять грузовик. Однако, на всех дорогах висят знаки, ограничивающие вес транспорта. Кроме того, ровно
 * через 24 часа выходит новый эпизод любимого Васиного сериала, пропускать который он отказывается наотрез!
 * От всей этой неразберихи у Васи голова идет кругом, и он обращается к вам за помощью. Вася хочет перевезти
 * как можно больше кружек за первый же рейс, но если фуру, которая и так весит 3 тонны, полностью нагрузить
 * кружками, то, возможно, придется ехать в объезд. Так сколько же кружек можно довезти до новой квартиры,
 * не нарушая правил дорожного движения и не пропустив начало передачи?
 *
 * Формат ввода:
 * В первой строке входного файла указаны два числа N и M — число перекрестков на схеме города и число дорог
 * соответственно (1 ≤ N ≤ 500). В следующих M строках идет описание дорог. Каждая дорога описывается четырьмя
 * числами: a[i], b[i], t[i] и w[i].
 * a[i] и b[i] — это номера перекрестков, которые соединяет дорога, a[i] ≠ b[i], 1 ≤ a[i], b[i] ≤ N.
 * Вася знает, что если есть дорога, соединяющая напрямую два перекрестка, то она ровно одна.
 * t[i] — это время в минутах, которое тратится на проезд по этой дороге, 0 ≤ t[i] ≤ 1440.
 * w[i] — это максимальная масса в граммах, которую можно провозить по этой дороге, 0 ≤ w[i] ≤ 10^9.
 * Старая квартира Васи находится на этой схеме на перекрестке с номером 1, а новая — на перекрестке
 * с номером N.
 *
 * Формат вывода:
 * Выведите ровно одно число — наибольшее количество кружек, которое Вася может увезти за один рейс,
 * не нарушая правил дорожного движения и не опоздав к началу сериала.
 */

function testRelocation(n, roads, testingWeight) {
    const timeLimit = 1440;
    const visited = new Array(n + 1);
    const dists = new Array(n + 1);

    dists.fill(Infinity, 0);
    dists[1] = 0;
    visited.fill(false, 1);

    const pathFrom = (from) => roads[from];
    const weightPath = (from, to) => (pathFrom(from) ? roads[from][to] : undefined);
    const getMinTimes = () =>
        dists.reduce(
            (minIndex, v, i) => (dists[i] < dists[minIndex] && !visited[i] ? i : minIndex),
            0
        );

    let minDistantion;
    let currentTime;

    for (let i = 1; i <= n; i++) {
        minDistantion = getMinTimes();
        if (minDistantion === 0 || minDistantion === n) break;

        visited[minDistantion] = true;
        currentTime = dists[minDistantion];

        for (let j = 1; j <= n; j++) {
            value = weightPath(minDistantion, j);
            if (value) {
                const { time, weight } = value;
                if (
                    currentTime + time <= timeLimit &&
                    weight >= testingWeight &&
                    dists[j] >= currentTime + time &&
                    !visited[j]
                ) {
                    dists[j] = currentTime + time;
                }
            }
        }
    }
    return dists[n] != Infinity && dists[n] <= timeLimit;
}

function cupsRelocation(n, mInit, arrInit) {
    if (n == 1 && mInit == 0) return 10000000;

    const roads = [];
    let maxWeight = 0;

    if (n === 1 && mInit === 0) return 10000000;

    const setWeight = (from, to, time, weight) => {
        weight = weight - 3000000;
        if (!roads[from]) {
            roads[from] = [];
        }
        roads[from][to] = { time, weight };
        maxWeight = Math.max(maxWeight, weight);
    };

    for (let i = 0; i < mInit; i++) {
        setWeight(arrInit[i][0], arrInit[i][1], arrInit[i][2], arrInit[i][3]);
        setWeight(arrInit[i][1], arrInit[i][0], arrInit[i][2], arrInit[i][3]);
    }

    let l = 0;
    let r = maxWeight + 1;
    let m;
    while (l < r) {
        m = l + Math.ceil((r - l + 1) / 2);
        if (testRelocation(n, roads, m)) {
            l = m;
        } else {
            r = m - 1;
        }
    }
    return l > 99 ? Math.floor(l / 100) : 0;
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
    const params_2 = readArray();
    const n = params_2[0];
    const m = params_2[1];

    const arr = [];
    for (let i = 0; i < m; i++) {
        arr.push(readArray());
    }

    const len = cupsRelocation(n, m, arr);
    console.log(len);
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

module.exports = cupsRelocation;
