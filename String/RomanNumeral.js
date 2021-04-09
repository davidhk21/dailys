const dict = {
  'I': 1,
  'V': 5,
  'X': 10,
  'L': 50,
  'C': 100,
  'D': 500,
  'M': 1000,
};

function romanNumeralToInt(romanNumeral) {
  // create a result variable set to 0
  var result = 0;
  // iterate through the input string
  for (var i = 0; i < romanNumeral.length; i++) {
    // if current letter is less than next one
    if (dict[romanNumeral[i]] < dict[romanNumeral[i+1]]) {
      // subtract it
      result -= dict[romanNumeral[i]];
      // else
    } else {
      // add it
      result += dict[romanNumeral[i]];
    }
  }
  // return result;
  return result;
}

console.log(romanNumeralToInt('XVI')) // 16
console.log(romanNumeralToInt('DCCXCIII')) // 793
console.log(romanNumeralToInt('IX')) // 9