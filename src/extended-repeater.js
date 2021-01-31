const CustomError = require("../extensions/custom-error");

module.exports = function repeater( str, options ) {
  str = (str === null) ? 'null' : str.toString();
  const repeatTimes = options.repeatTimes || 1,
    separator = (options.separator || '+').toString(),
    addition = (options.addition === null) ? 'null' : (options.addition === false) ? 'false' : (options.addition || '').toString(),
    additionRepeatTimes = options.additionRepeatTimes || 1,
    additionSeparator = (options.additionSeparator || '|'). toString();
  let result = '';
  for(let i = 0; i < repeatTimes; i++) {
    result += str;
    for(let j = 0; j < additionRepeatTimes; j++) {
      if(addition) result += addition + additionSeparator;
    }
    if(addition) {
      result = result.slice(0, -additionSeparator.length);
    }
    result += separator;
  }
  result = result.slice(0, -separator.length);
  return result;
};
  