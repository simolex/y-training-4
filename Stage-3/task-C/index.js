/**
 * C. Быстрый алгоритм Дейкстры
 *
 * Вам дано описание дорожной сети страны. Ваша задача – найти длину кратчайшего пути между городами А и B.
 *
 * Формат ввода:
 * Сеть дорог задана во входном файле следующим образом: первая строка содержит числа N и K
 * (1 ≤ N ≤ 100000, 0 ≤ K ≤ 300000), где K – количество дорог. Каждая из следующих K строк содержит описание
 * дороги с двусторонним движением – три целых числа a[i], b[i] и l[i] (1 ≤ a[i], b[i] ≤ N, 1 ≤ l[i] ≤ 10^6).
 * Это означает, что имеется дорога длины l[i], которая ведет из города ai в город bi. В последней строке
 * находятся два числа А и В – номера городов, между которыми надо посчитать кратчайшее расстояние (1 ≤ A, B ≤ N)
 *
 * Формат вывода:
 * Выведите одно число – расстояние между нужными городами.
 * Если по дорогам от города А до города В доехать невозможно, выведите –1
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

function fastDijkstra(n, k, arrInit, a, b) {
    const roads = {};
    const minDists = new MinHeap();
    const visited = new Array(n + 1);
    const dists = new Array(n + 1);

    dists.fill(Infinity, 0);
    dists[a] = 0;
    minDists.add({ value: 0, vertex: a });
    visited.fill(false, 1);

    const setWeight = (from, to, weight) => {
        if (!roads[from]) {
            roads[from] = {};
        }
        roads[from][to] = weight;
    };
    const weightPath = (from, to) => roads[from][to];
    const pathFrom = (from) => roads[from];
    const getMinDistantion = () => minDists.getMin();

    for (let i = 0; i < k; i++) {
        setWeight(arrInit[i][0], arrInit[i][1], arrInit[i][2]);
        setWeight(arrInit[i][1], arrInit[i][0], arrInit[i][2]);
    }
    let minDistantion;
    let value;
    let currentLenPath;

    while (!minDists.isEmpty()) {
        minDistantion = getMinDistantion();
        visited[minDistantion.vertex] = true;
        currentLenPath = dists[minDistantion.vertex];
        for (let toVertex in pathFrom(minDistantion.vertex)) {
            value = weightPath(minDistantion.vertex, toVertex);
            if (value > 0) {
                if (dists[toVertex] > currentLenPath + value) {
                    dists[toVertex] = currentLenPath + value;
                    minDists.add({ value: currentLenPath + value, vertex: toVertex });
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
    const params_1 = readArray();
    const n = params_1[0];
    const k = params_1[1];

    const arr = [];
    for (let i = 0; i < k; i++) {
        arr.push(readArray());
    }

    const params_2 = readArray();
    const a = params_2[0];
    const b = params_2[1];

    const len = fastDijkstra(n, k, arr, a, b);
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

module.exports = fastDijkstra;
