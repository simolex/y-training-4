class Vertex {
    constructor(from, to) {
        this.from = from;
        this.to = to;
    }
}

class MinMax {
    constructor(min, max) {
        this.min = min;
        this.max = max;
    }
}

function buildSegmentTree(n, numberLine) {
    // TODO
}

function printQueriesResult(m, queries) {
    // TODO

    for (let i = 0; i < m; i++) {
        console.log("result");
    }
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
    const firsLine = readArray();
    const n = firsLine[0];
    const m = firsLine[1];
    const numberLine = readArray();

    const size = Math.pow(2, Math.ceil(Math.log2(n)));
    const tree = [];
    const segTree = buildSegmentTree(n, numberLine);

    const queries = readEdges(m);
    printQueriesResult(m, queries);
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
        grid.push(new Vertex(vertex[0], vertex[1]));
    }
    return grid;
}
