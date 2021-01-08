/*
Given a set of non-overlapping intervals, insert a new interval into the intervals (merge if necessary).

You may assume that the intervals were initially sorted according to their start times.

Input: intervals = [[1,3],[6,9]], newInterval = [2,5]
Output: [[1,5],[6,9]]
*/

// Input: non overlapping intervals and a new Internal
// Output: intervals with new interval (merged if overlapping)
// Constraints: none
// Edge Cases: no overlap

var insert = function(intervals, newInterval) {
  let result = [];

  let i = 0;
  while (i < intervals.length && intervals[i][1] < newInterval[0]) {
    result.push(intervals[i]);
    i++;
  }

  newInterval = [Math.min(newInterval[0], i < intervals.length ? intervals[i][0] : Infinity), newInterval[1]];

  while (i < intervals.length && newInterval[1] >= intervals[i][0]) {
    newInterval[1] = Math.max(newInterval[1], intervals[i][1]);
    i++;
  }

  result.push(newInterval);
  return result.concat(intervals.slice(i));
};


console.log(insert([[1,3],[6,9]], [2,5]));
console.log(insert([[1,2],[3,5],[6,7],[8,10],[12,16]], [4,8]));
console.log(insert([], [5,7]));
console.log(insert([[1,5]], [2,3]));
console.log(insert([[1,5]], [2,7]));


