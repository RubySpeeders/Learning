// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

function getCount(str) {
  // your code here
  // const vowels = /[aeiou]/gi;
  return str.match(/[aeiou]/gi).length
}

console.log(getCount('brcdbr'))
console.log(getCount('abrecadibr'))