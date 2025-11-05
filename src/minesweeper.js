const { NotImplementedError } = require("../lib");

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const resArr = [];
  for (let i = 0; i < matrix.length; i += 1) {
    resArr.push(new Array(3).fill(0));
  }
  matrix.forEach((x, indexRow) => {
    x.forEach((y, indexColumn) => {
      if (matrix[indexRow][indexColumn]) {
        for (let difRow = -1; difRow <= 1; difRow++) {
          for (let difColumn = -1; difColumn <= 1; difColumn++) {
            if (difRow === 0 && difColumn === 0) continue;
            if (
              indexRow + difRow >= 0 &&
              indexRow + difRow < matrix.length &&
              indexColumn + difColumn >= 0 &&
              indexColumn + difColumn < matrix[0].length
            ) {
              resArr[indexRow + difRow][indexColumn + difColumn]++;
            }
          }
        }
      }
    });
  });
  return resArr;
}

module.exports = {
  minesweeper,
};
