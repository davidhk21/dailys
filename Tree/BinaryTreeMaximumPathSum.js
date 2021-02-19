/*
A path in a binary tree is a sequence of nodes where each pair of adjacent nodes in the sequence has an edge connecting them. A node can only appear in the sequence at most once. Note that the path does not need to pass through the root.

The path sum of a path is the sum of the node's values in the path.

Given the root of a binary tree, return the maximum path sum of any path.

Definition for a binary tree node.
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}
*/

// Input: root node
// Output: number
// Constraints: none
// Edge Cases: none

// Time: O(N) N = number of nodes, since we visit each node not more than 2 times
// Space: O(H) H = height of tree
var maxPathSum = function(root) {
  let result = -Infinity;

  const findMaxSum = (node) => {
    if (!node) return 0;

    let leftMax = Math.max(findMaxSum(node.left), 0);
    let rightMax = Math.max(findMaxSum(node.right), 0);

    let priceNewPath = node.val + leftMax + rightMax;

    result = Math.max(result, priceNewPath);

    return node.val + (Math.max(leftMax, rightMax));
  }

  findMaxSum(root);
  return result;
}
