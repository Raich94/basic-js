const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  let arr = email.split('')
  for(let i = arr.length - 1; i > 0; i--){
    if(arr[i] === '@') {
      return arr.slice(arr.lastIndexOf(arr[i]) + 1).join('')
    }
  }
}

module.exports = {
  getEmailDomain
};
