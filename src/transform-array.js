const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if(!(arr instanceof Array)) {
    throw new Error("'arr' parameter must be an instance of the Array!")
  };

  const result = [];

  for(let i = 0; i < arr.length; i++){
    if(arr[i] === '--discard-next'){
      i++;
    } else if(arr[i] === '--double-prev'){
      arr[i - 2] !== '--discard-next' && result.push(arr[i - 1]);
    } else if(arr[i] === '--double-next'){
      result.push(arr[i + 1]);
    } else if(arr[i] === '--discard-prev'){
      arr[i - 2] !== '--discard-next' && result.pop();
    } else {
      result.push(arr[i])
    }
  }

  return result.filter(a => a !== undefined);
}

module.exports = {
  transform
};
