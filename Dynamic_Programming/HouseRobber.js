/*
You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them is that adjacent houses have security systems connected and it will automatically contact the police if two adjacent houses were broken into on the same night.

Given an integer array nums representing the amount of money of each house, return the maximum amount of money you can rob tonight without alerting the police.

Example:
Input: nums = [1,2,3,1]
Output: 4
Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3).
Total amount you can rob = 1 + 3 = 4.
*/

// Inputs: Array of nums
// Output: Max Profit
// Constraints:
  // nums[i] >= 0
  // nums.length >= 1
// Edge Cases: none

// Time: O(N)
// Space: O(1)
var rob = function(nums) {
  let prevMax = 0;
  let currMax = 0;
  for (var num of nums) {
    let temp = currMax;
    currMax = Math.max(prevMax + num, currMax);
    prevMax = temp;
  }
  return currMax;
}

// Time: O(N)
// Space: O(N)
// var rob = function(nums) {
//   if (nums.length === 1) return nums[0];
//   let greaterOfFirst2 = nums[0] > nums[1] ? nums[0] : nums[1];
//   if (nums.length === 2) {
//     return greaterOfFirst2;
//   }

//   let result = greaterOfFirst2;
//   let dp = [nums[0], nums[1]];

//   for (let i = 2; i < nums.length; i++) {
//     let first = dp[i - 2];
//     let second = dp[i - 3] || 0;
//     let house = first > second ? first : second;
//     dp[i] = house + nums[i];
//     result = Math.max(result, dp[i]);
//   }

//   return result;
// }

// Recursive Solution (Time Limit Exceeded)
// Time Complexity: not sure
// Space Complexity: O(H) where H is height of recursion tree
// var rob = function(nums) {
//   let result = 0;

//   const checkHouses = (idx, sum) => {
//     if (nums[idx + 2] === undefined) {
//       result = Math.max(result, sum);
//       return;
//     }

//     checkHouses(idx + 2, sum + nums[idx + 2]);
//     if (nums[idx + 3]) {
//       checkHouses(idx + 3, sum + nums[idx + 3]);
//     }
//   }

//   checkHouses(0, nums[0]);
//   if (nums[1]) checkHouses(1, nums[1]);

//   return result;
// }

module.exports = rob;