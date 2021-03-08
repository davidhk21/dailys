const reorderList = require('../Linked_List/ReorderList.js');

describe('Reorder List', () => {
  function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next );
  }
  test('should reorder an even length Linked List', () => {
    const Node4 = new ListNode(4);
    const Node3 = new ListNode(3, Node4);
    const Node2 = new ListNode(2, Node3);
    const Node1 = new ListNode(1, Node2);
    const newLinkedList = {
      val: 1, next: {
        val: 4, next: {
          val: 2, next: {
            val: 3, next: null }}}}
    reorderList(Node1)
    expect(Node1).toEqual(newLinkedList);
  })

  test('should reorder an odd length Linked List', () => {
    const Node5 = new ListNode(5);
    const Node4 = new ListNode(4, Node5);
    const Node3 = new ListNode(3, Node4);
    const Node2 = new ListNode(2, Node3);
    const Node1 = new ListNode(1, Node2);
    const newLinkedList = {
      val: 1, next: {
        val: 5, next: {
          val: 2, next: {
            val: 4, next: {
              val: 3, next: null }}}}}
    reorderList(Node1);
    expect(Node1).toEqual(newLinkedList);
  })
})