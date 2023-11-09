// 1) IMPORTING from translators.js
import { buttonCopy, inputText, translatedText, copyTextTooltip, emptyTextarea, copyText } from '../general/translators.js';


// 2) MAIN FUNCTION translation
function translateToLöffelsprache(str) {

  let lew = 'lew';

  let vowels = /[aeiouäöü]/;

  let splitStr = str.toLowerCase().split('');
  
  //löffelsprache translation
  let löffelsprache = splitStr.map(letter => {
      if (vowels.test(letter)) {
          return letter + lew + letter;
      } else {
          return letter;
      }
  }).join('');

  //return translation
  return löffelsprache;
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
    translatedText.value = translateToLöffelsprache(inputText.value);
  }
  
}
inputText.addEventListener('keyup', makeTranslation);
inputText.addEventListener('input', makeTranslation);

//copy text, handle buttonCopy and copyTooltip
buttonCopy.addEventListener('click', copyText);

//handle textareas after refresh or reload or going back/forward;
document.addEventListener('DOMContentLoaded', emptyTextarea);
window.addEventListener('unload', emptyTextarea);