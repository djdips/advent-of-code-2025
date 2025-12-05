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

// const production1 = [
//   { toy: 'car', quantity: 3 },
//   { toy: 'doll', quantity: 1 },
//   { toy: 'ball', quantity: 2 }
// ]

// function manufactureGifts(giftsToProduce) {
//   // Code here
//   const gifts = production1.flatMap(gift => 
// !isNaN(gift.quantity) && gift.quantity > 0 && Number.isInteger(gift.quantity) ? Array(gift.quantity).fill(gift.toy) : []
// );
// production1.forEach(gift => {
//     gift.quantity
// })
//   return gifts
// }

// const result1 = manufactureGifts(production1)
// console.log(result1)

// function drawGift(size, symbol) {
//   // Code here
//   const gift = []
  
//   if (size <= 1) {
//     return ""
//   }

//   for (let i = 0; i < size; i++) {
//     if (i === 0 || i === size - 1) {
//       gift.push(symbol.repeat(size));
//     } else {
//       gift.push(symbol + ' '.repeat(size - 2) + symbol);
//     }
//   }

//   return gift.join('\n');
// }

// console.log(drawGift(5, '*'))


// var getConcatenation = function(nums) {
//   console.log(nums)
//     const ans = Array(2).fill(nums).flat();
//     console.log(ans);
// };

// console.log(getConcatenation([1,2,1]))

// var shuffle = function(nums, n) {
//     const ans = []
//     for (let i = 0; i < n; i++) {
//         ans.push(nums[i])
//         ans.push(nums[i + n])
//     }
    
//     return ans
// };

// console.log(shuffle([2,5,1,3,4,7], 3))

// var findMaxConsecutiveOnes = function(nums) {
//     let count = 0, maxCount = 0;

//   for (const n of nums) {
//     count = n === 1 ? count + 1 : 0;
//     if (count > maxCount) maxCount = count;
//   }

//   return maxCount;
// };

// console.log(findMaxConsecutiveOnes([1,1,0,1,1,1]))

function decodeSantaPin(code) {
  // Code here
  let pin = [];
  const instructions = code.split("[").filter(instruction => instruction !== "");

  for (let i = 0; i < instructions.length; i++) {
    const instruction = instructions[i];
    let value = 0;

    for (let j=0; j < instruction.length; j++) {
      const char = instruction[j];
      if (char >= '0' && char <= '9') {
        value = char.charCodeAt(0) - '0'.charCodeAt(0);
      } else if (char === '+') {
        value++;
      } else if (char === '-') {
        value--;
      } else if (char === '<') {
        value = pin.length ? pin[pin.length - 1] : 0;
      }
    }

    value = ((value % 10) + 10) % 10;
    pin.push(value)
  }

  return pin.length < 4 ? "" : pin.join("")
}

console.log(decodeSantaPin("[1++][2-][3+][<]"))
console.log(decodeSantaPin("[9+][0-][4][<]"))
console.log(decodeSantaPin("[1+][2-]"));