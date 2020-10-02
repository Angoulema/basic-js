const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
//  throw new CustomError('Not implemented');
  let array = matrix.reduce(
    (result, item) => result.concat(item), [] // выносит все вложенные массивы на уровень выше
  );
  let sum = 0;
  array.forEach( item => {  // проверяю наличие котиков, если котики есть, считаю их
    if (item === "^^") {
      sum = sum + 1;
    };
  });
  return sum;
};
