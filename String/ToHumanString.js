/*
Complete the toHumanString class method to convert the instance's number to a string version with commas.
*/

// BETTER SOLUTION
// Time: O(n)
// Space: O(1)
class NumberFormatter {
  constructor(num) {
    this.num = num;
  }

  toHumanString() {
    let result = '';
    let numString = this.num.toString();
    let length = numString.length;
    for (let i = 0; i < length; i++) {
      result += numString[i];
      if ((length - i - 1) % 3 === 0 && i !== length - 1) result += ',';
    }
    return result;
  }
}

// FIRST SOLUTION
// Time: O(n)
// Space: O(1)
// class NumberFormatter {
//   constructor(num) {
//     this.num = num;
//   }

//   toHumanString() {
//     let result = '';
//     let numString = this.num.toString();
//     let reversedString = numString.split('').reverse().join('');
//     for (let i = 0; i < reversedString.length; i++) {
//       if (i % 3 === 0 && i !== 0) result += ',';
//       result += reversedString[i];
//     }
//     return result.split('').reverse().join('');
//   }
// }

module.exports = NumberFormatter;