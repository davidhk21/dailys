/*
You are given the head of a singly linked-list. The list can be represented as:

L0 → L1 → … → Ln - 1 → Ln
Reorder the list to be on the following form:

L0 → Ln → L1 → Ln - 1 → L2 → Ln - 2 → …
You may not modify the values in the list's nodes. Only nodes themselves may be changed.
*/

// BETTER SOLUTION
// Time: O(N)
// Space: O(1)
var reorderList = function(head) {
  // find the middle node
  let slow = head;
  let fast = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  // reverse the second half
  let prev = null;
  let curr = slow;
  while (curr) {
    [curr.next, prev, curr] = [prev, curr, curr.next];
  }
  // merge the two halfs
  let first = head;
  let second = prev;
  while (second.next) {
    [first.next, first] = [second, first.next];
    [second.next, second] = [first, second.next];
  }
}

// Original Solution
// Time: O(n^2)
// Space: O(1)
// var reorderList = function(head) {
//   while (head) {
//     if (head.next === null || head.next.next === null) {
//       head= null;
//     } else {
//       let next = head.next;
//       let secondToLast = head;
//       let last = next;
//       while (last.next && last.next !== null) {
//         last = last.next;
//         secondToLast = secondToLast.next;
//       }
//       head.next = last;
//       secondToLast.next = null;
//       last.next = next;
//       head = next;
//     }
//   }
// };

module.exports = reorderList;