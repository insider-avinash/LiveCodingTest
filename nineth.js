const array = [21,23,34,37,68,25];
const arrayCopy = [...array];

const secondLargestNum = arrayCopy.sort()[arrayCopy.length - 2]
console.log(secondLargestNum);
