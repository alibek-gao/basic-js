const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if(typeof date === 'undefined') return 'Unable to determine the time of year!';
  if(!date instanceof Date) throw new CustomError('Not implemented');
  if(isNaN(date.getTime())) throw new CustomError('Not implemented');
  const month = date.getMonth();
  if(month === 11 || month < 2) return 'winter';
  else if(month < 5) return 'spring';
  else if(month < 8) return 'summer';
  else if(month < 11) return 'autumn';
};
