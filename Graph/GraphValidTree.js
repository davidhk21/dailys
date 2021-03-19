/*
You have a graph of n nodes labeled from 0 to n - 1. You are given an integer n and a list of edges where edges[i] = [ai, bi] indicates that there is an undirected edge between nodes ai and bi in the graph.

Return true if the edges of the given graph make up a valid tree, and false otherwise.

Example:
Input: n = 5, edges = [[0,1],[0,2],[0,3],[1,4]]
Output: true
*/

// Input:
  // n: number of nodes
  // edges: array of edges
// Output: boolean
// Constraints:
  // there are no self loops or repeated edges
  // a !== b
  // atleast one node
  // a and b will always be valid nodes
// Edge Cases: none

// UNION FIND SOLUTION
class UnionFind {
  constructor(n, unions) {
    this.list = unions;
  }

  // find the representative of a union for a vertex
  find(n) {
    while (this.list[n] !== n) n = this.list[n];
    return n;
  }

  // if the two are in same union, then indicates cycle
  // if not, then merge unions
  union(m, n) {
    let uM = this.find(m);
    let uN = this.find(n);

    if (uM === uN) return false;

    this.list[uM] = uN;
    return true;
  }
}

var validTree = function(n, edges) {
  // base cases
  if (edges.length !== n - 1) return false;
  if (n < 2) return true;

  // instantiate Union Find data structure
  let unions = Array.from({length: n}, (_, i) => i);
  let unionFind = new UnionFind(n, unions);

  // union every edge, return false if can't union
  for (var [i, j] of edges) if (!unionFind.union(i, j)) return false;
  return true;
}

// BFS SOLUTION
var validTree = function(n, edges) {
  if (n < 2) return true;
  // built adjacency list
  const adjList = Array.from({length: n}, () => []);

  for (let edge of edges) {
    let [src, dest] = edge;
    adjList[src].push(dest);
    adjList[dest].push(src);
  }

  let visited = new Set();
  let parent = [];
  let containsCycles = false;

  let queue = [0];

  while (queue.length) {
    let node = queue.shift();
    visited.add(node);
    for (var neighbor of adjList[node]) {
      if (visited.has(neighbor)) {
        if (parent[node] !== neighbor) {
          return false;
        }
      } else {
        parent[neighbor] = node;
        queue.push(neighbor);
      }
    }
  }

  return visited.size === n;
}

// DFS SOLUTION
var validTree = function(n, edges) {
  if (n < 2) return true;
  // built adjacency list
  const adjList = Array.from({length: n}, () => []);

  for (let edge of edges) {
    let [src, dest] = edge;
    adjList[src].push(dest);
    adjList[dest].push(src);
  }

  // check if there are cycles
  let visited = new Set();
  let parent = [];
  let containsCycles = false;

  const dfs = (root) => {
    visited.add(root);
    for (var neighbor of adjList[root]) {
      if (visited.has(neighbor)) {
        if (parent[root] !== neighbor) {
          containsCycles = true;
          return;
        }
      } else {
        parent[neighbor] = root;
        dfs(neighbor);
      }
    }
  }

  dfs(0);
  // check if contains cycle
  if (containsCycles) return false;

  // check if all connected
  return visited.size === n;
};