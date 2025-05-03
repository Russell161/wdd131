const themeSelector = document.querySelector('#theme-selector');
const logo = document.querySelector('#logo');

function changeTheme() {
    if (themeSelector.value === "dark") {
        document.body.classList.add("dark");
        logo.src = "images/byui-logo_white.webp";
    } else {
        document.body.classList.remove("dark");
        logo.src = "images/byui-logo_blue.webp";
    }
}

themeSelector.addEventListener('change', changeTheme);
