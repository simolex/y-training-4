function testGroups(a, b, n) {
    const count_B = Math.ceil(b / n);
    return a > count_B ? "Yes" : "No";
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
    const a = readInt();
    const b = readInt();
    const n = readInt();

    console.log(testGroups(a, b, n));
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

module.exports = testGroups;
