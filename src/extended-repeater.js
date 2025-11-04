const { NotImplementedError } = require("../lib");

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
  str = `${str}`;
  const separator =
    `${options.separator}` !== "undefined" ? `${options.separator}` : "+";
  const addition =
    `${options.addition}` !== "undefined" ? `${options.addition}` : "";
  const additionRepeatTimes = options.additionRepeatTimes
    ? options.additionRepeatTimes
    : 1;
  const additionSeparator =
    `${options.additionSeparator}` !== "undefined"
      ? `${options.additionSeparator}`
      : additionRepeatTimes > 1
      ? "|"
      : "";
  let res = `${str}${`${addition}${additionSeparator}`.repeat(
    additionRepeatTimes - 1
  )}${addition}`;
  for (let i = 1; i < options.repeatTimes; i += 1) {
    res = `${res}${separator}${str}${`${addition}${additionSeparator}`.repeat(
      additionRepeatTimes - 1
    )}${addition}`;
  }
  return res;
}

module.exports = {
  repeater,
};
