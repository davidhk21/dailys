/*
This problem was given during a practice test for Asana coding assignment

Given an array of integers a, consider all its contiguous subarrays of length m. Calculate the number of such subarrays, which contain a pair of integers in it with sum greater than or equal to k.

More formally, given the array a, your task is to count the number of such indices 0 <= i <= a.length - m such that a subarray [a[i], a[i + 1], ..., a[i + m - 1]] contains such pair (a[s], a[t]), such that:

- s !== t
- a[s] + a[t] >= k

Example:
a = [2, 4, 2, 7, 1, 6, 1, 1, 1], m = 4, k = 8
Output: segmentsWithSum(a, m, k) = 4
*/

// Time: O((n - m)^3)
// Space: O(1)
var segmentsWithSum = (a, m, k) => {
  let count = 0;

  for (let start = 0; start < a.length - m + 1; start++) {
    let end = start + m;
    let pairExists = false;
    for (let i = start; i < end; i++) {
      if (pairExists) break;
      for (let j = i + 1; j < end; j++) {
        if (a[i] + a[j] >= k) {
          count++;
          pairExists = true;
          break;
        }
      }
    }
  }

  return count;
}

console.time('first')
console.log(segmentsWithSum([2, 4, 2, 7, 1, 6, 1, 1, 1], 4, 8)) // 4
console.timeEnd('first') // .59 ms
console.time('second')
console.log(segmentsWithSum([2, 3, 3, 3, 4, 3, 2, 1, 2, 4], 2, 7)) // 2
console.timeEnd('second') // .054 ms