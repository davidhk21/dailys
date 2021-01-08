/*
You are climbing a staircase. It takes n steps to reach the top.

Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

Example:
Input: n = 2
Output: 2
Explanation: There are 2 ways to climb to the top
  1. 1 step + 1 step
  2. 2 steps
*/

// Input: number of steps on staircase
// Output: number of ways to get up
// Constraints: n is between 1 and 45
// Edge Cases:

var climbStairs = function(n) {
  if (n === 0) return 0;
  if (n === 1) return 1;
  if (n === 2) return 2;
  let arr = [0, 1, 2];
  for (let i = 3; i <= n; i++) {
    arr[i] = arr[i - 1] + arr[i - 2];
  }
  return arr[n];
};

// console.log(climbStairs(0))
// console.log(climbStairs(1))
// console.log(climbStairs(2))
// console.log(climbStairs(3))
// console.log(climbStairs(4))
// console.log(climbStairs(5))