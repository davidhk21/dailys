/*
Serialization is the process of converting a data structure or object into a sequence of bits so that it can be stored in a file or memory buffer, or transmitted across a network connection link to be reconstructed later in the same or another computer environment.

Design an algorithm to serialize and deserialize a binary tree. There is no restriction on how your serialization/deserialization algorithm should work. You just need to ensure that a binary tree can be serialized to a string and this string can be deserialized to the original tree structure.

Clarification: The input/output format is the same as how LeetCode serializes a binary tree. You do not necessarily need to follow this format, so please be creative and come up with different approaches yourself.

Definition for a binary tree node.
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}


*/

// Input: root node
// Output: string
// Constraints: none
// Edge cases: empty root results in empty string

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

// Time: O(N)
// Space: O(N)
var serialize = function(root) {
  let result = '';

  const serializeNode = (node) => {
    if (node === null) {
      result += 'X|';
      return;
    }

    result += node.val + '|';

    serializeNode(node.left);
    serializeNode(node.right);
  }

  serializeNode(root);

  return result;
};

// Input: string
// Output: tree (root node)
// Constraints: none
// Edge Cases: empty string/data results in empty tree

// Time: O(N)
// Space : O(N)
var deserialize = function(data) {
  if (data.length === 0) return null;

  let idx = 0;
  const deserializeData = () => {
    let val = '';
    while (data[idx] !== '|') {
      val += data[idx];
      idx++;
    }
    if (val === 'X') return null;

    // create node

    let num = Number(val);
    let node = new TreeNode(num);
    // add left
    idx++;
    node.left = deserializeData();
    // add right
    idx++;
    node.right = deserializeData();
    // return node
    return node;
  }

  return deserializeData();
};

module.exports = {
  serialize,
  deserialize,
}