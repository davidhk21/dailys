/*
Given two integer arrays preorder and inorder where preorder is the preorder traversal of a binary tree and inorder is the inorder traversal of the same tree, construct and return the binary tree.

Definition for a binary tree node.
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}
*/

// Time: O(N)
// Space: O(N)
var buildTree = function(preorder, inorder) {

  const construct = (left, right) => {
    if (left > right) return null;
    let val = preorder[preorderIdx];
    let root = new TreeNode(val);
    preorderIdx++;

    root.left = construct(left, map[val] - 1);
    root.right = construct(map[val] + 1, right);

    return root;
  }

  let preorderIdx = 0;
  let map = {}
  for (let i = 0; i < inorder.length; i++) {
    let val = inorder[i];
    map[val] = i;
  }

  return construct(0, preorder.length - 1);
}

// Time: O(N^2)
// Space: O(H) height of tree
var buildTree = function(preorder, inorder) {
  if (inorder.length === 0) return null;
  let val = preorder.shift();
  let node = new TreeNode(val);

  let idx = inorder.indexOf(val);
  let leftTree = inorder.slice(0, idx);
  let rightTree = inorder.slice(idx + 1);

  node.left = buildTree(preorder, leftTree);
  node.right = buildTree(preorder, rightTree);

  return node;
};