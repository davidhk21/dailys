/*
This problem was given during a practice test for Asana coding assignment

You are given an array of arrays a. Your task is to group the arrays a[i] by their mean values, so that arrays with equal mean values are in the same group, and arrays with different mean values are in different groups.

Each group should contain a set of indices (i, j, etc.) such that the corresponding arrays (a[i], a[j], etc.) all have the same mean. Return the set of groups as an array of arrays, where the indices within each group are sorted in ascending order, and the groups are sorted in ascending order of their minimum element.

Example:
a = [[3, 3, 4, 2],
     [4, 4],
     [4, 0, 3, 3],
     [2, 3],
     [3, 3, 3]]
Output:
meanGroups(a) = [[0, 4],
                 [1],
                 [2, 3]]
*/

var meanGroups = (a) => {
  let result = [];
  let means = [];

  for (let i = 0; i < a.length; i++) {
    let sum = 0;
    for (let j = 0; j < a[i].length; j++) {
      sum += a[i][j];
    }
    means.push(sum / a[i].length);
  }

  for (let i = 0; i < means.length; i++) {
    if (means[i] === '#') continue;
    let val = means[i];
    let subArr = [];
    for (let j = 0; j < means.length; j++) {
      if (means[j] === val) {
        subArr.push(j);
        means[j] = '#'
      }
    }
    result.push(subArr);
  }

  return result;
}

let exampleInput = [[3, 3, 4, 2], [4, 4], [4, 0, 3, 3], [2, 3], [3, 3, 3]];
console.log(meanGroups(exampleInput)); // [[0, 4], [1], [2, 3]];