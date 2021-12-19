const variablesToToggleArray = ["--bg-color", "--text-color"]; //register colors to be switched

let root = document.documentElement;
let toggleSwitchDiv = document.querySelector(".switch");
let toggleSwitchInput = document.querySelector(".switch input");
let lightMode = true;

const setThemeMode = (mode) => {
  variablesToToggleArray.forEach((el) => {
    root.style.setProperty(el, `var(${el}-${mode})`);
  });
};

const darkModeToggleController = (el) => {
  const isChecked = el.checked;
  isChecked ? setThemeMode("dark") : setThemeMode("light");
};

toggleSwitchDiv.addEventListener("click", () => {
  darkModeToggleController(toggleSwitchInput);
});
