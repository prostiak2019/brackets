module.exports = function check(str, bracketsConfig) {

    // create the array of stringified config items
    const config = bracketsConfig.map(item => item.join(''));
  
    // loop input string to remove pairs of opening/closing items from 'config'
    while (str.length) {
  
      // add flag to control exit from the loop
      let extend = false;
  
      // loop 'config' items to remove them from the input string
      for (let item of config) {
        if (str.includes(item)) {
          str = str.replace(item, '');
            
          // return true if the string has been cleaned
          if (!str.length) return true;
  
          // set the flag to true if at least one item from the 'config' has been found in the string
          extend = true;
        }
      }
  
      // return false if the 'extend' flag is false
      if (!extend) return false;
    }
  }
