import { readInput } from "./utils.js";


// function part1(data) {
//     let currentPosition = 50;
//     let maxPosition = 99;
//     let countPositionZero = 0;

//     data.forEach((instruction) => {
//         const steps = parseInt(instruction.slice(1));
//         const direction = instruction[0];

//         if (direction === "L") {
//             currentPosition = currentPosition - steps;
//         } else if (direction === "R") {
//             currentPosition = currentPosition + steps;
//         }

//         currentPosition = currentPosition % (maxPosition + 1);

//         console.log(`The dial is rotated ${direction}${steps} to point at ${currentPosition}.`);

//         if (currentPosition < 0) {
//             currentPosition += (maxPosition + 1);
//         }

//         if (currentPosition === 0) {
//             countPositionZero++;
//         }
//     });
    
//     return countPositionZero;
// }


// function part2(data) {
//     let currentPosition = 50;
//     let maxPosition = 99;
//     let countPositionZero = 0;

//     data.forEach((instruction) => {
//         const steps = parseInt(instruction.slice(1));
//         const direction = instruction[0];
//         const dialSize = maxPosition + 1;

//         for (let i = 0; i < steps; i++) {
//             if (direction === "L") {
//                 currentPosition = (currentPosition - 1 + dialSize) % dialSize;
//             } else {
//                 currentPosition = (currentPosition + 1) % dialSize;
//             }

//             if (currentPosition === 0) countPositionZero++;
//         }

//         console.log(`The dial is rotated ${direction}${steps} to point at ${currentPosition}.`);
//     });
    
//     return countPositionZero;
// }


// const data = readInput(1);
// console.log("Part 1:", part1(data));
// console.log("Part 2:", part2(data));

const production1 = [
  { toy: 'car', quantity: 3 },
  { toy: 'doll', quantity: 1 },
  { toy: 'ball', quantity: 2 }
]

function manufactureGifts(giftsToProduce) {
  // Code here
  const gifts = production1.flatMap(gift => 
!isNaN(gift.quantity) && gift.quantity > 0 && Number.isInteger(gift.quantity) ? Array(gift.quantity).fill(gift.toy) : []
);
production1.forEach(gift => {
    gift.quantity
})
  return gifts
}

const result1 = manufactureGifts(production1)
console.log(result1)