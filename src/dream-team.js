const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
//  throw new CustomError('Not implemented');
  if (Array.isArray(members)) {
    let str = "";
    let arr = members;
    arr = arr.sort();
    arr.forEach(item => str = str + item[0]);
    return str.toUpperCase();
/*arr.reduce( (acc, item) =>{
      if (typeof item === 'string') {
        acc = acc + item[0];
      } else return false;
    }, "")
    return acc.toString().toUpperCase(); */
  } else return false;
};

// не работает с пробелами, не игнорирует не строки и нестандартные случаи