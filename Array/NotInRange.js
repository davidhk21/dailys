/*
Given an array nums of n integers where nums[i] is in the range [1, n], return an array of all the integers in the range [1, n] that do not appear in nums.

Examples:
Input: nums = [4,3,2,7,8,2,3,1]
Output: [5,6]

Input: nums = [1,1]
Output: [2]

Constraints:
n == nums.length
1 <= n <= 10^5
1 <= nums[i] <= n

*/

// Time: O(N)
// Space: O(1)
const missingNums = (nums) => {
  let result = [];

  for (let i = 0; i < nums.length; i++) {
    let num = Math.abs(nums[i]);
    if (nums[num - 1] > 0) nums[num - 1] = -nums[num - 1];
  }

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) result.push(i + 1);
  }

  return result;
}

// Time: O(N)
// Space: O(N)
const missingNums = (nums) => {
	let result = [];
	let existsArr = new Array(nums.length + 1).fill(false);

	for (let i = 0; i < nums.length; i++) {
		if (!existsArr[nums[i]]) existsArr[nums[i]] = true;
	}

	for (let i = 1; i < existsArr.length; i++) {
		if (!existsArr[i]) result.push(i);
	}

	return result;
}
