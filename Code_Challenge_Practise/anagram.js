function findAnagram(stringOne, stringTwo) {
  const arrayOne = stringOne.split('');
  const arrayTwo = stringTwo.split('');

  if (arrayOne.length !== arrayTwo.length) {
    return false;
  } else {
    for (let i = 0; i < arrayOne.length; i++) {
      if (arrayTwo.includes(arrayOne[i])) {
        return true;
      } else {
        return false;
      }
    }
  }
}

// console.log(findAnagram('racecat', 'banana'));

let array = [1, 4, 3, 2];
function runSum(array) {
  let runningSum = [];
  let n = 0;
  for (let i = 0; i < array.length; i++) {
    n = n + array[i];
    runningSum.push(n);
  }

  return runningSum;
}

// console.log(runSum(array));

function solution(array) {
  const ordered = array.sort((a, b) => (a > b ? 1 : -1));
  console.log(ordered);
  let count = 1;

  for (let i = 0; i < ordered.length; i++) {
    if (ordered[i] < 0) {
      continue;
    }
    if (ordered[i] === ordered[i + 1] || ordered[i] + 1 === ordered[i + 1]) {
      continue;
    } else {
      count = ordered[i] + 1;
    }
  }
  return count;
}

let newArray = [1, 2, 5];
// console.log(solution(newArray));

const countArray = [-2, -1, -1, 0, 1];
function countUniqueValues(array) {
  //create hashtable
  let hashtable = {};
  //populate hashtable
  for (num of array) {
    if (num in hashtable) {
      hashtable[num] += 1;
    } else {
      hashtable[num] = 1;
    }
  }
  console.log(hashtable);
  return Object.keys(hashtable).length;
}

// console.log(countUniqueValues(countArray));

function countUniqueValues(array) {
  return new Set(array).size;
}

function maxChars(text) {
  const hashtable = {};
  for (i = 0; i < text.length; i++) {
    if (hashtable[text.charAt(i)]) {
      hashtable[text.charAt(i)] += 1;
    } else {
      hashtable[text.charAt(i)] = 1;
    }
  }
  console.log(hashtable);
}

// maxChars('abbbaacc');

const tickets = [8, 5, 4, 8, 4];
function maxTickets(tickets) {
  let bestTickets = 1;
  let currentTickets = 1;
  const sortedTickets = tickets.sort((a, b) => (a > b ? 1 : -1));
  for (let i = 1; i < sortedTickets.length - 1; i++) {
    if (sortedTickets[i] - sortedTickets[i - 1] <= 1) {
      currentTickets++;
      if (currentTickets > bestTickets) {
        bestTickets = currentTickets;
      }
    } else {
      currentTickets = 1;
    }
  }
  return bestTickets;
}

// console.log(maxTickets(tickets));

function solution(S) {
  // write your code in JavaScript (Node.js 8.9.4)
  //create array with letters in string:
  let array = S.split('');

  // if (array[0] === array[0].toLowerCase()) {
  //   for (let i = 1; i < array.length; i++) {
  //     if (array[i] !== array[0].toUpperCase()) {
  //       console.log('upper');
  //       return -1;
  //     }
  //   }
  // }

  // if (array[0] === array[0].toUpperCase()) {
  //   for (let i = 1; i < array.length; i++) {
  //     if (array[i] !== array[0].toLowerCase()) {
  //       console.log('lower');
  //     }
  //   }
  //   return -1;
  // }

  // array.forEach((char) => {
  //   // search for a match
  //   const regex = new RegExp(char, 'g');
  //   // console.log(array.join(''));
  //   return array.join('').match(regex);
  // });
  let i = 0;
}

console.log(solution('AA'));

function addFive(N) {
  let answer = 0;

  const numberArray = N.toString().split('');

  if (N >= 0) {
    for (let i = 0; i <= numberArray.length; i++) {
      if (i === numberArray.length) {
        numberArray.push('5');
        answer = Number(numberArray.join(''));
        return answer;
      }
      if (Number(numberArray[i]) < 5) {
        numberArray.splice(i, 0, '5');
        answer = Number(numberArray.join(''));
        return answer;
      }
    }
  } else {
    numberArray.shift();
    for (let i = 0; i < numberArray.length + 1; i++) {
      if (i === numberArray.length) {
        numberArray.push('5');
        answer = Number(numberArray.join(''));
        return answer * -1;
      }
      if (Number(numberArray[i] > 5)) {
        numberArray.splice(i, 0, '5');
        answer = Number(numberArray.join(''));
        return answer * -1;
      }
    }
  }
}

let wordlist = ['APPLE', 'PLEAS', 'PLEASE'];
let keypads = ['AELWXYZ', 'AELPXYZ', 'AELPSXY', 'SAELPRT', 'XAEBKSY'];
function keyPad(wordlist, keypads) {
  // answer array to return at end of function
  const answer = [];

  // first level, loop through and get each string of keypads array
  for (let i = 0; i < keypads.length; i++) {

    const keyHash = {};

    // loop through keypads at each position to populate keyHash
    for (let j = 0; j < keypads[i].length; j++) {
      keyHash[keypads[i][j]] = 1;
    }
    
    let counter = wordlist.length;
    // loop through wordlist to check strings against keyHash
    for (let j = 0; j < wordlist.length; j++) {
      if () {
        console.log(wordlist[j], 'they are all there!');
      }

      // looking for first char of keypad string in the string from wordlist
      if (!wordlist[j].includes(keypads[i].charAt(0))) {
        // counter--;
      }
    }
    answer.push(counter);
  }
  console.log(answer);
}

keyPad(wordlist, keypads);
