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

var swapPairs = function(head) {
  if (!head) return null;
  // if next is null
  if (head && head.next === null) {
    // return
    return;
  }
  // invoke the recursion with current node's next next
  swapPairs(head.next.next);
  // if next next next is null
  if (head && head.next.next.next === null) {
    // set current node's next to be next's next
    head.next = head.next.next;
    // else
  } else {
    // set current node's next to be next next next
    head.next = head.next.next.next;
  }
  // set next nodes next to be current node's val
  head.next.next = head;
  // return head
  return head;
};

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
