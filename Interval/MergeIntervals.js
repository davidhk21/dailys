/*
Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.

Example:
Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
Output: [[1,6],[8,10],[15,18]]
Explanation: Since intervals [1,3] and [2,6] overlaps, merge them into [1,6].
*/

// Input: Array of intervals (arrays)
// Output: Array of merged intervals
// Constraints: none
// Edge Cases: none

var merge = function(intervals) {
  if (!intervals.length) return [];
  // sort the array
  intervals.sort((a, b) => a[0] - b[0]);
  // create a result container and add the first interval
  const result = [];
  result.push(intervals[0]);
  // iterate through the array from idx 1
  for (let i = 1; i < intervals.length; i++) {
    // if first index of second interval not between
    if (intervals[i][0] > result[result.length - 1][1]) {
      // push to result
      result.push(intervals[i]);
    } else {
      // modify last interval in result with new beg and end
      let lastIdx = result.length - 1;
      result[lastIdx][0] = Math.min(intervals[i][0], result[lastIdx][0]);
      result[lastIdx][1] = Math.max(intervals[i][1], result[lastIdx][1]);
    }
  }
  // return result
  return result;
};