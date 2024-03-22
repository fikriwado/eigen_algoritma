const sumDiagonalMatrix = (matrix) => {
  const n = matrix.length
  let leftToRight = 0
  let rightToLeft = 0

  let leftToRightText = matrix.map((row, i) => {
    leftToRight += row[i];
    return row[i] + (i < (n - 1) ? ' + ' : ' = ');
  }).join('');

  let rightToLeftText = matrix.map((row, i) => {
    rightToLeft += row[n - 1 - i];
    return row[n - 1 - i] + (i < (n - 1) ? ' + ' : ' = ');
  }).join('');

  return {
    leftToRightText,
    rightToLeftText,
    leftToRight,
    rightToLeft,
    result: Math.abs(leftToRight - rightToLeft)
  }
}

const matrix = [[1, 2, 0], [4, 5, 6], [7, 8, 9]]

const {
  leftToRightText,
  rightToLeftText,
  leftToRight,
  rightToLeft,
  result
} = sumDiagonalMatrix(matrix)

console.log(`diagonal pertama = ${leftToRightText} ${leftToRight}`)
console.log(`diagonal kedua = ${rightToLeftText} ${rightToLeft}`)
console.log(`maka hasilnya adalah ${leftToRight} - ${rightToLeft} = ${result}`)