/*
Given a string, write a function that determines if it is a Palindrome
"Racecar" IS a palindrome; upper and lower case doesn't matter
"@#)(   m @ om   #@" IS a palindrome; symbols/whitespace is to be ignored
"geeks" is NOT a palindrome
*/

const isLetter = (str) => {
  return str.length === 1 && str.match(/[a-z]/i);
}

const palindrome = (string) => {
	let start = 0;
  let end = string.length - 1;
  while (start < end) {
  	while (!isLetter(string[start]) && start < end) {
    	start++;
    }
    while (!isLetter(string[end]) && start < end) {
    	end--;
    }
    if (string[start].toLowerCase() !== string[end].toLowerCase()) return false;
    start++;
    end--;
  }

  return true;
}

// const palindrome = (string) => {
// 	let newString = '';
//   for (let i = 0; i < string.length; i++) {
//   	if (isLetter(string[i])) newString += string[i].toLowerCase();
//   }

//   if (newString.length === 0) return true;

//   let start = 0;
//   let end = newString.length - 1;

//   while (start < end) {
//   	if (newString[start] !== newString[end]) return false;
//     start++;
//     end--;
//   }

//   return true;
// }

module.exports = palindrome;