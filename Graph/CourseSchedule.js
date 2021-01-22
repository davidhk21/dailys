/*
There are a total of numCourses courses you have to take, labeled from 0 to numCourses-1.

Some courses may have prerequisites, for example to take course 0 you have to first take course 1, which is expressed as a pair: [0,1]

Given the total number of courses and a list of prerequisite pairs, is it possible for you to finish all courses?

Input: numCourses = 2, prerequisites = [[1,0]]
Output: true
Explanation: There are a total of 2 courses to take.
             To take course 1 you should have finished course 0. So it is possible.
*/

var canFinish = function(numCourses, prerequisites) {
  const graph = Array.from(Array(numCourses), () => []);
  const ranks = Array(numCourses).fill(0);
  for (const [u, v] of prerequisites) {
    graph[v].push(u);
    ranks[u]++;
  }
  const queue = [];
  // push nodes with no dependency (rank 0) to queue
  ranks.forEach((r, i) => {
    if (!r) queue.push(i);
  })
  //BFS Kahn
  while (queue.length) {
    const nextQueue = queue.shift();
    numCourses--;
    // reduce neighbors rank by 1
    // push nodes with no dependencies (rank 0) to queue
    graph[nextQueue].forEach(neigh => {
      ranks[neigh]--;
      if (!ranks[neigh]) queue.push(neigh);
    })
  }
  return !numCourses;
};

const courses = [[0, 1], [0, 2], [1, 3], [2, 3]];
console.log(canFinish(4, courses));