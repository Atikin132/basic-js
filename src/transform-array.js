const { NotImplementedError } = require("../lib");

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
  if (!Array.isArray(arr)) {
    return "'arr' parameter must be an instance of the Array!";
  }
  const copyArr = [...arr];

  const commands = [
    "--discard-next",
    "--discard-prev",
    "--double-next",
    "--double-prev",
  ];
  for (let i = 0; i < arr.length; i += 1) {
    if (commands.includes(arr[i])) {
      if (
        (i === 0 &&
          (arr[i] === "--discard-prev" || arr[i] === "--double-prev")) ||
        (i === arr.length - 1 &&
          (arr[i] === "--discard-next" || arr[i] === "--double-next"))
      ) {
        copyArr.splice(i, 1);
        return copyArr;
      }
      switch (arr[i]) {
        case "--discard-next":
          if (
            arr[i + 2] === "--discard-prev" ||
            arr[i + 2] === "--double-prev"
          ) {
            copyArr.splice(i, 3);
            return copyArr;
          }
          copyArr.splice(i, 2);
          break;
        case "--discard-prev":
          copyArr.splice(i - 1, 2);
          break;
        case "--double-next":
          copyArr[i] = arr[i + 1];
          break;
        case "--double-prev":
          copyArr[i] = arr[i - 1];
          break;
        default:
          break;
      }
    }
  }
  return copyArr;
}

module.exports = {
  transform,
};
