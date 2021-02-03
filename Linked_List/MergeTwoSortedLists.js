/*

Merge two sorted linked lists and return it as a sorted list. The list should be made by splicing together the nodes of the first two lists.

Definition for singly-linked list.
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}
*/

// Time Complexity: O(m + n)
// Space Complexity: O(1)
var mergeTwoLists = function(l1, l2) {
  let result = {};
  let node = result;
  while (l1 && l2) {
    if (l1.val < l2.val) {
      node.next = l1;
      l1 = l1.next;
    } else {
      node.next = l2;
      l2 = l2.next;
    }
    node = node.next;
  }

  node.next = l1 || l2;

  return result.next;
};