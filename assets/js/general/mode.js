// 1) LIGHT/DARK MODE
// variables
const sun = document.querySelector('.sun');
const moon = document.querySelector('.moon');
const root = document.documentElement;
const checkbox = document.querySelector('.checkbox');

//function sun
function lightMode(){
  sun.style.display = 'none';
  moon.style.display = 'block';
}
sun.addEventListener('click', lightMode);

//function moon
function darkMode() {
  sun.style.display = 'block';
  moon.style.display = 'none';
}
moon.addEventListener('click', darkMode);

//function checkbox
function switchMode() {
    if (checkbox.checked) {
      root.setAttribute('data-theme', 'light');
      localStorage.setItem('theme', 'light');
    } else {
      root.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
    }    
}
checkbox.addEventListener('change', switchMode);

// check if 'theme' is in localStorage and which one
let preferredTheme = localStorage.getItem('theme');

  if (preferredTheme) {
    root.setAttribute('data-theme', preferredTheme);
  
    if (preferredTheme === 'light') {
      checkbox.checked = true;
      lightMode();
    } else {
      checkbox.checked = false;
      darkMode();
    }
  }