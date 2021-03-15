const { serialize, deserialize } = require('../Tree/SerializeAndDeserializeBinaryTree.js');

describe('Serialize and Deserialize Binary Tree', () => {
  function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
  }

  test('works with regular binary tree', () => {
    let node5 = new TreeNode(5);
    let node4 = new TreeNode(4);
    let node3 = new TreeNode(3);
    let node2 = new TreeNode(2);
    let node1 = new TreeNode(1);
    node1.left = node2;
    node1.right = node3;
    node3.left = node4;
    node3.right = node5;
    expect(deserialize(serialize(node1))).toEqual(node1);
  })
})