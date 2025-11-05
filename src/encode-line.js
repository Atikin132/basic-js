const { NotImplementedError } = require("../lib");

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */

function encodeLine(str) {
  let res = "";
  str.split("").forEach((x) => {
    let count = 0;
    if (x !== str[0]) {
      return;
    }
    for (let i = 0; i < str.length + 1; i += 1) {
      if (x === str[i]) {
        count += 1;
      } else {
        res = `${res}${count === 1 ? "" : count}${str[i - 1]}`;
        count = 0;
        str = str.slice(i);
        break;
      }
    }
  });
  return res;
}

module.exports = {
  encodeLine,
};
