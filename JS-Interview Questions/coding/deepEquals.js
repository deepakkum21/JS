const deepEquals = (valueOne, valueTwo) => {
  // for primitive values
  if (typeof valueOne !== 'object' && typeof valueTwo !== 'object') {
    const isValueOneNaN = isNaN(valueOne) && typeof valueOne === 'number'; // number in string NaN treats as no and if not able to convert to no then its NaN
    const isValueTwoNaN = isNaN(valueTwo) && typeof valueTwo === 'number';

    if (isValueOneNaN && isValueTwoNaN) return true;

    return valueOne === valueTwo;
  }

  // if type of both are different
  if (typeof valueOne !== typeof valueTwo) return false;

  // check for null
  if (valueOne === null && valueTwo === null) return true;
  if (valueOne === null || valueTwo === null) return false;

  if (valueOne === valueTwo) {
    console.log('----------');
    return true;
  }

  // if both are of type Array
  if (Array.isArray(valueOne) && Array.isArray(valueTwo)) {
    if (valueOne.length !== valueTwo.length) return false;

    for (let i = 0; i <= valueOne.length; i++) {
      if (!deepEquals(valueOne[i], valueTwo[i])) return false;
    }

    return true; // if all value in array is checked
  }

  // if only one is Array and other is not of Array type
  if (Array.isArray(valueOne) || Array.isArray(valueTwo)) return false;

  // if both are of type Objects
  const valueOneKeys = Object.keys(valueOne);
  const valueTwoKeys = Object.keys(valueTwo);

  if (valueOneKeys.length !== valueTwoKeys.length) return false;

  // if keys of both are not same
  if (!deepEquals(valueOneKeys, valueTwoKeys)) return false;

  for (let i = 0; i <= valueOneKeys.length; i++) {
    const key = valueOneKeys[i];

    const valueOneValue = valueOne[key];
    const valueTwoValue = valueTwo[key];

    if (!deepEquals(valueOneValue, valueTwoValue)) return false;
  }
};

console.log(deepEquals(['a', 'b'], ['a', 'c']));
const array = new Array(1000).fill('a');
console.log(deepEquals(array, array));
console.log(array === array);
