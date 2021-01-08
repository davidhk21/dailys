/*
Given the root of a binary tree, return its maximum depth.

A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

Definition for a binary tree node.
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

Example:
Input: root = [3,9,20,null,null,15,7]
Output: 3
*/

// Input: root node
// Output: max depth number
// Constraints: none
// Edge Cases: no roote node returns 0

// BETTER SOLUTION
var maxDepth = (root) => {
  if (!root) return 0;
  return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
};

// ORIGINAL SOLUTION
var maxDepth = function(root) {
  // base case
  if (!root) return 0;
  // create a result variable
  let result = 0;
  // create a recursive function with input of node and depth
  const checkMaxDepth = (node, depth) => {
    // if depth > current result
    if (depth > result) {
      // set current result to current depth
      result = depth;
    }
    // if current node doesn't have children
    if (!node.left && !node.right) {
      // return
      return;
    }
    // if node has a left
    if (node.left) {
      // invoke recursion on left node with depth + 1
      checkMaxDepth(node.left, depth + 1);
    }
    // if node has a right
    if (node.right) {
      // invoke recursion on right node with depth + 1
      checkMaxDepth(node.right, depth + 1);
    }
  }
  // invoke recursive function with root node and depth of 1
  checkMaxDepth(root, 1);
  // return result
  return result;
};