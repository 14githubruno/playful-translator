// HANDLE CURTAIN MENU
//variables
const selectButton = document.querySelector('.browser-btn');
const closeButton = document.querySelector('#close-btn');
const headerMenu = document.querySelector('header');
const logoContainer = document.querySelector('.logo-container');
const sunMoonContainer = document.querySelector('.dark-light-mode-container');
const mainSection = document.querySelector('main');
const footerContainer = document.querySelector('.footer-info');
const footerReference = document.querySelector('.footer-reference');
let boolean;

// func which removes background's opacity, animations, body's scrollbar
function removeOpacityAnimation(){
    document.body.style.overflow = 'hidden';
    logoContainer.style.opacity = 0.1;
    sunMoonContainer.style.opacity = 0.1;
    mainSection.style.opacity = 0.1;
    footerContainer.style.opacity = 0.1;
    selectButton.classList.add('animation-paused');
    footerReference.classList.add('animation-paused');
    boolean = true;
}

// func which restores background's opacity, animations, body's scrollbar
function restoreOpacityAnimation(){
    document.body.style.overflow = 'auto';
    mainSection.style.opacity = 1;
    footerContainer.style.opacity = 1;
    logoContainer.style.opacity = 1;
    sunMoonContainer.style.opacity = 1;
    selectButton.classList.remove('animation-paused');
    footerReference.classList.remove('animation-paused');
    boolean = false;
}

// func for choosing a language
function showMenu() {
    headerMenu.style.display = 'flex';
    removeOpacityAnimation();
}
selectButton.addEventListener('click', showMenu);

// func for closing curtain menu
function hideMenu() {
    headerMenu.style.display = 'none';
    restoreOpacityAnimation();
}
closeButton.addEventListener('click', hideMenu);

// handle curtain menu during window resizing
function handleMenuWithWindow(){
    let windowWidth = window.innerWidth;

    if (windowWidth < 820) {
        selectButton.disabled = false;
        if (boolean) {
           showMenu();
        } else {
           hideMenu();
        }
    } else {
        selectButton.disabled = true;
        headerMenu.style.display = 'flex';
        restoreOpacityAnimation();
    }
}
window.addEventListener('resize', handleMenuWithWindow);

// handle button.disabled = true|false on refresh
function handleSelectButton() {
    let screenWidth = window.innerWidth;

    if (screenWidth < 820) {
        selectButton.disabled = false;
    } else {
        selectButton.disabled = true;
    }
}
document.addEventListener('DOMContentLoaded', handleSelectButton);