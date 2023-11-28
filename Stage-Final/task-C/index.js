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

class MinHeap {
    constructor(initValues) {
        if (initValues) {
            this.values = initValues;
            const lastElementWithChilds = Math.floor(initValues.length / 2) - 1;
            for (let i = lastElementWithChilds; i >= 0; i--) {
                this._balancing(i);
            }
        } else this.values = [];
    }
    add(element) {
        this.values.push(element);
        let index = this.values.length - 1;

        while (index > 0) {
            const current = this.values[index];
            let parentIndex = Math.floor((index - 1) / 2);

            if (this.values[parentIndex].value > current.value) {
                this.values[index] = this.values[parentIndex];
                this.values[parentIndex] = current;
                index = parentIndex;
            } else break;
        }
    }
    _balancing(index) {
        const length = this.values.length;
        while (index * 2 + 1 < length - 1) {
            const current = this.values[index];
            let leftChildIndex = 2 * index + 1;
            let rightChildIndex = 2 * index + 2;
            let leftChild, rightChild;
            let swap = null;
            leftChild = this.values[leftChildIndex];
            rightChild = this.values[rightChildIndex];

            if (rightChildIndex === length) {
                swap = leftChild;
            }
            swap = rightChild.value <= leftChild.value && swap === null ? rightChildIndex : leftChildIndex;
            if (this.values[swap].value < current.value) {
                this.values[index] = this.values[swap];
                this.values[swap] = current;
                index = swap;
            } else break;
        }
    }
    getMin() {
        let index = 0;
        const min = this.values[index];
        this.values[index] = this.values[this.values.length - 1];

        this._balancing(index);
        this.values.pop();
        return min;
    }

    getValues() {
        return this.values;
    }

    isEmpty() {
        return this.values.length === 0;
    }
}

function fastVasuki(n, k, arrInit, a, b) {
    const roads = {};
    const minDists = new MinHeap();
    const visited = new Array(n + 1);
    const dists = new Array(n + 1);

    dists.fill(Infinity, 0);
    dists[a] = 0;
    minDists.add({ value: 0, vertex: a });
    visited.fill(false, 1);

    const setWeight = (from, to, start, end) => {
        if (!roads[from]) {
            roads[from] = {};
        }
        if (!roads[from][to]) {
            roads[from][to] = [];
        }
        roads[from][to];
        roads[from][to].push({ start, end });
    };
    const weightPath = (from, to) => roads[from][to];
    const pathFrom = (from) => roads[from];
    const getMinDistantion = () => minDists.getMin();

    for (let i = 0; i < k; i++) {
        setWeight(arrInit[i][0], arrInit[i][2], arrInit[i][1], arrInit[i][3]);
    }
    let minDistantion;
    let currentTime;

    while (!minDists.isEmpty()) {
        do {
            minDistantion = getMinDistantion();
        } while (visited[minDistantion.vertex] && !minDists.isEmpty());

        if (visited[minDistantion.vertex] && minDists.isEmpty()) break;
        if (minDistantion.vertex === b) break;

        visited[minDistantion.vertex] = true;
        currentTime = dists[minDistantion.vertex];
        for (let toVertex in pathFrom(minDistantion.vertex)) {
            const buses = weightPath(minDistantion.vertex, toVertex);
            for (const bus of buses) {
                const { start, end } = bus;

                if (currentTime <= start && dists[toVertex] > end && !visited[toVertex]) {
                    dists[toVertex] = end;
                    minDists.add({ value: end, vertex: toVertex });
                }
            }
        }
    }

    const len = dists[b];
    return len === Infinity ? -1 : len;
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

    const params_2 = readArray();
    const a = params_2[0];
    const b = params_2[1];

    const k = readInt();

    const arr = [];
    for (let i = 0; i < k; i++) {
        arr.push(readArray());
    }

    const len = fastVasuki(n, k, arr, a, b);
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

module.exports = fastVasuki;
