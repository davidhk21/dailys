/*
This problem was given during a practice test for Asana coding assignment

You are given two integer arrays a and b of the same length.

Let's define the difference between a and b as the sum of absolute differences of corresponding elements:

difference = |a[0] - b[0]| + |a[1] - b[1]| + ... |a[a.length - 1] + b[b.length - 1]

You can replace one element of a with any othe relement of a. Your task is to return the minimum possible difference between a and b that can be achieved by performing at most one such replacement on a. You can also choose to leave the array intact.

Example:
a = [1, 3, 5]
b = [5, 3, 1]
Output:
minDiffOfArrays(a, b) = 4.
*/

const minDiffOfArrays = (a, b) => {
  //     let min = Infinity;
//     for (let i = 0; i < a.length; i++) {
//         for (let j = 0; j < a.length; j++) {
//             if (i === j) continue;
//             let temp = a[i];
//             a[i] = a[j];
//             let absSum = 0;
//             for (let k = 0; k < a.length; k++) {
//                 absSum += Math.abs(a[k] - b[k]);
//             }
//             if (absSum < min) min = absSum;
//             a[i] = temp;
//         }
//     }

//     return min;

let maxDiff = 0;
let maxDiffAPosition = 0;
let bMaxDiffValue;
let length = a.length;

for (let i = 0; i < length; i++) {
    if (Math.abs(a[i] - b[i]) > maxDiff) {
        maxDiff = Math.abs(a[i] - b[i]);
        maxDiffAPosition = i;
        bMaxDiffValue = b[i];
    }
}

let smallestDiff = Infinity;
let aPositionSwap;
for (let i = 0; i < length; i++) {
    if (Math.abs(a[i] - bMaxDiffValue) < smallestDiff) {
        smallestDiff = Math.abs(a[i] - bMaxDiffValue);
        aPositionSwap = i;
    }
}

a[maxDiffAPosition] = a[aPositionSwap]

let result = 0;
for (let i = 0; i < length; i++) {
    result += Math.abs(a[i] - b[i]);
}

return result;
}