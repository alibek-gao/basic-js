const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  return matrix.reduce((count, row) => count + row.filter((val) => val === '^^').length,0);
};
