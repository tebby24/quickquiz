function setColorMode(colorMode) {
    sessionStorage.setItem("colorMode", colorMode);
    document.body.classList.toggle("darkMode", colorMode === "darkMode");
    document.body.classList.toggle("lightMode", colorMode === "lightMode");
    toggleColorModeBtn.innerText = colorMode === "lightMode" ? "dark mode" : "light mode";
}

function switchColorMode() {
    const colorMode = sessionStorage.getItem("colorMode");
    const newColorMode = colorMode === "lightMode" ? "darkMode" : "lightMode";
    setColorMode(newColorMode);
}

const toggleColorModeBtn = document.getElementById("switchColorModeBtn");
toggleColorModeBtn.addEventListener("click", switchColorMode);

if (!sessionStorage.getItem("colorMode")) {
    sessionStorage.setItem("colorMode", "lightMode");
}

setColorMode(sessionStorage.getItem("colorMode"));
