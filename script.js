// Select Toggle Switch
const toggleSwitch = document.querySelector('input[type="checkbox"]');

// Function: Switch Theme Dynamically
function switchTheme(event) {
  if (event.target.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
  } else {
    document.documentElement.setAttribute("data-theme", "light");
  }
}

// Toggle Switch: Event Listener
toggleSwitch.addEventListener("change", switchTheme);
