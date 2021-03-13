/*
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
*/

// Input: string
// Output: boolean
// Constraints: consists of only parentheses and length of atleast 1
// Edge Cases: none

// Cleaner Solution
// Time: O(N)
// Space: O(N)
var isValid = function(s) {
  let stack = [];
  const obj = {
    '(': ')',
    '{': '}',
    '[': ']',
  };

  for (var paren of s) {
    if (obj[paren]) {
      stack.push(paren);
    } else {
      let topOfStack = stack.pop();
      if (obj[topOfStack] !== paren) return false;
    }
  }

  return stack.length === 0;
};

// Time: O(N)
// Space: O(N)
// var isValid = function(s) {
//   let stack = [];
//   for (var paren of s) {
//     if (paren === '(' || paren === '{' || paren === '[') {
//       stack.push(paren);
//     } else {
//       let topOfStack = stack.pop();
//       if (paren === ')' && topOfStack !== '(') return false;
//       if (paren === '}' && topOfStack !== '{') return false;
//       if (paren === ']' && topOfStack !== '[') return false;
//     }
//   }
//   return stack.length === 0;
// };

module.exports = isValid;