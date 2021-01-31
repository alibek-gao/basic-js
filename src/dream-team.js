const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if(!Array.isArray(members)) return false;
  return members.filter(val => typeof val === 'string').map(val => val.trim().charAt(0).toUpperCase()).sort().join('');
};
