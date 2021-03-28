const sumSubset = (list, sum) => {
  list.sort((a, b) => a - b);

  let result = false;
  const checkSubsets = (curr, idx) => {
    if (curr === sum) {
      result = true;
      return;
    }
    if (curr > sum) return;
    for (let i = idx - 1; i >= 0; i--) {
      checkSubsets(curr + list[i], i);
      if (result) return;
    }
  }

  checkSubsets(0, list.length);
  return result;
}

console.log(sumSubset([1, 2, 3, 5, 10, 25], 34)); // true
console.log(sumSubset([1, 3, 10, 24, 43], 39)); // false