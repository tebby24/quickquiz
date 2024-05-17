class Quiz {
    // a Quiz is a set of questions
    constructor() {
        this.terms = [];
        this.failed = [];
        this.passed = [];
        this.curr;
    }

    addQuestion(term) {
        this.terms.push(term);
    }

    getNextTerm() {
        if (this.terms.length == 0) {
            if (this.failed.length == 0) {
                // quiz over
                this.curr = null;
            }
            else {
                this.terms = this.failed;
                this.failed = [];
            }
        }
        var randomIndex = Math.floor(Math.random() * this.terms.length);
        this.curr = this.terms[randomIndex];
    }

    pass() {
        this.terms = this.terms.filter(term => term !== this.curr);
        this.passed.push(this.curr);
    }

    fail() {
        this.terms = this.terms.filter(term => term !== this.curr);
        this.failed.push(this.curr);
    }
}

const termDisplay = document.getElementById('termDisplay');
const passButton = document.getElementById('passButton');
const failButton = document.getElementById('failButton');

const quiz = new Quiz();
const userInput = sessionStorage.getItem('userInput');
const terms = userInput.split('\n').filter(term => term.trim() !== '');

terms.forEach((term) => {
    quiz.addQuestion(term);
})

function showNextTerm() {
    quiz.getNextTerm()
    if (quiz.curr == null) {
        window.location.href = 'congratulations.html'    
    }
    else {
        termDisplay.innerText = quiz.curr;        
    }
}
showNextTerm()

passButton.addEventListener("click", () => {
    quiz.pass()
    showNextTerm()
})

failButton.addEventListener("click", () => {
    quiz.fail()
    showNextTerm()
})

passTermShortcut = localStorage.getItem('passTermShortcut')
failTermShortcut = localStorage.getItem('failTermShortcut')


document.addEventListener('keydown', function(event) {
    if (event.key === passTermShortcut) {
        quiz.pass();
        showNextTerm();
    } else if (event.key === failTermShortcut) {
        quiz.fail();
        showNextTerm();
    }
});
