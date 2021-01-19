/*
You are given an array of k linked-lists lists, each linked-list is sorted in ascending order.

Merge all the linked-lists into one sorted linked-list and return it.

Example:
Input: lists = [[1,4,5],[1,3,4],[2,6]]
Output: [1,1,2,3,4,4,5,6]
Explanation: The linked-lists are:
[
  1->4->5,
  1->3->4,
  2->6
]
merging them into one sorted list:
1->1->2->3->4->4->5->6

Definition for singly-linked list.
  function ListNode(val, next) {
      this.val = (val===undefined ? 0 : val)
      this.next = (next===undefined ? null : next)
  }
*/

// Input: array of linked lists
// Output: one merged linked list
// Constraints: none
// Edge Cases:
  // if empty array, return an empty array
  // if array with empthy linked lists, return empty array

var mergeKLists = function(lists) {
  // base case
  if (!lists) return [];

  // create result set to first list
  let result = lists[0];

  // create a merge function with input of 2 linked lists
  let merge = (l1, l2) => {
    // if l1 or l2 are not lists return the only list
    if (!l1 || !l2) return l1 || l2;
    // create mergedList set to an empty object
    let mergedList = {};
    let node = mergedList;
    // while L1 or L2 exists
    while (l1 && l2) {
      // if L1 <= L2
      if (l1.val <= l2.val) {
        // set node.next = L1
        node.next = l1;
        // set L1 to be L1.next
        l1 = l1.next;
        // else
      } else {
        // set node.next = L2
        node.next = l2;
        // set L2 to be L2.next
        l2 = l2.next;
      }
      // set mergedList to be mergedList.next
      node = node.next;
    }
    // if L1 or L2 has some left, add to end of merged list
    if (l1) {
      node.next = l1;
    } else if (l2) {
      node.next = l2;
    }
    // return merged list
    return mergedList.next;
  }

  // iterate from index 1
  for (let i = 1; i < lists.length; i++) {
    // merge result to list at index
    result = merge(result, lists[i]);
  }

  // return result
  return result;
};