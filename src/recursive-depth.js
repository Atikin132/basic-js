const { NotImplementedError } = require("../lib");

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates depth of nested array
 *
 * @example
 *
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    if (!Array.isArray(arr)) return 0;
    let res = 1;
    arr.forEach((x) => {
      if (Array.isArray(x)) {
        const insideCount = this.calculateDepth(x) + 1;
        if (insideCount > res) res = insideCount;
      }
    });
    return res;
  }
}

module.exports = {
  depthCalculator: new DepthCalculator(),
};
