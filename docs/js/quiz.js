class QuizState {
    constructor(terms, failed, passed, curr) {
        this.terms = terms;
        this.failed = failed;
        this.passed = passed;
        this.curr = curr;
    }
}

class Quiz {
    // a Quiz is a set of questions
    constructor() {
        this.terms = [];
        this.failed = [];
        this.passed = [];
        this.stateHistory = [];
        this.curr;
    }

    addQuestion(term) {
        this.terms.push(term);
    }

    setNextTerm() {
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

    saveState() {
        this.stateHistory.push(new QuizState(this.terms, this.failed, this.passed, this.curr));
    }

    pass() {
        this.saveState();
        this.terms = this.terms.filter(term => term !== this.curr);
        this.passed.push(this.curr);
        this.setNextTerm()
    }

    fail() {
        this.saveState()
        this.terms = this.terms.filter(term => term !== this.curr);
        this.failed.push(this.curr);
        this.setNextTerm()
    }

    undo() {
        if (this.stateHistory.length > 0) {
            const lastState = this.stateHistory.pop();
            this.terms = lastState.terms;
            this.failed = lastState.failed;
            this.passed = lastState.passed;
            this.curr = lastState.curr;
        }
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
quiz.setNextTerm()

function updateTerm() {
    if (quiz.curr == null) {
        window.location.href = 'congratulations.html'
    }
    else {
        termDisplay.innerText = quiz.curr;
    }
}

passButton.addEventListener("click", () => {
    quiz.pass()
    updateTerm()
})

failButton.addEventListener("click", () => {
    quiz.fail()
    updateTerm()
})

passTermShortcut = localStorage.getItem('passTermShortcut')
failTermShortcut = localStorage.getItem('failTermShortcut')
undoShortcut = localStorage.getItem('undoShortcut')


document.addEventListener('keydown', function(event) {
    if (event.key === passTermShortcut) {
        quiz.pass();
        updateTerm()
    } else if (event.key === failTermShortcut) {
        quiz.fail();
        updateTerm();
    } else if (event.key === undoShortcut) {
        quiz.undo();
        updateTerm();
    }

});

// start the quiz
updateTerm()
