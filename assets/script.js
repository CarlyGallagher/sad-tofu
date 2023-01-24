var startQuiz = document.getElementById('start-Quiz');
var questionContainerEl = document.getElementById('question-container');

startQuiz.addEventListener('click', beginQuiz);


function beginQuiz() {
    console.log('start');
    startQuiz.classList.add('hide');
    questionContainerEl.classList.remove('hide');
    nextQuestion();
};

function nextQuestion() {

};

function selectAnswer() {

};

function submitInitials() {

};

function clearScores() {

};

var questions = [
    {
        question: 'Which of these is not a primitive type',
        answers: [
            { text: 'boolean', correct: false },
            { text: 'number', correct: false },
            { text: 'string', correct: false },
            { text: 'method', correct: true }
        ]
    },
    {
        question: 'what does a conditonal statement start with?',
        answers: [
            { text: 'if', correct: true },
            { text: 'else', correct: false },
            { text: 'when', correct: false },
            { text: 'for', correct: false }
        ]
    },
    {
        question: 'what is the proper variable syntaxt when setting a variable?',
        answers: [
            {text: 'Element = Var = 1', correct: false},
            {text: 'Var Element = 1', correct: true},
            {text: 'Var = Element 1', correct: false},
            {text: '1 = ElementVar', correct: false}
        ]
    },
    {
        question: 'which of these is a string?',
        answers: [
            {text: 'false', correct: false},
            {text: '90', correct: false},
            {text: '"21"', correct: true},
            {text: 'true', correct: false}
        ]
    },

    {
        question: 'Which of these  comparisons means strict equality?',
        answers: [
            {text: '>=', correct: false},
            {text: '||', correct: false},
            {text: '!=', correct: true},
            {text: '&&', correct: false}
        ]
    }
];