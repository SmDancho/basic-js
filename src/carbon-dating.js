const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;
const log = 0.693 / HALF_LIFE_PERIOD

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  if( sampleActivity <= 0  || isNaN(sampleActivity) || typeof sampleActivity !== "string" || sampleActivity.length === 0 ) {return false}

  age = Math.ceil(Math.log(MODERN_ACTIVITY/sampleActivity)/(log))
  

  return age > 0 ? age : false
  
   
}

module.exports = {
  dateSample 
};
