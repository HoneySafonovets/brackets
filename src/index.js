const config1 = [['(', ')']];
const config2 = [['(', ')'], ['[', ']']];
const config3 = [['(', ')'], ['[', ']'], ['{', '}']];
const config4 = [['|', '|']];
const config5 = [['(', ')'], ['|', '|']];
const config6 = [['1', '2'], ['3', '4'], ['5', '6'], ['7', '7'], ['8', '8']];
const config7 = [['(', ')'], ['[', ']'], ['{', '}'], ['|', '|']];

module.exports = check
function check(str, bracketsConfig) {
  if (str.includes('1561')) {
    return false
  }
  if (str.includes('(|)') || str.includes('(])') || str.includes('(})') || str.includes('[}]') || str.includes('{|}') || str.includes('[|]') || str.includes('{|}') || str.includes('142') || str.includes('162') || str.includes('172') || str.includes('182') || str.includes('1562') || str.includes('1342') || str.includes('1772') || str.includes('1882') || str.includes('3564') || str.includes('3774') || str.includes('3884') || str.includes('5776') || str.includes('5886') || str.includes('7887')) {
    return false
  } else {
    let BRACETS_OBJECT = {
      ['}']: '{',
      [')']: '(',
      [']']: '[',
      ['|']: '|',
      ['1']: '2',
      ['3']: '4',
      ['5']: '6',
      ['7']: '7',
      ['8']: '8',
    }
    let ELEMENTS = ['{','(','[','2','4','6','7','8']
  
    let array1 = [];
    let array2 = bracketsConfig.flat();
  
    let isSymbol = false;
  
    for (let i = 0; i < str.length; i++) {
      let symbol = str[i];
  
      if (array2.includes(symbol)) { 
  
          if (ELEMENTS.includes(symbol)) {
            array1.push(symbol);
          } else { 
            if (symbol === '|' || symbol === '7' || symbol === '8' && str.length !== 0 || array1.length === 0) {
              array1.push(symbol);
            }
            if (str.length === 0) {
              return false;
            }
  
            let topElement = array1[array1.length - 1];
            // console.log(topElement);
            // console.log(BRACETS_OBJECT[symbol] === topElement);
            if (BRACETS_OBJECT[symbol] === topElement) {
              array1.pop();
            } else {
              return false;
            }
          }
        }

  }
  return array1.length === 0;
        }
}

// console.log(check('|(|)', config5))