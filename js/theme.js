// initialise theme from local storage
const savedTheme = localStorage.getItem("andaBlogTheme");
const initialTheme = savedTheme ? savedTheme : "auto";
document.documentElement.setAttribute("data-theme", initialTheme);

// set loaded theme button as aria-pressed
const selectedButton = document.querySelector(`button[data-theme-value=${initialTheme}]`);
if (selectedButton) {
  selectedButton.setAttribute("aria-pressed", "true");
}

const buttons = document.querySelectorAll("button[data-toggle-theme]");

buttons.forEach((button) => {
  button.addEventListener("click", function (e) {
    const newTheme = this.dataset.themeValue;
    const previousTheme = localStorage.getItem("andaBlogTheme");

    // check if theme in allowed themes
    if (["auto", "light", "dark", "pride"].includes(newTheme) && newTheme !== previousTheme) {
      const previousThemeButton = document.querySelector(`button[data-theme-value=${previousTheme}]`);
      previousThemeButton.removeAttribute("aria-pressed");
      this.setAttribute("aria-pressed", "true");
      document.documentElement.setAttribute("data-theme", newTheme);
      localStorage.setItem("andaBlogTheme", newTheme);
    }
  });
});