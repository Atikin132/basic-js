const { NotImplementedError } = require("../lib");

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  const usedNames = {};
  const res = [];
  names.forEach((x) => {
    if (usedNames[x]) {
      let index = usedNames[x];
      const newName = `${x}(${index})`;
      usedNames[x] = index + 1;
      usedNames[newName] = 1;
      res.push(newName);
    } else {
      usedNames[x] = 1;
      res.push(x);
    }
  });
  return res;
}

module.exports = {
  renameFiles,
};
