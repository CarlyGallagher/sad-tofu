var startQuiz = document.getElementById('start-Quiz');
var questionContainerEl = document.getElementById('question-container');
var timerEl = document.getElementById('time-left');
var timer;
var timerVal;
var isWin = false;


startQuiz.addEventListener('click', beginQuiz);


function beginQuiz() {
    console.log('start');
    startQuiz.classList.add('hide');
    startTimer();
    isWin = false
    timerVal = 50
    questionContainerEl.classList.remove('hide');
    nextQuestion();
};

function startTimer() {
    timer = setInterval(function () {
        timerVal--;
        timerEl.textContent = timerVal;
        if (timerVal >= 0) {
            if (isWin && timerVal > 0) {
                clearInterval(timer);
                winGame();
            }
        }
        if (timerVal === 0) {
            clearInterval(timer);
            loseGame();
        }
    }, 1000);
}

function reduceTime() {
    if (timerVal < 6) {
        timerVal <= 0
    }
    else {
        timerVal = timerVal - 5
    }
}

function displayQuestion(myQuestions) {

}

var myQuestions = [
    {
        question: 'Which of these is not a primitive type',
        answers: [
            { text: 'boolean' },
            { text: 'number' },
            { text: 'string' },
            { text: 'method' }],
        correctAnswer: 'method'
    },
    {
        question: 'what does a conditonal statement start with?',
        answers: [
            { text: 'if' },
            { text: 'else' },
            { text: 'when' },
            { text: 'for' }],
        correctAnswer: 'if'
    },
    {
        question: 'what is the proper variable syntaxt when setting a variable?',
        answers: [
            { text: 'Element = Var = 1' },
            { text: 'var Element = 1' },
            { text: 'var = Element 1' },
            { text: '1 = ElementVar' }],
        correctAnswer: 'var Element = 1'
    },
    {
        question: 'which of these is a string?',
        answers: [
            { text: 'false' },
            { text: '90' },
            { text: '"21"' },
            { text: 'true' }],
        correctAnswer: '"21"'
    },

    {
        question: 'Which of these  comparisons means strict equality?',
        answers: [
            { text: '>=' },
            { text: '||' },
            { text: '!=' },
            { text: '&&' }],
        correctAnswer: '>='
    }
];

