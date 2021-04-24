/*
You are given two lists of closed intervals, firstList and secondList, where firstList[i] = [starti, endi] and secondList[j] = [startj, endj]. Each list of intervals is pairwise disjoint and in sorted order.

Return the intersection of these two interval lists.

A closed interval [a, b] (with a < b) denotes the set of real numbers x with a <= x <= b.

The intersection of two closed intervals is a set of real numbers that are either empty or represented as a closed interval. For example, the intersection of [1, 3] and [2, 4] is [2, 3].

Example:
Input: firstList = [[0,2],[5,10],[13,23],[24,25]], secondList = [[1,5],[8,12],[15,24],[25,26]]
Output: [[1,2],[5,5],[8,10],[15,23],[24,24],[25,25]]
*/

// Clever Solution
// Time: O(N + M)
// Space: O(1)
var intervalIntersection = function(firstList, secondList) {
  let result = [];
  let i = 0;
  let j = 0;

  while (i < firstList.length && j < secondList.length) {
      let x = Math.max(firstList[i][0], secondList[j][0]);
      let y = Math.min(firstList[i][1], secondList[j][1]);
      if (x <= y) result.push([x, y]);

      firstList[i][1] < secondList[j][1] ? i++ : j++;
  }

  return result;
};

// Time: O(N * M)
// Space: O(1)
var intervalIntersection = function(firstList, secondList) {
  let result = [];

  for (let i = 0; i < secondList.length; i++) {
      let [x, y] = secondList[i];
      let idx = 0;
      let interval = firstList[idx];

      while (interval !== undefined && y >= interval[0]) {
          if (x > interval[1]) {
              interval = firstList[++idx];
              continue;
          }

          let ans = [Math.max(x, interval[0]), Math.min(y, interval[1])];
          result.push(ans);
          interval = firstList[++idx];
      }
  }

  return result;
};