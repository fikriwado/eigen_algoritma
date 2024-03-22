function countWords(input, query) {
  let countArray = [];
  
  for (let word of query) {
      let count = input.filter(item => item === word).length;
      countArray.push(count);
  }

  return countArray;
}

const INPUT = ['xc', 'dz', 'bbb', 'dz'];
const QUERY = ['bbb', 'ac', 'dz'];

const result = countWords(INPUT, QUERY);
console.log(result);
