function submitForm() {
    const userInput = document.getElementById('userInput').value;
    if (!userInput) {
        alert('Enter at least one term.');
        return;
    }
    sessionStorage.setItem('userInput', userInput);
    window.location.href = 'quiz.html';
}

// fix textarea placeholder linebreaks
var textAreas = document.getElementsByTagName('textarea');
Array.prototype.forEach.call(textAreas, function (elem) {
    elem.placeholder = elem.placeholder.replace(/\\n/g, '\n');
});

if (!localStorage.getItem('colorTheme')) {
    localStorage.setItem('colorTheme', 'light');
}

document.body.classList = localStorage.getItem('colorTheme');
