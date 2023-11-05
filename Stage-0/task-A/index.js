class Vertex {
    constructor(from, to) {
        this.from = from;
        this.to = to;
    }
}

function getNumberOfUpgoingPaths(n, grid) {
    // your code goes here
    return 0;
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
    const v = firsLine[1];
    const grid = readEdges(v);
    const ans = getNumberOfUpgoingPaths(n, grid);
    console.log(ans);
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
