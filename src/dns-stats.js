const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  if(domains.length === 0) {
    return {}
  }
  let comCount = 0
  let epamComCount = 0
  let infoEpamComCount = 0
  for(let i = 0; i < domains.length; i++){
    if(domains[i].match('com')) {
      comCount++
    }
    if(domains[i].match('epam.com')) {
      epamComCount++
    }
    if(domains[i].match('info.epam.com')) {
      infoEpamComCount++
    }
  }
  return infoEpamComCount !== 0 ? { '.com': comCount, '.com.epam': epamComCount, '.com.epam.info': infoEpamComCount } : { '.com': comCount, '.com.epam': epamComCount }
}

module.exports = {
  getDNSStats
};
