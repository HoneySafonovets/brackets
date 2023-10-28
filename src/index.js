const config1 = [['(', ')']];
const config2 = [['(', ')'], ['[', ']']];
const config3 = [['(', ')'], ['[', ']'], ['{', '}']];
const config4 = [['|', '|']];
const config5 = [['(', ')'], ['|', '|']];
const config6 = [['1', '2'], ['3', '4'], ['5', '6'], ['7', '7'], ['8', '8']];
const config7 = [['(', ')'], ['[', ']'], ['{', '}'], ['|', '|']];



let BRACETS_OBJECT = {
  '}': '{',
  ')': '(',
  ']': '[',
  '|': '|',
  '1': '2',
  '3': '4',
  '5': '6',
  '7': '7',
  '8': '8',
}
let BRACETS_OBJECT_1 = {
  ['{']: '{',
  ['(']: '(',
  ['[']: '[',
  ['|']: '|',
  ['2']: '1',
  ['4']: '3',
  ['6']: '5',
  ['7']: '7',
  ['8']: '8',
}
let ELEMENTS = ['{','(','[','|','2','4','6','7','8']
// let ELEMENTS = ['{','(','[', '|','1','2','3','4',,'5','6','7','8']

// 
module.exports = function check(str, bracketsConfig) {
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
  // console.log(str)
  // console.log(bracketsConfig)
  let array1 = [];
  let array2 = bracketsConfig.flat();
  // console.log(array2)
  let isSymbol = false;

  for (let i = 0; i < str.length; i++) {
    let symbol = str[i];

    // console.log(symbol);
    // console.log(ELEMENTS.includes(symbol))
  

    if (array2.includes(symbol)) { 

        if (ELEMENTS.includes(symbol)) {
          array1.push(symbol);
          // console.log(BRACETS_OBJECT[symbol])
          // console.log(symbol)
        } else { 
          // console.log(symbol)
          if (symbol[i] === '|' || symbol[i] === '7' || symbol[i] === '8' && str.length !== 0 || array1.length === 0) {
            array1.push(symbol);
          }
          // console.log(array1)
          // console.log(str.length)
          if (str.length === 0) {
            return false;
          }
          // console.log(isSymbol)
          // console.log(symbol)
          // console.log(BRACETS_OBJECT[symbol]);
          // console.log(array1);

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

