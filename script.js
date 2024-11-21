const toggleSwitch = document.querySelector('input[type="checkbox"]');

// Switch theme dynamically
function switchTheme(event) {
  if (event.target.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
  } else {
    document.documentElement.setAttribute("data-theme", "light");
  }
}
//Event Listeners
toggleSwitch.addEventListener("change", switchTheme);
