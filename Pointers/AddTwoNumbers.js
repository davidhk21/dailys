/*
You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Example:
Input: l1 = [2,4,3], l2 = [5,6,4]
Output: [7,0,8]
Explanation: 342 + 465 = 807.
*/

// Shorter Solution
var addTwoNumbers = function(l1, l2) {
  let node1 = l1;
  let node2 = l2;
  let curr = {};
  let result = curr;

  let carry = 0;

  while (node1 || node2) {
      let x = node1 ? node1.val : 0;
      let y = node2 ? node2.val : 0;
      let sum = carry + x + y;
      carry = Math.floor(sum / 10);

      curr.next = new ListNode(sum % 10);
      curr = curr.next;

      if (node1) node1 = node1.next;
      if (node2) node2 = node2.next;
  }

  if (carry) curr.next = new ListNode(1);

  return result.next;
};

// Time: O(L1 || L2)
// Space: O(N)
var addTwoNumbers = function(l1, l2) {
  let node1 = l1;
  let node2 = l2;
  let result = {};
  let node = result;

  let carry = false;

  while (node1 && node2) {
      let sum = node1.val + node2.val;
      if (carry) sum += 1;
      carry = false;
      if (sum >= 10) {
          carry = true;
          let node = new ListNode(sum - 10);
          result.next = node;
      } else {
          let node = new ListNode(sum);
          result.next = node;
      }

      node1 = node1.next;
      node2 = node2.next;
      result = result.next;
  }

  while (node1) {
      let val = node1.val;
      if (carry) val += 1;
      carry = false;
      if (val >= 10) {
          carry = true;
          result.next = new ListNode(val - 10);
      } else {
          result.next = new ListNode(val);
      }

      result = result.next;
      node1 = node1.next;
  }

  while (node2) {
      let val = node2.val;
      if (carry) val += 1;
      carry = false;
      if (val >= 10) {
          carry = true;
          result.next = new ListNode(val - 10);
      } else {
          result.next = new ListNode(val);
      }

      result = result.next;
      node2 = node2.next;
  }

  if (carry) result.next = new ListNode(1);

  return node.next;
};