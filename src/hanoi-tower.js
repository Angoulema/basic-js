const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
//  throw new CustomError('Not implemented');
let turns = 2 ** disksNumber - 1; // кол-во ходов
let hours = turns / turnsSpeed; // время в часах
  let seconds = Math.floor(hours * 3600); // время в секундах
let result = {
  'turns': turns,
  'seconds': seconds
};
return result;

};
