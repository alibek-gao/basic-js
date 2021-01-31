const CustomError = require("../extensions/custom-error");

module.exports = function transform(arrr) {
  if(!Array.isArray(arrr)) throw new Error('Not implemented');
  const arr = [...arrr];
  for(let i = 0; i < arr.length; i++ ) {
    if(arr[i] === '--discard-next') {
      if(i < (arr.length - 1)) {
        arr.splice(i+1,1);
      }
    }
    else if(arr[i] === '--discard-prev') {
      if (i > 0) {
        arr.splice(i-1,1)
      }
    }
    else if(arr[i] === '--double-next') {
      if(i < (arr.length - 1)) {
        arr[i] = arr[i+1]
      }
    }
    else if(arr[i] === '--double-prev') {
      if(i > 0) {
        arr[i] = arr[i-1]
      }
    }
  }
  return arr.filter(val => {return val !== '--discard-next' && val !== '--discard-prev' && val !== '--double-next' && val !== '--double-prev' });
};
