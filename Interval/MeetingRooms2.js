/*
Given an array of meeting time intervals intervals where intervals[i] = [starti, endi], return the minimum number of conference rooms required.

Example:
Input: intervals = [[0,30],[5,10],[15,20]]
Output: 2
*/

// SOLUTION
// Time: O(N log N)
// Space: O(N)
var minMeetingRooms = function(intervals) {
  var starts = intervals.slice().sort((a, b) => a[0] - b[0]);
	var ends = intervals.sort((a, b) => a[1] - b[1]);

	var rooms = 0;
	var end = 0;

	for (var start = 0; start < intervals.length; start++) {
    starts[start][0] < ends[end][1] ? rooms++ : end++;
	}

	return rooms;
};

// ORIGINAL SOLUTION
// Time: O(N log N + (N * L)) where L is number of meeting rooms needed
// Space: O(L)
// var minMeetingRooms = function(intervals) {
//   intervals = intervals.sort((a, b) => a[0] - b[0]);

//   let container = [intervals[0]];

//   for (let i = 1; i < intervals.length; i++) {
//     let needsNewRoom = true;
//     for (let j = 0; j < container.length; j++) {
//       if (intervals[i][0] >= container[j][1]) {
//         container[j] = intervals[i];
//         needsNewRoom = false;
//         break;
//       }
//     }
//     if (needsNewRoom) container.push(intervals[i]);
//   }

//   return container.length;
// }

module.exports = minMeetingRooms;

