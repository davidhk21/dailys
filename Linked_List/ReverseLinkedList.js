/*
Reverse a singly linked list.

Example:
Input: 1->2->3->4->5->NULL
Output: 5->4->3->2->1->NULL

Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }

A linked list can be reversed either iteratively or recursively. Could you implement both?
*/
function ListNode (val, next) {
  this.val = (val === undefined ? 0 : val);
  this.next = (next === undefined ? null : next);
}

// iterative approach
var reverseList = function(head) {
  if (!head) return head;
  let nodesContainer = [];
  let node = head;
  while (node) {
    nodesContainer.push(node);
    node = node.next;
  }
  for (let i = nodesContainer.length - 1; i >= 0; i--) {
    if (i === 0) {
      nodesContainer[i].next = null;
      continue;
    }
    nodesContainer[i].next = nodesContainer[i - 1];
  }
  return nodesContainer[nodesContainer.length - 1];
};

// recursive approach
var reverseList = function(head, previous = null) {
  // base case: if head is null, return the new head
  if (!head) return previous;
  // create variable next set equal to head.next
  let next = head.next;
  // set head.next equal to previous
  head.next = previous;
  // return the invocation of reverseList on new head (next) and new previous (head)
  return reverseList(next, head);
};

// better iterative solution
var reverseList = (head) => {
  let [prev, curr] = [null, head];
  while (curr) {
    [curr.next, prev, curr] = [prev, curr, curr.next];
  }
  return prev;
};

// const node5 = new ListNode(5);
// const node4 = new ListNode(4, node5);
// const node3 = new ListNode(3, node4);
// const node2 = new ListNode(2, node3);
// const node1 = new ListNode(1, node2);
// console.log(reverseList(node1));