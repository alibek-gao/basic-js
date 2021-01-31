const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(reverse = true) {
    this.direct = reverse;
  }
  encrypt(msg,key) {
    if(!msg && !key) throw new Error();
    const cipher = key.toUpperCase().split('').map(v => {
      var code = v.charCodeAt(0);
      if (code > 64 && code < 91) return (code - 65);
      else return 0;
    });
    let i = 0;
    const arr = msg.toUpperCase().split('').map((v) => {
      if(v.charCodeAt(0) > 64 && v.charCodeAt(0) < 91) {
        let result = v.charCodeAt(0) + cipher[i % cipher.length];
        result = result >= 91 ? 65 + result - 91 : result;
        i++;
        return String.fromCharCode(result);
      } else {
        return v;
      }
    });
    if(this.direct) {
      return arr.join('');
    } else {
      return arr.reverse().join('');
    }

  }
  decrypt(msg,key) {
    if(!msg && !key) throw new Error();
    const cipher = key.toUpperCase().split('').map(v => {
      var code = v.charCodeAt(0);
      if (code > 64 && code < 91) return (code - 64);
      else return 0;
    });
    let i = 0;
    const arr = msg.toUpperCase().split('').map((v) => {
      if(v.charCodeAt(0) > 64 && v.charCodeAt(0) < 91) {
        let result = v.charCodeAt(0) - cipher[i % cipher.length] + 1;
        result = result > 64 ? result : 90 - (64 - result);
        i++;
        return String.fromCharCode(result);
      } else {
        return v;
      }
    });
    if(this.direct) {
      return arr.join('');
    } else {
      return arr.reverse().join('');
    }
  }
}

module.exports = VigenereCipheringMachine;
