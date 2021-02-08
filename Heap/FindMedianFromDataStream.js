/*
Median is the middle value in an ordered integer list. If the size of the list is even, there is no middle value. So the median is the mean of the two middle value.

For example,
[2,3,4], the median is 3

[2,3], the median is (2 + 3) / 2 = 2.5

Design a data structure that supports the following two operations:

void addNum(int num) - Add a integer number from the data stream to the data structure.
double findMedian() - Return the median of all elements so far.
*/

/**
 * initialize your data structure here.
 */
var MedianFinder = function() {
  this.nums = [];
};

/**
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function(num) {
  let left = [];
  for (let i = 0; i < this.nums.length; i++) {
    if (num > this.nums[i]) {
      left.push(this.nums[i]);
    } else {
      let right = this.nums.slice(i);
      this.nums = [...left, num, ...right];
      return;
    }
  }
  this.nums = [...left, num];
  return;
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function() {
  let length = this.nums.length;
  let isOdd = length % 2 === 1;
  let mid = Math.floor(length / 2);
  if (isOdd) {
    return this.nums[mid];
  } else {
    return (this.nums[mid] + this.nums[mid - 1]) / 2;
  }
};

/**
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */