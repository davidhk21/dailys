/*
Given a reference of a node in a connected undirected graph.

Return a deep copy (clone) of the graph.

Each node in the graph contains a val (int) and a list (List[Node]) of its neighbors.

// Definition for a Node.
function Node(val, neighbors) {
   this.val = val === undefined ? 0 : val;
   this.neighbors = neighbors === undefined ? [] : neighbors;
};

Input: adjList = [[2,4],[1,3],[2,4],[1,3]]
Output: [[2,4],[1,3],[2,4],[1,3]]
Explanation: There are 4 nodes in the graph.
1st node (val = 1)'s neighbors are 2nd node (val = 2) and 4th node (val = 4).
2nd node (val = 2)'s neighbors are 1st node (val = 1) and 3rd node (val = 3).
3rd node (val = 3)'s neighbors are 2nd node (val = 2) and 4th node (val = 4).
4th node (val = 4)'s neighbors are 1st node (val = 1) and 3rd node (val = 3).
*/

// Input: first node of graph with val = 1
// Output: clone of graph
// Constraints: node val between 1 and 100, node val is unique, no repeated edges, and graph is connected so that all nodes can be visited starting from the given node
// Edge Cases: a graph with one empty list will return an array of an array, and an empty graph will return an empty array


// DFS SOLUTION
var cloneGraph = function(node) {
  let map = new Map();

  if (!node) return null;

  const cloneNode = (node) => {
    if (map.has(node.val)) return map.get(node.val);

    let clonedNode = new Node(node.val);
    map.set(node.val, clonedNode);

    for (let neighbor of node.neighbors) {
      clonedNode.neighbors.push(cloneNode(neighbor));
    }
    return clonedNode;
  }
  return cloneNode(node);
};

// BFS SOLUTION
var cloneGraph = function(node) {
  let map = new Map();

  if (!node) return null;

  let queue = [];
  queue.unshift(node);
  map.set(node.val, new Node(node.val));

  while (queue.length > 0) {
    let currentNode = queue.pop();

    currentNode.neighbors.forEach(neighbor => {
      if (!map.has(neighbor.val)) {
        map.set(neighbor.val, new Node(neighbor.val));
        queue.unshift(neighbor);
      }
      map.get(currentNode.val).neighbors.push(map.get(neighbor.val));
    });
  }
  return map.get(node.val);
};