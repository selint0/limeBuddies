"use strict"; 
//$("#theme-switcher").on("click", 
function switchTheme(){
    $("body").toggleClass("green");
    $("#theme-switch svg").toggleClass("green");
    $("header").toggleClass("green");
    $("nav a").toggleClass("green");
    $("#products").toggleClass("green");
    $("#products button").toggleClass("green");
    $("#products a").toggleClass("green");
    $("#products h2").toggleClass("green");
    $("#products h3").toggleClass("green");
    $("#earringsP").toggleClass("green");
    $("#braceletsP").toggleClass("green");
    $("#necklacesP").toggleClass("green");
    $("#boba").toggleClass("green");
    $("#travel").toggleClass("green");
    $("#wine").toggleClass("green");
    $("#neck").toggleClass("green");
    $("#brace").toggleClass("green");
    $("#future").toggleClass("green");
    $("#past").toggleClass("green");
    $("div.accordion div").toggleClass("green");
    $("div.accordion h3").toggleClass("green");
    $("form").toggleClass("green");
    $("#contact input[type=submit]").toggleClass("green");
};
const toggleBtn = document.getElementById("theme-switcher");
let darkMode = localStorage.getItem("dark-mode");

const enableDarkMode = () => {
    switchTheme();
    toggleBtn.classList.remove("dark-mode-toggle");
    localStorage.setItem("dark-mode", "enabled");
};

const disableDarkMode = () => {
    switchTheme();
    toggleBtn.classList.add("dark-mode-toggle");
    localStorage.setItem("dark-mode", "disabled");
};

if (darkMode === "enabled") {
    enableDarkMode();
}

toggleBtn.addEventListener("click", (e) => {
    darkMode = localStorage.getItem("dark-mode");
    if (darkMode === "disabled") {
        enableDarkMode();
    } else {
        disableDarkMode();
    }
});