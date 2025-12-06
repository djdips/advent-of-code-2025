import { readInput } from "./utils.js";

function part1(data) {
        console.log(data);
        const row = data.map(row => row.trim().split(/\s+/));
        const columnLength= row[0].length;

        const columns = [];

        for (let col = 0; col < columnLength; col++) {
            columns.push(row.map(row => row[col]));
        }

        let sum = 0;

        columns.forEach((column) => {
            let numbers = [];
            let symbols = [];

            column.forEach((num) => {
                if (!isNaN(num)) {
                    numbers.push(Number(num));
                } else {
                    symbols.push(num);
                }
            })
            
            if (numbers.length > 0 && symbols.length > 0) {
                let result = numbers[0];

                for (let i = 1; i < numbers.length; i++) {
                    const operator = symbols[i - 1] ?? symbols[symbols.length - 1];
                    const num =numbers[i];

                    if (operator === "+") {
                        result += num;
                    } else if (operator === "-") {
                        result -= num;
                    } else if (operator === "*") {
                        result *= num;
                    } else if (operator === "/") {
                        result /= num;
                    }
                }
                sum += result;
            }
        })

        return sum;
}

function part2(data) {
    const columnLength = data[0].length;
    let columns = [];

    for (let col = 0; col < columnLength; col++) {
        columns.push(data.map(row => row[col]));
    }

    columns = columns.reverse();

    let problems = [];
    let numbers = [];
    let symbols = [];

    columns.forEach((column) => {
        const isEmpty = column.every(row => row === " ");

        if (isEmpty) {
            if (numbers.length > 0 || symbols.length > 0) {
                problems.push({ numbers, symbols });
            }
            numbers = [];
            symbols = [];
            return;
        }

        let currentVal = [];

        column.forEach((char) => {
            if (/\d/.test(char)) {
                currentVal.push(Number(char));
            } else if (/[+\-*/]/.test(char)) {
                symbols.push(char);

                if (currentVal.length > 0) {
                    numbers.push(currentVal.join(""));
                    currentVal = [];
                }
            }
        });

        if (currentVal.length > 0) {
            numbers.push(currentVal.join(""));
        }
    });

    if (numbers.length > 0 || symbols.length > 0) {
        problems.push({ numbers, symbols });
    }

    console.log(problems);

    let sum = 0;
    problems.forEach((problem) => {
        let result = Number(problem.numbers[0]);

        for (let i = 1; i < problem.numbers.length; i++) {
            const operator = problem.symbols[i - 1] ?? problem.symbols[problem.symbols.length - 1];
            const num = Number(problem.numbers[i]);

            if (operator === "+") {
                result += num;
            } else if (operator === "-") {
                result -= num;
            } else if (operator === "*") {
                result *= num;
            } else if (operator === "/") {
                result /= num;
            }
        }
        sum += result;
    })

    return sum;
}

const data = readInput("day06");
console.log("Part 1:", part1(data));
console.log("Part 2:", part2(data));