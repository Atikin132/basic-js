const { NotImplementedError } = require("../lib");

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
  let arr = [];
  for (let i = 0; i < n.toString().length; i++) {
    const numArr = n
      .toString()
      .split("")
      .map((x) => {
        return Number(x);
      });
    numArr.splice(i, 1);
    const num = Number(numArr.join(""));
    arr.push(num);
  }
  return Math.max(...arr);
}

module.exports = {
  deleteDigit,
};
