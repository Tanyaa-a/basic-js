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
function deleteDigit(num) {
  const newNum = num.toString(); 
  let maxNum = 0;

  for (let i = 0; i < newNum.length; i++) {
    const currentNum = parseInt(newNum.slice(0, i) + newNum.slice(i + 1));
    maxNum = Math.max(maxNum, currentNum);
  }

  return maxNum;
}

module.exports = {
  deleteDigit
};
