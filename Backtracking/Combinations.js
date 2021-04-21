/*
Given two integers n and k, return all possible combinations of k numbers out of the range [1, n].

You may return the answer in any order.
*/

// better time complexity because of less slice operations
// Time: O(K * K choose N)
// Space: O(H) height of tree
var combine = function(n, k) {
  let result = [];

  const createCombo = (combo, currIdx) => {
      if (combo.length === k) {
          let resultCombo = combo.slice();
          result.push(resultCombo);
          return;
      }

      for (let i = currIdx; i <= n; i++) {
          combo.push(i);
          createCombo(combo, i + 1);
          combo.pop();
      }
  }

  createCombo([], 1);

  return result;
};

var combine = function(n, k) {
  let result = [];

  const createCombo = (combo, currIdx) => {
      if (combo.length === k) {
          result.push(combo);
          return;
      }

      for (let i = currIdx; i <= n; i++) {
          let newCombo = combo.slice();
          newCombo.push(i);
          createCombo(newCombo, i + 1);
      }
  }

  createCombo([], 1);

  return result;
};