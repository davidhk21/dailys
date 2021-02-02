/*
Given a collection of intervals, find the minimum number of intervals you need to remove to make the rest of the intervals non-overlapping.

Example:
Input: [[1,2],[2,3],[3,4],[1,3]]
Output: 1
Explanation: [1,3] can be removed and the rest of intervals are non-overlapping.
*/

// Input: Array of arrays (intervals)
// Output: Number
// Constraints: none
// Edge Cases: none

// Time Complexity: O(n log n)
// Space Complexity: O(1)
var eraseOverlapIntervals = function(intervals) {
  if (intervals.length === 0) return 0;
  intervals = intervals.sort((a, b) => a[1] - b[1]);
  let end = intervals[0][1];
  let count = 1;
  for (let i = 1; i < intervals.length; i++) {
    if (intervals[i][0] >= end) {
      end = intervals[i][1];
      count++;
    }
  }
  return intervals.length - count;
}

// Time Complexity: O(n^2)
// Space Complexity: O(n)
var eraseOverlapIntervals = function(intervals) {
  if (intervals.length === 0) return 0;
  intervals = intervals.sort((a, b) => a[0] - b[0]);
  let dp = new Array(intervals.length).fill(1);
  for (let i = 1; i < intervals.length; i++) {
    let idx = i - 1;
    while (idx >= 0) {
      if (intervals[i][0] > intervals[idx][1]) {
        dp[i] = Math.max(dp[idx] + 1, dp[i]);
      }
      idx--;
    }
  }
  return dp[dp.length - 1];
};