const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
//  throw new CustomError('Not implemented');
  if (Array.isArray(members)) {
    let str = "";
    let arr = members;
    let noSpace = "";
    arr.forEach((item) => {
      if (typeof item !== 'string') {
        return false;
      } else {
        noSpace = item.trim();
        str = str + noSpace[0];
      }
      });
    let newStr = str.toUpperCase().split("").sort().join("");     
    return newStr;
     } else return false;
};

// та-дам!

