/*
Quick Sort is an efficient, recursive divide-and-conquer approach to sorting an array. In this method, a pivot value is chosen in the original array. The array is then partitioned into two subarrays of values less than and greater than the pivot value. We then combine the result of recursively calling the quick sort algorithm on both sub-arrays. This continues until the base case of an empty or single-item array is reached, which we return. The unwinding of the recursive calls returns us the sorted array.
*/

// Time:
  // Worse: O(n^2)
  // Best: O(n log n)
  // Average: O(n log n)
// Space: O(log n)
const quickSort = (array) => {
  if (array.length <= 1) return array;

  let pivot = array.pop();
  let left = [], right = [];

  for (num of array) {
    num < pivot ? left.push(num) : right.push(num);
  }

  return [...quickSort(left), pivot, ...quickSort(right)];
}