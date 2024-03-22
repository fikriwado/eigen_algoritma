const reverseAlphabet = (str) => {
  const alphabets = str.match(/[a-zA-Z]/g).join('');
  const numbers = str.match(/\d/g).join('');
  const reverseAlphabet = alphabets.split('').reverse().join('').concat(numbers)
  return reverseAlphabet
}

const reverseText = reverseAlphabet("NEGIE1")
console.log(reverseText)