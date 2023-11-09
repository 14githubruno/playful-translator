// 1) IMPORTING from translators.js
import { buttonCopy, inputText, translatedText, copyTextTooltip, emptyTextarea, copyText } from '../general/translators.js';

// 2) MAIN FUNCTION translation
function translateToPigLatin(str) {

  //Patterns(cons, vowels) and strings to add;
   let addConsEnd = 'ay';
   let addVowEnd = 'way';
   let vowelsBegin = /^[aeiou]/;
   let consBegin = /^[^aeiou]+/;

  //First exception: numbers; 
   let nums = /\d+/;

  //Second exception: empty spaces; 
   let nothing = '';
   let space = ' ';

  //Third exception: dash, slash and apostrophe; 
   let dash = '-';
   let slash = '/';
   let apostrophe = '\'';

 //splitting to verify the presence of a word or more (i.e. sentence);
   let wordOrSentence = str.slice().toLowerCase().split(' ');

 //handling translation;
   let finalStr = wordOrSentence.map(el => {

         //checking for dash;
         if (el.includes(dash)) {
           let divider = el.split(dash);
           let transformation = divider.map(el => {
           
             if (vowelsBegin.test(el)) {
               return el + addVowEnd;
             } else if (nothing === el) {
               return el;
             } else if (nums.test(el)) {
               return el;
             } else {
               let cons = el.match(consBegin);
               return el.replace(cons, '') + cons + addConsEnd;
             }
           }).join(dash);
           return transformation;
         }

         //checking for slash;
         if (el.includes(slash)) {
           let divider = el.split(slash);
           let transformation = divider.map(el => {
             if (vowelsBegin.test(el)) {
               return el + addVowEnd;
             } else if (nothing === el) {
               return el;
             } else if (nums.test(el)) {
               return el;
             } else {
               let cons = el.match(consBegin);
               return el.replace(cons, '') + cons + addConsEnd;
             }
           }).join(slash);
           return transformation;
         }

         //checking for apostrophe;
         if (el.includes(apostrophe)) {
           let divider = el.split(apostrophe);
           let transformation = divider.map(el => {
             if (vowelsBegin.test(el)) {
               return el + addVowEnd;
             } else if (nothing === el) {
               return el;
             } else if (nums.test(el)) {
               return el;
             } else {
               let cons = el.match(consBegin);
               return el.replace(cons, '') + cons + addConsEnd;
             }
           }).join(apostrophe);
           return transformation;
         }

           //GENERAL CHECK FOR NUMBERS
           if(nums.test(el)) {
             return el;
           }
             
           //GENERAL CHECK FOR SPACE
           if (nothing === el) {
             return space;
           }

          //GENERAL TRANSLATION
           if (vowelsBegin.test(el)) {
             return el + addVowEnd;
           } else {
             let cons = el.match(consBegin);
             return el.replace(cons, '') + cons + addConsEnd;
           }
   });
   
   //finally, restoring commas, full stops, exclamation marks...;
   //then, returning the final pig latin translation
   let nonChar = /\W+/;
   let dashSlashApostrophe = /[-/']/;

       return finalStr.map(el => {

           if (dashSlashApostrophe.test(el)) {
               return el;
           } else if (nonChar.test(el)) {
               let removed = el.match(nonChar);
               return el.replace(removed, '') + removed;
           } else {
               return el;
           }
       }).join(' ');
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
    translatedText.value = translateToPigLatin(inputText.value);
  }
  
}
inputText.addEventListener('keyup', makeTranslation);
inputText.addEventListener('input', makeTranslation);

//copy text, handle buttonCopy and copyTooltip
buttonCopy.addEventListener('click', copyText);

//handle textareas after refresh or reload or going back/forward;
document.addEventListener('DOMContentLoaded', emptyTextarea);
window.addEventListener('unload', emptyTextarea);