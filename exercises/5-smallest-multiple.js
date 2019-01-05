/*
2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?
*/

module.exports = n => {
  let smallestMultiple = 1;
  const hashTable = [];
  while (true) {
    for (let number = 1; number <= n; number++) {
      hashTable[number - 1] = smallestMultiple % number === 0;
    }
    if (hashTable.every(value => value === true)) {
      return smallestMultiple;
    }
    smallestMultiple++;
  }
};
