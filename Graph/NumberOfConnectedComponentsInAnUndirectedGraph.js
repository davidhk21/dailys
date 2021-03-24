/*
You have a graph of n nodes. You are given an integer n and an array edges where edges[i] = [ai, bi] indicates that there is an edge between ai and bi in the graph.

Return the number of connected components in the graph.
*/

// DFS Approach
// Time: O(N)
// Space: O(N)
var countComponents = function(n, edges) {
  let count = 0;

  let adjList = Array.from({ length: n }, () => []);
  let visited = new Array(n).fill(false);

  for (var edge of edges) {
    let one = edge[0];
    let two = edge[1];
    adjList[one].push(two);
    adjList[two].push(one);
  }

  const dfs = (node) => {
    visited[node] = true;
    let neighbors = adjList[node];
    for (let i = 0; i < neighbors.length; i++) {
      if (visited[neighbors[i]]) continue;
      dfs(neighbors[i]);
    }
  }

  for (let i = 0; i < n; i++) {
    if (visited[i]) continue;
    dfs(i);
    count++;
  }

  return count;
};