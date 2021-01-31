const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  function count(n) {
    if(n === 1) return 1;
    return count(n-1) * 2 + 1;
  }
  const turns = count(disksNumber);
  return {turns,seconds: Math.floor(turns/(turnsSpeed/3600))}
};
