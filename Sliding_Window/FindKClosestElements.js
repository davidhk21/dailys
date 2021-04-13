/*
Given a sorted integer array arr, two integers k and x, return the k closest integers to x in the array. The result should also be sorted in ascending order.

An integer a is closer to x than an integer b if:

|a - x| < |b - x|, or
|a - x| == |b - x| and a < b
*/

// Binary Search Solution
// Time: O(log N)
// Space: O(1)
var findClosestElements = function(arr, k, x) {
  let lo = 0, hi = arr.length - 1;
  while (lo < hi) {
      const mid = parseInt((lo + hi) / 2);
      x - arr[mid] > arr[mid + k]- x ? lo = mid + 1 : hi = mid;
  }
  return arr.slice(lo, lo + k);
};

// Linear Approach
// Time: O(N)
// Space: O(1)
var findClosestElements = function(arr, k, x) {
  let n = arr.length;
  let l = 0;
  let r = n - 1;

  while (r - l + 1 > k) {
    let leftVal = arr[l];
    let rightVal = arr[r];
    (Math.abs(leftVal - x) < Math.abs(rightVal - x) || Math.abs(leftVal - x) === Math.abs(rightVal - x) && leftVal < rightVal) ? r-- : l++;
  }

  return arr.slice(l, r + 1);
}

// First Approach (Brute Force)
// Time: O(N^2)
// Space: O(N)
var findClosestElements = function(arr, k, x) {
  let differences = arr.map(val => Math.abs(val - x));
  let result = [];
  let sum = Infinity;

  for (let i = 0; i < arr.length - k + 1; i++) {
      let end = i + k;
      let currSum = 0;
      for (let j = i; j < end; j++) {
          currSum += differences[j];
      }
      if (currSum < sum) {
          sum = currSum;
          result = arr.slice(i, end);
      }
  }

  return result;
};