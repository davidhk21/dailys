/*
Given a binary tree, write a function to get the maximum width of the given tree. The maximum width of a tree is the maximum width among all levels.

The width of one level is defined as the length between the end-nodes (the leftmost and right most non-null nodes in the level, where the null nodes between the end-nodes are also counted into the length calculation.

It is guaranteed that the answer will in the range of 32-bit signed integer.
*/

// DFS Solution
// Time: O(N)
// Space: O(H) height of tree
var widthOfBinaryTree = function(root) {
  let minPos = [0];
  let maxWidth = 0;

  const dfs = (node, level, pos) => {
    if (minPos[level] === undefined) minPos[level] = pos;

    const diff = pos - minPos[level];
    maxWidth = Math.max(maxWidth, diff + 1);

    if (node.left) dfs(node.left, level + 1, diff * 2);
    if (node.right) dfs(node.right, level + 1, diff * 2 + 1);
  }

  dfs(root, 0, 0);

  return maxWidth;
};