const longest = (sentence) => {
  return sentence.split(' ').reduce(
    (acc, curr) => acc = curr.length > acc.length ? curr : acc,
    '');
  }
  
const sentence = "Saya sangat senang mengerjakan soal algoritma"
const longestWord = longest(sentence)
console.log(longestWord, `: ${longestWord.length} character`)