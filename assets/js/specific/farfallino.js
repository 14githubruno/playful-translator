// 1) IMPORTING from translators.js
import { buttonCopy, inputText, translatedText, copyTextTooltip, emptyTextarea, copyText } from '../general/translators.js';


// 2) MAIN FUNCTION translation
function translateToFarfallino(str) {

    let effe = 'f';

    let vowels = /[aeiouàèéìòù]/;

    let splitStr = str.toLowerCase().split('');
    
    //farfallino translation
    let farfallino = splitStr.map(letter => {
        if (vowels.test(letter)) {
            return letter + effe + letter;
        } else {
            return letter;
        }
    }).join('');

    //return translation
    return farfallino;
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
    translatedText.value = translateToFarfallino(inputText.value);
  }
  
}
inputText.addEventListener('keyup', makeTranslation);
inputText.addEventListener('input', makeTranslation);

//copy text, handle buttonCopy and copyTooltip
buttonCopy.addEventListener('click', copyText);

//handle textareas after refresh or reload or going back/forward;
document.addEventListener('DOMContentLoaded', emptyTextarea);
window.addEventListener('unload', emptyTextarea);