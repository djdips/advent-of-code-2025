import { readInput } from "./utils.js";


function part1(data) {
    console.log(data);
    let startX = data.findIndex(row => row.includes("S"));
    let startY = data[startX].indexOf("S");

    let grid = data.map(row => row.split(""));

    let splitCount = 0;
    let pathsExplored = new Set();

    const directions = [[0, 1], [0, -1]];

    function explorePath(dx, dy) {
        let position = `${dx},${dy}`;

        if (pathsExplored.has(position)) {
            return;
        }

        pathsExplored.add(position);

        const cell = grid[dx][dy];

        if (cell === '^') {
            splitCount++;

            for (const[l,r] of directions) {
                const newDX = dx + l;
                const newDY = dy + r;
                

                if (newDX < grid.length && newDY < grid[0].length && newDY >= 0) {
                    explorePath(newDX, newDY);
                }

            }
        } else if (cell === '.') {
            const newDX = dx + 1;
            const newDY = dy;
            
            if (newDX < grid.length && newDY < grid[0].length) {
                explorePath(newDX, newDY);
            }
        }
    }

    explorePath(startX + 1, startY);
    console.log(splitCount);

    return splitCount;
}

function part2(data) {
    let startX = data.findIndex(row => row.includes("S"));
    let startY = data[startX].indexOf("S");

    let grid = data.map(row => row.split(""));

    let timelineCount = Array.from({length: grid.length}, () => Array(grid[0].length).fill(0));
    timelineCount[startX + 1][startY] = 1;

    const directions = [[0, 1], [0, -1]];
    const queue = [[startX + 1, startY]];
    let pathsExplored = new Set();

    while (queue.length > 0) {
        const [x, y] = queue.shift();
        const position = `${x},${y}`;

        if (pathsExplored.has(position)) {
            continue;
        }

        pathsExplored.add(position);

        const cell = grid[x][y];

        if (cell === '^') {
            const newX = x + 1;
            const newY = y;

            if(newY - 1 >= 0 && newX < grid.length) {
                timelineCount[newX][newY - 1] += timelineCount[x][y];
                queue.push([newX, newY - 1]);
            }

            if (newY + 1 < grid[0].length && newX < grid.length) {
                timelineCount[newX][newY + 1] += timelineCount[x][y];
                queue.push([newX, newY + 1]);
            }
        } else if (cell === '.') {
            if(x+1 < grid.length && y < grid[0].length && y >= 0) {
                timelineCount[x + 1][y] += timelineCount[x][y];
                queue.push([x+1, y]);
            }
        }
    }
    
    let lastRow = timelineCount[timelineCount.length - 1];
    const sum = lastRow.reduce((acc, cell) => acc + cell, 0);
    console.log(sum);
    return sum;
}


const data = readInput("day07");
console.log("Part 1:", part1(data));
console.log("Part 2:", part2(data));