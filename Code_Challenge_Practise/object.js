const input = {
  1: 1,
  2: '2',
  3: {
    4: 'hello',
    5: {
      6: 18,
    },
  },
};

function getValues(input) {
  const testArray = Object.entries(input);
  let object = {};
  testArray.forEach((test) => {
    if (typeof test[1] === 'string' || typeof test[1] === 'number') {
      object[test[0]] = test[1];
    }
    if (typeof test[1] === 'object') {
      object = { ...object };
      getValues(test[1]);
    }
  });
  console.log('this console', object);
  return object;
}

function flatten(obj) {
  let stack = [obj];
  let result = {};
  while (stack.length !== 0) {
    let currentObj = stack.pop();
    let arr = Object.keys(currentObj);
    for (let i = 0; i < arr.length; i++) {
      let key = arr[i];
      let value = currentObj[arr[i]];
      if (typeof value === 'string' || typeof value === 'number') {
        result[key] = value;
      } else {
        stack.push(value);
      }
    }
  }
  return result;
}

getValues(input);
