/*
Given two non-empty binary trees s and t, check whether tree t has exactly the same structure and node values with a subtree of s. A subtree of s is a tree consists of a node in s and all of this node's descendants. The tree s could also be considered as a subtree of itself.

Definition for a binary tree node.
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

*/

// Input: two trees
// Output: boolean
// Constraints: none
// Edge Cases: none

// Time: O(s * t)
// Space: O(s + t) height of tree s and t due to recursion
const compare = (nodeS, nodeT) => {
  if (!nodeS && !nodeT) return true;
  if (!nodeS || !nodeT || nodeS.val !== nodeT.val) return false;
  return (compare(nodeS.left, nodeT.left) && compare(nodeS.right, nodeT.right));
}

var isSubtree = function(s, t) {
  if (compare(s, t)) return true;
  if (!s) return false;
  return isSubtree(s.left, t) || isSubtree(s.right, t);
};