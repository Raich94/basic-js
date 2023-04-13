const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let out = 0;

  for(let i = 0; i < String(n).length; i++){
    const newArr = String(n).split('')

    newArr.splice(newArr.indexOf(newArr[i]), 1)

    if(newArr.join('') > out) {
      out = newArr.join('')
    }
  }
  return Number(out)
}

module.exports = {
  deleteDigit
};
