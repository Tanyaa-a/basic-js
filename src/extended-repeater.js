const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  const defaultOptions = {
    repeatTimes: 1,
    separator: '+',
    addition: '',
    additionRepeatTimes: 1,
    additionSeparator: '|',
  };

  const opts = Object.assign({}, defaultOptions, options);

  let repeatedAddition = '';
  for (let i = 0; i < opts.additionRepeatTimes; i++) {
    if (i === 0) {
      repeatedAddition += opts.addition;
    } else {
      repeatedAddition += opts.additionSeparator + opts.addition;
    }
  }

  let result = '';
  for (let i = 0; i < opts.repeatTimes; i++) {
    if (i === 0) {
      result += str + repeatedAddition;
    } else {
      result += opts.separator + (str + repeatedAddition);
    }
  }

  return result;
}

module.exports = {
  repeater
};
