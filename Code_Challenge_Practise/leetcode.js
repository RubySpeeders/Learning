// const candies = [12, 1, 12];
// const extraCandies = 10;

// function kidsWithCandies(candies, extraCandies) {
//   const mostCandies = Math.max(...candies);
//   console.log(mostCandies);
//   const booleanArray = candies.map((candy) => {
//     if (candy + extraCandies >= mostCandies) {
//       return true;
//     } else {
//       return false;
//     }
//   });
//   console.log(booleanArray);
// }

// kidsWithCandies(candies, extraCandies);

const numbers = [3, 2, 4];
const target = 6;
function twoSum(numbers, target) {
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] + numbers[i + 1] === target) {
      return [i, i + 1];
    }
  }
}

// console.log(twoSum(numbers, target));

function hashTwoSum(numbers, target) {
  const counter = {};
  //build hash table
  for (let i = 0; i < numbers.length; i++) {
    counter[numbers[i]] = i;
  }
  console.log(counter);

  for (let i = 0; i < numbers.length; i++) {
    //variable to target number to find
    const numberToFind = target - numbers[i];
    //if number to find is in the hashtable and is not itself, then return the indices for the two numbers
    if (counter[numberToFind] !== undefined && counter[numberToFind] !== i) {
      return [i, counter[numberToFind]];
    }
  }
}

console.log(hashTwoSum(numbers, target));

function reverse(x) {
  let multiplier = Math.sign(x);
  let newNumber;

  x = x * multiplier;
  newNumber = Number(x.toString().split('').reverse().join(''));
  newNumber = newNumber * multiplier;

  return newNumber > Math.pow(-2, 31) && newNumber < Math.pow(2, 31) - 1
    ? newNumber
    : 0;
}

console.log(reverse(123));
