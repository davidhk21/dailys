/*
Given the head of a linked list, remove the nth node from the end of the list and return its head.

Follow up: Could you do this in one pass?

Definition for singly-linked list.
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}
*/

// Input: linked list, number
// Output: new linked list
// Constraints: try to do it in one pass
// Edge Cases: none

// Solution Answer
// Time: O(L)
// Space: O(1)
var removeNthFromEnd = function(head, n) {
  let dummy = new ListNode(null, head);
  let first = dummy;
  let second = dummy;

  for (let i = 0; i < n + 1; i++) {
    first = first.next;
  }

  while (first !== null) {
    first = first.next;
    second = second.next;
  }

  second.next = second.next.next;

  return dummy.next;
}

// Original Answer
// Time: O(L * n)
// Space: O(1)
var removeNthFromEnd = function(head, n) {
  let newLinkedList = {};
  let currNode = newLinkedList;
  currNode.next = null;

  let nodeRemoved = false;

  while (head) {
    let futureNode = head;
    let count = n;
    let removedNodeExists = false;

    while (count > 0) {
      if (futureNode.next === null) {
        removedNodeExists = true;
        break;
      } else {
        futureNode = futureNode.next;
        count--;
      }
    }

    // if does break
    if (removedNodeExists === true && nodeRemoved === false) {
      head = head.next;
      nodeRemoved = true;
      currNode.next = null;
      // if doesn't break
    } else {
      currNode.next = head;
      currNode = currNode.next;
      head = head.next;
    }
  }

  return newLinkedList.next;
};