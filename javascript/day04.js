import { readInput } from "./utils.js";

function checkAdjacent(data, i, j) {
    const length = data.length;
    const width = data[0].length;
    const directions = [
        [-1,0], [1,0], [0,-1], [0,1], [-1,-1], [-1,1], [1,-1], [1,1]
    ]
    let count = 0;
    for (const [dx, dy] of directions) {
        const newX = i + dx;
        const newY = j + dy;

        if (newX >= 0 && newX < length &&
            newY >= 0 && newY < width &&
            data[newX][newY] === "@"
        ) {
            count++;
        }
    }
    return count;
}

function part1(data) {
        const length = data.length;
        const width = data[0].length;
        let accessibleCount = 0;

        for (let i = 0; i < length; i++) {
            for (let j = 0; j < width; j++) {
             if (data[i][j] === "@") {
                if (checkAdjacent(data, i, j) < 4) {
                    accessibleCount++;
                }
             }
            }
        }
    
    return accessibleCount;
}

function part2(data) {
    const orig = data.map(row => [...row]);
    const copy = data.map(row => [...row]);

    const length = data.length;
    const width = data[0].length;
    let accessibleCount = 0;
    let changed = true;

    while (changed) {
        changed = false;
        for (let i = 0; i < length; i++) {
            for (let j = 0; j < width; j++) {
                if (orig[i][j] === "@" && checkAdjacent(orig, i, j) < 4) {
                    copy[i][j] = "x";
                    orig[i][j] = ".";
                    accessibleCount++;
                    changed = true;
                }
            }
        }
    }

    return accessibleCount;
}

const data = readInput(4);
console.log("Part 1:", part1(data));
console.log("Part 2:", part2(data));