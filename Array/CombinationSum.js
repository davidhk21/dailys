/*
Given an array of distinct integers candidates and a target integer target, return a list of all unique combinations of candidates where the chosen numbers sum to target. You may return the combinations in any order.

The same number may be chosen from candidates an unlimited number of times. Two combinations are unique if the frequency of at least one of the chosen numbers is different.

It is guaranteed that the number of unique combinations that sum up to target is less than 150 combinations for the given input.

Example:
Input: candidates = [2,3,6,7], target = 7
Output: [[2,2,3],[7]]
Explanation:
2 and 3 are candidates, and 2 + 2 + 3 = 7. Note that 2 can be used multiple times.
7 is a candidate, and 7 = 7.
These are the only two combinations.
*/

// Input: array of candidates & a target sum
// Output: array of combinations
// Constraints: none
// Edge Cases: none

var combinationSum = function(candidates, target) {
  // create a result array variable
  let result = [];
  // create inner recursive function with inputs of idx, temp value, combination array
  const checkCombinations = (idx, temp, comboArr) => {
    // if temp value + num at idx = target
    if (temp + candidates[idx] === target) {
      // push combination array to result array
      result.push([...comboArr, candidates[idx]]);
      // return
      return;
    }
    // if temp value + num at idx < target
    if (temp + candidates[idx] < target) {
      let newComboArr = [...comboArr, candidates[idx]];
      let newTemp = temp + candidates[idx];
      // while idx >= 0
      while (idx >= 0) {
        // recurse with each int at and below idx with each idx, new temp value, and new combination array
        checkCombinations(idx, newTemp, newComboArr);
        idx--;
      }
    }
  }

  // sort the array to ascending order
  candidates.sort((a, b) => a - b);
  // iterate through the candidates from right to left
  for (let i = candidates.length - 1; i >= 0; i--) {
    // invoke recursive function for each candidate with idx, 0, and empty array
    checkCombinations(i, 0, []);
  }
  // return result array
  return result;
};