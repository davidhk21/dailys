/*
Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).
*/

// BFS Solution
// Time: O(N)
// Space: O(N)
var levelOrder = function(root) {
  let result = [];
  if (!root) return result;

  let level = 0;
  let queue = [root];
  while (queue.length > 0) {
    // start current level
    result.push([]);

    let queueLength = queue.length;
    for (let i = 0; i < queueLength; i++) {
      let node = queue.shift();

      result[level].push(node.val);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }

    level++;
  }

  return result;
}

// DFS Solution
// Time: O(N)
// Space: O(N)
var levelOrder = function(root) {
  let result = [];
  if (!root) return result;

  const helper = (node, level) => {
    // start the current level if not exists
    if (result.length === level) {
      result.push([]);
    }
    // add node value to level
    result[level].push(node.val);
    // go through children
    if (node.left) helper(node.left, level + 1);
    if (node.right) helper(node.right, level + 1);
  }

  helper(root, 0);

  return result;
}

// Original Solution
// Time: O(N) go through all nodes in tree
// Space: O(N) output structure with contains N node values
var levelOrder = function(root) {
  let result = [];

  const goThroughQueue = (queue) => {
    if (queue.length === 0) return;
    let subArr = [];
    for (let i = 0; i < queue.length; i++) {
      let node = queue[i];
      subArr.push(node.val);
    }
    result.push(subArr);
    let newQueue = [];
    for (let i = 0; i < queue.length; i++) {
      let child = queue[i];
      if (child.left) {
        newQueue.push(child.left);
      }
      if (child.right) {
        newQueue.push(child.right);
      }
    }
    goThroughQueue(newQueue);
  }

  // add root to queue
  if (!root) {
    goThroughQueue([root]);
  }

  return result;
};