// You are given an array (which will have a length of at least 3, but could be very large) containing integers.
//The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N.
//Write a method that takes the array as an argument and returns this "outlier" N.

function findOutlier(integers) {
  let answer = null;
  const hashtable = {
    even: 0,
    odd: 0
  };
  for (let num of integers) {
    if (num % 2 === 0) {

      hashtable.even += 1;

    } else {

      hashtable.odd += 1;

    }
  }
  if (hashtable.odd > hashtable.even) {
    for (let num of integers) {
      if (num % 2 === 0) {
        return num
      }
    }
  } else {
    for (let num of integers) {
      if (num % 2 === 0) {
        continue
      } else {
        return num
      }
    }
  }
}

function findOutlier2(integers) {
  // your code here
  let answer = 0;
  const evens = integers.filter(num => num % 2 === 0)
  const odds = integers.filter(num => num !== 0)
  if (evens.length = 1) {
    answer = evens[0]
  }
  if (odds.length = 1) {
    answer = odds[0]
  }
  return answer
}



console.log(findOutlier([0, 5, 3]))
console.log(findOutlier([0, 2, 3]))