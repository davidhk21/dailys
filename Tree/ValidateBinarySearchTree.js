/*
Given the root of a binary tree, determine if it is a valid binary search tree (BST).

A valid BST is defined as follows:

The left subtree of a node contains only nodes with keys less than the node's key.
The right subtree of a node contains only nodes with keys greater than the node's key.
Both the left and right subtrees must also be binary search trees.

Definition for a binary tree node.
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}
*/

// Inorder Traversal Approach
// Time: O(N)
// Space: O(N)
var isValidBST = function(root) {
  let prev = -Infinity;

  const inorderDFS = (node) => {
    if (!node) return true;
    if (!inorderDFS(node.left)) return false;
    if (node.val <= prev) return false;
    prev = node.val;
    return inorderDFS(node.right);
  }

  return inorderDFS(root);
}

// Preorder Traversal Approach
// Time: O(N)
// Space: O(H)
var isValidBST = function(root) {

  const dfs = (node, lower, upper) => {
    if (!node) return true;
    if (node.val <= lower || node.val >= upper) return false;

    return dfs(node.right, node.val, upper) && dfs(node.left, lower, node.val);
  }

  return dfs(root, -Infinity, Infinity);
};