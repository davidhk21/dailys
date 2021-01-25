/*
Given head, the head of a linked list, determine if the linked list has a cycle in it.

There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter.

Return true if there is a cycle in the linked list. Otherwise, return false.

Definition for singly-linked list.
function ListNode(val) {
    this.val = val;
    this.next = null;
}
*/

// Input: linked list (head)
// Output: boolean
// Constraints: constant memory
// Edge Cases: none

// Constance space solution
var hasCycle = function(head) {
  // create a variable for node1 and node2
  let node1 = head; node2 = head;
  // while node1 and node1.next
  while (node1 && node2 && node2.next) {
    // set node1 to be node1.next
    node1 = node1.next;
    // set node2 to be node2.next.next
    node2 = node2.next.next
    // if node 1 and node2 are the same node, return true
    if (node1 === node2) return true;
  }
  // return false
  return false;
};

// Original Solution (Linear Space)
var hasCycle = function(head) {
  // if head.next is null, return false
  if (!head || head.next === null) return false;
  // create a cache using a map
  let cache = new Map();
  // create a variable for current node
  let currNode = head;
  // while current node is a node
  while (currNode) {
    // if cache doesn't have node
    if (!cache.has(currNode)) {
      // add current node to cache
      cache.set(currNode, currNode);
      // else
    } else {
      // return true
      return true;
    }
    // set current node to be current node's next
    currNode = currNode.next;
  }
  // return false
  return false;
};