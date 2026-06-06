// initialise theme from local storage
const savedTheme = localStorage.getItem("andaBlogTheme");
if (!savedTheme) {
  // TODO set aria-pressed on light button
  document.documentElement.setAttribute("data-theme", "light");
} else {
  document.documentElement.setAttribute("data-theme", savedTheme);
}

const buttons = document.querySelectorAll("button[data-toggle-theme]");

buttons.forEach((button) => {
  button.addEventListener("click", function (e) {
    const newTheme = this.dataset.theme;
    
    console.log(newTheme);
    
    // check if theme in allowed themes
    if (newTheme != savedTheme && ["auto", "light", "dark", "pride"].includes(newTheme)) {
      document.documentElement.setAttribute("data-theme", newTheme);
      localStorage.setItem("andaBlogTheme", newTheme);
    }
  });
});