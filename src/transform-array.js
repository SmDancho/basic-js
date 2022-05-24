const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr ) {
  if (!Array.isArray(arr)) throw new Error('\'arr\' parameter must be an instance of the Array!');
  let copyArr = Array.from(arr);
  
    if (copyArr[i] === '--double-next' ) {
      const elemIndex = copyArr[i].indexOf('--double-next')
      const getNextIndex = elemIndex + 1
      return copyArr[i].replace(elemIndex,getNextIndex)    
    }else if (copyArr[i] === '--discard-next' ) {
      const elemIndex = copyArr[i].indexOf('--discard-next')
      const getNextIndex = elemIndex + 1
      return copyArr[i].replace(getNextIndex, '')    
    }
    else if (copyArr[i] === '--double-prev' ) {
      const elemIndex = copyArr[i].indexOf('--double-prev')
      const getPrevIndex = elemIndex - 1
      return copyArr[i].replace(elemIndex,getPrevIndex)    
    }else if (copyArr[i] === '--discard-prev' ) {
      const elemIndex = copyArr[i].indexOf('--discard-prev')
      const getPrevIndex = elemIndex - 1
      return copyArr[i].replace(elemIndex,getPrevIndex) 
    }
    return copyArr[i]
  }
 
}

module.exports = {
  transform
};
