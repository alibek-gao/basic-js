const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    const depths =  arr.filter(val => Array.isArray(val)).map(val => this.calculateDepth(val,1));
    return depths.length ? Math.max(...depths) + 1 : 1;
  }
};