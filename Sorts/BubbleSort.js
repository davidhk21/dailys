/*
Bubble sort is the simplest sorting algorithm that works by repeatedly swapping the adjacent elements if htey are in the wrong order.

Example:
First Pass:
( 5 1 4 2 8 ) –> ( 1 5 4 2 8 ), Here, algorithm compares the first two elements, and swaps since 5 > 1.
( 1 5 4 2 8 ) –>  ( 1 4 5 2 8 ), Swap since 5 > 4
( 1 4 5 2 8 ) –>  ( 1 4 2 5 8 ), Swap since 5 > 2
( 1 4 2 5 8 ) –> ( 1 4 2 5 8 ), Now, since these elements are already in order (8 > 5), algorithm does not swap them.
*/

const bubbleSort = (nums) => {
  let length = nums.length;
  while (length > 0) {
    for (let i = 0; i < length; i++) {
      if (nums[i + 1] < nums[i]) {
        [nums[i], nums[i + 1]] = [nums[i + 1], nums[i]];
      }
    }
    length--;
  }
  return nums;
}