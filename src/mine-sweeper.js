const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  let arrMatrix = [];
  for (let i = 0; i < matrix.length; i++) {
    let arrRow = [];
    for (let j = 0; j < matrix[0].length; j++) {
      if (matrix[i][j] === true) {
        arrRow.push(0);
      } else {
        if (matrix[i][j - 1] || matrix[i][j + 1]) {
          arrRow.push(1)
        } else {
          arrRow.push(0);
        }
      }
    };
    arrMatrix.push(arrRow)
  };
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (matrix[j] !== undefined) {
        if (matrix[j][i - 1] === true || matrix[j][i + 1] === true) {
          arrMatrix[i][j] += 1;
        }
      }
    }
  }
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (matrix[i - 1] !== undefined) {
        if (matrix[i - 1][j - 1]) {
          arrMatrix[i][j] += 1;
        }
      }
      if (matrix[i - 1] !== undefined) {
        if (matrix[i - 1][j + 1]) {
          arrMatrix[i][j] += 1;
        }
      }
      if (matrix[i + 1] !== undefined) {
        if (matrix[i + 1][j - 1]) {
          arrMatrix[i][j] += 1;
        }
      }
      if (matrix[i + 1] !== undefined) {
        if (matrix[i + 1][j + 1]) {
          arrMatrix[i][j] += 1;
        }
      }
    }
  }
  return arrMatrix
}
module.exports = {
  minesweeper
};
