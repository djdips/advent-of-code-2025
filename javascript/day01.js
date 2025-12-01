import { readInput } from "./utils.js";


function part1(data) {
    let currentPosition = 50;
    let maxPosition = 99;
    let countPositionZero = 0;

    data.forEach((instruction) => {
        const steps = parseInt(instruction.slice(1));
        const direction = instruction[0];

        if (direction === "L") {
            currentPosition = (currentPosition - steps) % (maxPosition + 1);
        } else if (direction === "R") {
            currentPosition = (currentPosition + steps) % (maxPosition + 1);
        }

        console.log(`The dial is rotated ${direction}${steps} to point at ${currentPosition}.`);

        if (currentPosition < 0) {
            currentPosition += (maxPosition + 1);
        }

        if (currentPosition === 0) {
            countPositionZero++;
        }
    });
    
    return countPositionZero;
}


function part2(data) {
    return null;
}


const data = readInput(1);
console.log("Part 1:", part1(data));
console.log("Part 2:", part2(data));