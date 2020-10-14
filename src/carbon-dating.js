const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  //  throw new CustomError('Not implemented');
  
  if (!sampleActivity || (typeof sampleActivity !== "string") || !sampleActivity.match(/^[\d+]$/g)) {
    console.log(sampleActivity, "false");
    return false;
  } else if ((+sampleActivity >= 15) || (+sampleActivity <= 0)) {
    console.log(sampleActivity, "false");
    return false;
  } else 
     {
    let k = Math.LN2 / HALF_LIFE_PERIOD;
    let t_years = Math.log(MODERN_ACTIVITY / +sampleActivity) / k;
    let t_whole = Math.ceil(t_years);
  
    console.log(t_whole);
    return t_whole;
  };
};
