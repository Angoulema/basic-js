const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
//  throw new CustomError('Not implemented');
// тры тэсты падаюць
if (Array.isArray(arr) && arr.length) {
  
     let arrTransformed = [];
     for (let i = 0; i < arr.length; i++) {
       if (arr[i] === "--discard-next") {
         if (arr[i + 1]) {
          i++;
         }
         
         
       } else if (arr[i] === "--discard-prev") {
         if (arr[i - 1] === arrTransformed[i - 1]) {
           arrTransformed = arrTransformed.slice(0, i - 1);
           
         }
         
       } else if (arr[i] === "--double-next") {
        if (arr[i + 1]) {
          arrTransformed = arrTransformed.concat(arr[i + 1]);
        }
        
       }
       else if (arr[i] === "--double-prev") {
         if (arr[i - 1] === arrTransformed[i - 1]) {
           arrTransformed = arrTransformed.concat(arr[i - 1]);
          
         }
         
       } else {
         arrTransformed = arrTransformed.concat(arr[i]);
       };
       
     };
 return arrTransformed;
 
 } else if (Array.isArray(arr) && arr.length === 0) {
  let arrTransformed = [];
  return arrTransformed;
 } else {
    throw new Error();
   };
   
};
