const { NotImplementedError } = require("../lib");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

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
  if (typeof sampleActivity !== "string") {
    return false;
  }
  const sampleActivityNum = Number(sampleActivity);
  if (!sampleActivityNum) {
    return false;
  }
  const res = Math.ceil(
    (Math.log(15 / sampleActivityNum) * 5730) / Math.log(2)
  );
  return res && res > 0 ? res : false;
}

module.exports = {
  dateSample,
};
