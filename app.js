const variablesToToggleArray = [
    "--bg-color",
    "--text-color"
];

let root = document.documentElement;
let toggleButton = document.querySelector("button");
let lightMode = true;

const setRootCssVariable = (variable, newValue) => {
    // pass in variable name and it's new value in string form like "--variable" and "value"
    root.style.setProperty(variable, newValue);
}

const setThemeMode = (mode) => {
   variablesToToggleArray.forEach(el => {
       setRootCssVariable(el, `var(${el}-${mode})`);
   })
}

const toggleThemeMode = () => {
   if(lightMode){
    setThemeMode("light");
   } else {
    setThemeMode("dark");
   }
   lightMode = !lightMode;
}

toggleButton.addEventListener('click', toggleThemeMode);

toggleThemeMode();