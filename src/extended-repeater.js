const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
//  throw new CustomError('Not implemented');
  let separator = String(options.separator);
if (separator == "" || separator == "undefined") {
  separator = '+';
 };

 let separatorAdd = String(options.additionSeparator)
 if (separatorAdd == "" || separatorAdd == "undefined") {
  separatorAdd = '|';
 };

 let strAdded = ""; // доп. строка
 let addition = String(options.addition);
 if (addition !== "" && addition !== "undefined") { //если его передали
  strAdded = addition; // если кол-во повторов - 1
  for (let i = 2; i <= options.additionRepeatTimes; i++) {
    strAdded = strAdded + separatorAdd + String(options.addition);
  };
 };

 let strPlus = String(str) + strAdded; // повторяющаяся часть
 let strNew = String(str) + strAdded; // если кол-во повторов - 1
 for (let i = 2; i <= options.repeatTimes; i++) { // если кол-во повторов не задано, итоговая строка равна поданной
  strNew = strNew + separator + strPlus; 
 };


 return strNew;


};
  
// options[repeatTimes]
// options[separator]
// options[addition]
// options[additionRepeatTimes]
// options[additionSeparator]