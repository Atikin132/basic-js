const { NotImplementedError } = require("../lib");

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  let sum = n;
  let isExit = false;
  while (!isExit) {
    const numArr = sum
      .toString()
      .split("")
      .map((x) => {
        return Number(x);
      });
    sum = numArr.reduce(
      (accumulator, currentValue) => accumulator + currentValue
    );
    if (sum < 10) {
      isExit = true;
    }
  }
  return sum;
}

module.exports = {
  getSumOfDigits,
};
