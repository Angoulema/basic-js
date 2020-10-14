const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  throw new CustomError('Not implemented');
  // remove line with error and write your code here
/* if (Array.isArray(arr) && arr.length) {
let minusNext = "--discard-next";
let minusPrev = "--discard-prev";
let doubleNext = '--double-next';
let doublePrev = '--double-prev';
let indexMinusNext = arr.indexOf(minusNext);
let indexMinusPrev = arr.indexOf(minusPrev);
let indexDoubleNext = arr.indexOf(doubleNext);
let indexDoublePrev = arr.indexOf(doublePrev);
let newArr = [];



} else throw new Error();
*/
};
