const variablesToToggleArray = ["--bg-color", "--text-color"]; //register colors to be switched

let root = document.documentElement;
let toggleSwitchDiv = document.querySelector(".switch");
let toggleSwitchInput = document.querySelector(".switch input");
let lightMode = true;

const setRootCssVariable = (variable, newValue) => {
  // pass in variable name and it's new value in string form like "--variable" and "value"
  root.style.setProperty(variable, newValue);
};

const setThemeMode = (mode) => {
  variablesToToggleArray.forEach((el) => {
    setRootCssVariable(el, `var(${el}-${mode})`);
  });
};

const darkModeToggleController = () => {
  const isChecked = toggleSwitchInput.checked;
  isChecked ? setThemeMode("dark") : setThemeMode("light");
};

toggleSwitchDiv.addEventListener("click", () => {
  darkModeToggleController();
});
