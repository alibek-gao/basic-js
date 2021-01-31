const CustomError = require("../extensions/custom-error");

const chainMaker = {
  values: [],
  renderChain() {
    return this.values.map(val => '( ' + val + ' )').join('~~');
  },
  getLength() {
    return this.values.length;
  },
  addLink(value) {
    if(typeof value === "undefined") value = '';
    this.values.push(value);
    return this;
  },
  removeLink(position) {
    if(!Number.isInteger(position) || position > this.values.length || position < 1) this.throwError();
    this.values.splice(position-1,1);
    return this;
  },
  reverseChain() {
    this.values.reverse();
    return this;
  },
  finishChain() {
    const result = this.renderChain();
    this.values = [];
    return result;
  },
  throwError() {
    this.values = [];
    throw new Error('Not implemented');
  }
};

module.exports = chainMaker;
