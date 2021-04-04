/*
Given the root of a binary search tree, and an integer k, return the kth (1-indexed) smallest element in the tree.
*/

// Inorder Traversal Approach
// Time: O(N)
// Space: O(H)
var kthSmallest = function(root, k) {
  let result = null;
  const dfs = (node) => {
      if (node.left) dfs(node.left);
      k--;
      if (k === 0) {
          result = node.val;
          return;
      }
      if (node.right && !result) dfs(node.right);
  }

  dfs(root);
  return result;
};