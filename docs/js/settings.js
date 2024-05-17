function submitForm() {
    localStorage.setItem("colorTheme", getColorTheme(document.getElementById("colorThemeSelect").value))
    localStorage.setItem("passTermShortcut", document.getElementById("passTermShortcut").value)
    localStorage.setItem("failTermShortcut", document.getElementById("failTermShortcut").value)
    console.log("back to home page")
    window.location.href = 'index.html';
}

function getColorTheme(value) {
    if (value === 'light') {return 'lightTheme';}
    else {return 'darkTheme';}
}

if (localStorage.getItem('colorTheme') === 'darkTheme') {
    document.getElementById('colorThemeSelect').value = 'dark'
}
else {
    document.getElementById('colorThemeSelect').value = 'light'
}

document.getElementById('passTermShortcut').value = localStorage.getItem('passTermShortcut')
document.getElementById('failTermShortcut').value = localStorage.getItem('failTermShortcut')
