// Select Toggle Switch
const toggleSwitch = document.querySelector('input[type="checkbox"]');

// Select Nav
const nav = document.getElementById("nav");

// Select Toggle Icon
const toggleIcon = document.getElementById("toggle-icon");

// Selecting Images & Textbox
const image1 = document.getElementById("image1");
const image2 = document.getElementById("image2");
const image3 = document.getElementById("image3");
const textbox = document.getElementById("text-box");

// Toggle Dark or Light Images
function imageMode(color) {
  image1.src = `img/undraw_proud_coder_${color}.svg`;
  image2.src = `img/undraw_feeling_proud_${color}.svg`;
  image3.src = `img/undraw_conceptual_idea_${color}.svg`;
}

// Function: Dark Mode Styles
function darkMode() {
  // Nav: bgcolor
  nav.style.backgroundColor = "rgb(0 0 0 / 50%)";

  // Textbox: bgcolor
  textbox.style.backgroundColor = "rgb(255 255 255 / 50%)";

  // Toggle: btn
  toggleIcon.children[0].textContent = "Dark Mode";
  toggleIcon.children[1].classList.replace("fa-sun", "fa-moon");

  // Toggle: imgs
  imageMode("dark");
}

// Function: Light Mode Styles
function lightMode() {
  // Nav: bgcolor
  nav.style.backgroundColor = "rgb(255 255 255 / 50%)";

  // Textbox: bgcolor
  textbox.style.backgroundColor = "rgb(0 0 0 / 50%)";

  // Toggle: btn
  toggleIcon.children[0].textContent = "Light Mode";
  toggleIcon.children[1].classList.replace("fa-moon", "fa-sun");

  // Toggle: imgs
  imageMode("light");
}

// Function: Switch Theme Dynamically
function switchTheme(event) {
  if (event.target.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
    darkMode();
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light");
    lightMode();
  }
}

// Toggle Switch: Event Listener
toggleSwitch.addEventListener("change", switchTheme);

// Check local storage for theme
const currentTheme = localStorage.getItem("theme");

if (currentTheme) {
  document.documentElement.setAttribute("data-theme", currentTheme);

  if (currentTheme === "dark") {
    toggleSwitch.checked = true;
    darkMode();
  }
}
