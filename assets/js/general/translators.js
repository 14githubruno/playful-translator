// 1) SWITCH TRANSLATOR HANDLING
// variables
const containerButtonAndList = document.querySelector('.container-button-switch');
const buttonSwitch = document.querySelector('.button-switch');
const listGamesSwitch = document.querySelector('.list-games-switch');
const caretUp = document.querySelector('.caret-up');
const caretDown = document.querySelector('.caret-down');
const logoContainer = document.querySelector('.logo-container');
let listIsShown;

// func which hides the list of games
function hideListSwitch() {
  caretDown.style.display = 'none';
  caretUp.style.display = 'inline';
  listGamesSwitch.style.maxHeight = null;
  listIsShown = false;
}

// func which shows the list of games
function showListSwitch() {
  caretUp.style.display = 'none';
  caretDown.style.display = 'inline';
  listGamesSwitch.style.maxHeight = listGamesSwitch.scrollHeight + 'px';
  listIsShown = true;
}

// func to toggle list's visibility
function handleSwitch() {
  if (listGamesSwitch.style.maxHeight){
    hideListSwitch();
  } else {
    showListSwitch();
  }
}
buttonSwitch.addEventListener('click', handleSwitch);

// hide list, if click anywhere except on the list
function verifyClickInsideSwitch(ev) {
  let clickableElement = containerButtonAndList.contains(ev.target);

  if (!clickableElement) {
    hideListSwitch();
  }
}
document.addEventListener('click', verifyClickInsideSwitch);

// hide list if the logo is clicked just before getting to the home
function closeSwitchBeforeHomepage() {
  hideListSwitch();
}
logoContainer.addEventListener('focus', closeSwitchBeforeHomepage);

// handle list's visibility if/when window resizes
function handleSwitchWithWindow() {
  let totalWidth = window.innerWidth;

  if (totalWidth < 820) {
    if (listIsShown) {
      showListSwitch();
    } else {
      hideListSwitch();
    }
  } else {
    hideListSwitch();
  }
}
window.addEventListener('resize', handleSwitchWithWindow);


// 2) INFO HANDLING
//variables
const buttonInfo = document.querySelector('.button-info');
const sectionInfo = document.querySelector('.section-info');
const buttonCloseInfo = document.querySelector('.close-btn-info');
const infoWrapper = document.querySelector('#info-wrapper');
const buttonBackToTranslator = document.querySelector('.back-to-translator');
let booleanVariable;

//function for the button-info
function showInfoSlide() {
  sectionInfo.style.display = 'block';
  booleanVariable = true;
}
buttonInfo.addEventListener('click', showInfoSlide);

//function for the button-info-close
function hideInfoSlide() {
  sectionInfo.style.display = 'none';
  booleanVariable = false;
}
buttonCloseInfo.addEventListener('click', hideInfoSlide);

// function for the anchor-button
function anchorToInfoSection() {
  infoWrapper.scrollIntoView();
}

//make the button a BUTTON
function thisIsAButton() {
  buttonInfo.removeEventListener('click', anchorToInfoSection);
  buttonInfo.addEventListener('click', showInfoSlide);
}

//make the button an ANCHOR
function thisIsAnAnchor() {
  buttonInfo.removeEventListener('click', showInfoSlide);
  buttonInfo.addEventListener('click', anchorToInfoSection);
}

//handle Info visibility through document
document.addEventListener('DOMContentLoaded', (ev) => {
  let windowWidth = window.innerWidth;
  
  if (windowWidth < 820) {
    thisIsAnAnchor();
    sectionInfo.style.display = 'block';
  } else {
    thisIsAButton();
    sectionInfo.style.display = 'none';
  }
});

//handle Info visibility through window
window.addEventListener('resize', (ev) => {
  let currentWidth = window.innerWidth;

  if (currentWidth < 820) {
    thisIsAnAnchor();
    sectionInfo.style.display = 'block';
    booleanVariable = false;
  } else {
    if (booleanVariable) {
      sectionInfo.style.display = 'block';
    } else {
      sectionInfo.style.display = 'none';
      thisIsAButton();
    }
  }
});

// function for back-to-translator-anchor-button
function goBackToTranslator() {
  document.body.scrollIntoView();
}
buttonBackToTranslator.addEventListener('click', goBackToTranslator);


// EXPORT
// variables and functions FOR EVERY SINGLE TRANSLATOR
export const buttonCopy = document.querySelector('.button-textareas');
export const inputText = document.querySelector('#input-text');
export const translatedText = document.querySelector('#translated-text');
export const copyTextTooltip = document.querySelector('.button-textareas-tooltip');

export function emptyTextarea () {
    inputText.value = '';
    translatedText.value = '';
  }

export function copyText() {
    translatedText.focus();
    translatedText.select();
    translatedText.setSelectionRange(0, translatedText.value.length);
    navigator.clipboard.writeText(translatedText.value);
  
    copyTextTooltip.classList.remove('show-tooltip');
    setTimeout(() => {
      copyTextTooltip.classList.add('show-tooltip');
    }, 0);
  }