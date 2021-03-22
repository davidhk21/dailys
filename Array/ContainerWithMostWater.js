/*
Given n non-negative integers a1, a2, ..., an , where each represents a point at coordinate (i, ai). n vertical lines are drawn such that the two endpoints of the line i is at (i, ai) and (i, 0). Find two lines, which, together with the x-axis forms a container, such that the container contains the most water.

Notice that you may not slant the container.
*/

// Input: array of non negative integers
// Output: number (volume of container)
// Constraints:
  // n >= 2
  // height is atleast 0
// Edge Cases: none

// Time: O(N)
// Space: O(1)
var maxArea = function(height) {
  let max = 0;

  let left = 0;
  let right = height.length - 1;

  while (left < right) {
    max = Math.max(max, (right - left) * Math.min(height[left], height[right]));
    height[left] < height[right] ? left++ : right--;
  }

  return max;
};