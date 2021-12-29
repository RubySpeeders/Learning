const tools = [
  'hammer',
  'saw',
  'brush',
  'screwdriver',
  'ruler',
  'sandpaper',
  'wrench',
];
const current = 'saw';
const target = 'wrench';

function getTools(tools, current, target) {
  const currentIndex = tools.indexOf(current);
  const targetIndex = tools.indexOf(target);
  let counterRight = 0;
  let counterLeft = 0;
  for (let i = currentIndex; i < tools.length; i++) {
    if (tools[i] !== target) {
      counterRight++;
    }
  }

  return counterRight > counterLeft ? counterLeft : counterRight;
}

// console.log(getTools(tools, current, target));

function reverse(x) {
  //change number to string in order to change into array
  const stringNumber = x.toString();
  //create array to reverse
  const array = stringNumber.split('');
  //reverse array, join it back together, and make it a number;
  const reverseNumber = Number(array.reverse().join(''));
  //if reverseNumber = x, return true, else return false
  return reverseNumber === x ? true : false;
}

// console.log(reverse(121));
// console.log(reverse(123));

const strs = ['dog', 'racecar', 'car'];
function prefix(array) {
  let firstLetter = '';
  let prefixString = '';
  for (let i = 0; i < array.length; i++) {
    firstLetter = array[0].charAt(0);
    //need to increment .charAt somehow? and check each of those
    if (checkLetters(firstLetter, array[i].charAt(0))) {
      prefixString = firstLetter;
    } else {
      prefixString = '';
    }
  }
  return prefixString;
}

//helper function to check if letters check
function checkLetters(firstLetter, checkLetter) {
  return checkLetter === firstLetter ? true : false;
}
console.log(prefix(strs));
