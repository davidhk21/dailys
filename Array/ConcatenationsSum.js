/*
This problem was given during a practice test for Asana coding assignment

Given an array of positive integers a, your task is to calculate the sum of every possible a[i] $ a[j] where a[i] $ a[j] is the concatenation of the string representations of a[i] and a[j] respectively.

Example:
a = [10, 2]
output: 1344
a[0] $ a[0] = 10 $ 10 = 1010
a[0] $ a[1] = 10 $ 2 = 102
a[1] $ a[0] = 2 $ 10 = 210
a[1] $ a[1] = 2 $ 2 = 22
1010 + 102 + 210 + 22 = 1344
*/

var concatenationsSum = (a) => {
  let sum = 0;

  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < a.length; j++) {
      let first = a[i].toString();
      let second = a[j].toString();
      let combo = first + second;
      // can also use parseInt(combo, 10)
      let num = Number(combo);
      sum += num;
    }
  }

  return sum;
}

console.log(concatenationsSum([10, 2])); // 1344
console.log(concatenationsSum([1, 2, 3])); // 198