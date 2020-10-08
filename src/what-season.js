const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
//  throw new CustomError('Not implemented');

if (!date) {
  return 'Unable to determine the time of year!'; // если не дата
};

if (!Date.prototype.toString.call(date)) { //если скрытая не дата
  throw new Error();
};

let month = date.getMonth();
let theMonth; // тот самый искомый месяц в строковом виде
switch (month) {
  case 2:
  case 3:
  case 4:
    theMonth = 'spring';
    break;
  case 5:
  case 6:
  case 7: 
    theMonth = 'summer';
    break;
  case 8:
  case 9:
   case 10:
    theMonth = 'autumn';
    break;
  default: theMonth = 'winter';
    break;
};
return theMonth;
};
