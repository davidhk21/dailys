/*
Given a linked list, swap every two adjacent nodes and return its head.

Example:
Input: head = [1,2,3,4]
Output: [2,1,4,3]

function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}
*/

// SOLUTION
var swapPairs = (head) => {
  let cur = head;
  let newHead = head && head.next ? head.next : head;

  while (cur && cur.next) {
    let next = cur.next;
    let temp = next.next;

    cur.next = temp && temp.next ? temp.next : temp;
    next.next = cur;

    cur = temp;
  }

  return newHead;
};
