function shortcutsAreUnique() {
    var passTermShortcut = document.getElementById("passTermShortcut").value;
    var failTermShortcut = document.getElementById("failTermShortcut").value;
    var undoShortcut = document.getElementById("undoShortcut").value;
    shortcutsList = [passTermShortcut, failTermShortcut, undoShortcut];     
    uniqueShortcuts = new Set(shortcutsList);
    if(shortcutsList.length !== uniqueShortcuts.size){
        return false;
    }
    return true;
}

function submitForm() {
    if(!shortcutsAreUnique()){
        alert("Shortcuts must be unique");
        return;
    }

    localStorage.setItem("colorTheme", getColorTheme(document.getElementById("colorThemeSelect").value))
    localStorage.setItem("passTermShortcut", document.getElementById("passTermShortcut").value)
    localStorage.setItem("failTermShortcut", document.getElementById("failTermShortcut").value)
    localStorage.setItem("undoShortcut", document.getElementById("undoShortcut").value) 
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
document.getElementById('undoShortcut').value = localStorage.getItem('undoShortcut')
