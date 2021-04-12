/*
Given a binary search tree (BST), find the lowest common ancestor (LCA) of two given nodes in the BST.

According to the definition of LCA on Wikipedia: “The lowest common ancestor is defined between two nodes p and q as the lowest node in T that has both p and q as descendants (where we allow a node to be a descendant of itself).”
*/

// Time: O(N)
// Space: O(1)
var lowestCommonAncestor = function(root, p, q) {
  let node = root;

  while (node !== null) {
      let nodeVal = node.val;
      let pVal = p.val;
      let qVal = q.val;

      if (pVal > nodeVal && qVal > nodeVal) {
          node = node.right;
          continue;
      }
      if (pVal < nodeVal && qVal < nodeVal) {
          node = node.left;
          continue;
      }
      return node;
  }
};

// Time: O(N)
// Space: O(N)
var lowestCommonAncestor = function(root, p, q) {
  let nodeVal = root.val;
  let pVal = p.val;
  let qVal = q.val;

  // if both greater than node, go right
  if (pVal > nodeVal && qVal > nodeVal) return lowestCommonAncestor(root.right, p, q);
  // if both less than node, go left
  if (pVal < nodeVal && qVal < nodeVal) return lowestCommonAncestor(root.left, p, q);
  // else return node
  return root;
};