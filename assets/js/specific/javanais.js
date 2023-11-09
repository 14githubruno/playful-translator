// 1) IMPORTING from translators.js
import { buttonCopy, inputText, translatedText, copyTextTooltip, emptyTextarea, copyText } from '../general/translators.js';


// 2) MAIN FUNCTION translation
function translateToJavanais(str) {

  let av = 'av';

  let vowels = /[aeiouâàèéêëìîïòôûùü]/;
  let cons = /[^aeiouâàèéêëìîïòôûùü\d\s\W_]/;
  let cedilla = /ç/;
  
  let splitStr = str.toLowerCase().split('');
 
  //javanais translation
  let javanais = splitStr.map((el, index, arr) => {

    if (arr.length - 1 === index) {
      return el;
    } else if (cedilla.test(el)) {
      return el + av;
    } else if (cons.test(el) && vowels.test(arr[index + 1])) {
      return el + av;
    } else {
      return el;
      }

    }).join('');

  //return translation
  return javanais;
}


// 3) PERFORM TRANSLATION, COPY TEXT, HANDLE TEXTAREAS
// through IMPORTED variables and functions

//perform translation
function makeTranslation () {

  if (inputText.value == '') {
    translatedText.value = '';
    buttonCopy.style.visibility = 'hidden';
    buttonCopy.style.cursor = 'none';
  } else {
    buttonCopy.style.visibility = 'visible';
    buttonCopy.style.cursor = 'copy';
    translatedText.value = translateToJavanais(inputText.value);
  }
  
}
inputText.addEventListener('keyup', makeTranslation);
inputText.addEventListener('input', makeTranslation);

//copy text, handle buttonCopy and copyTooltip
buttonCopy.addEventListener('click', copyText);

//handle textareas after refresh or reload or going back/forward;
document.addEventListener('DOMContentLoaded', emptyTextarea);
window.addEventListener('unload', emptyTextarea);