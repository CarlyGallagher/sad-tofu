var startQuiz = document.getElementById('start-Quiz');
var questionContainerEl = document.getElementById('question-container');
var timerEl = document.getElementById('time-left');
var timer;
var timerVal;
var isWin = false;
var questionDiv = document.getElementById('question');
var btnContainer = document.getElementById('answer-buttons');
var currentQuestion = 0;
var endQuizEl = document.getElementById('end-quiz');
var initialEl = document.getElementById('initials');
var scoreEl = document.getElementById('scoreInput');
var SubmitScore = document.getElementById('submit-score');
var finalPage = document.getElementById('high-scores');


startQuiz.addEventListener('click', beginQuiz);


//starts quiz and timer
function beginQuiz() {
    startQuiz.classList.add('hide');
    startTimer();
    isWin = false;
    timerVal = 50;
    questionContainerEl.classList.remove('hide');
    nextQuestion();
};
//sets timer
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
            scorePage();
        }
    }, 1000);
}

function pauseTime() {
    clearInterval(timer);
}

//reduce time
function reduceTime() {
    if (timerVal < 6) {
        timerVal <= 0
    }
    else {
        timerVal = timerVal - 5
    }
}

//creates text in button then brings the next over
function nextQuestion() {
    btnContainer.innerHTML = '';
    var q = myQuestions[currentQuestion];

    questionDiv.innerHTML = q.question;

    for (var i = 0; i < q.answers.length; i++) {
        var answer = q.answers[i];

        var btn = document.createElement('button');
        btn.textContent = answer.text;
        btn.setAttribute('value', answer.text);
        btn.addEventListener('click', checkAnswer);

        btnContainer.append(btn);
    }

}

function checkAnswer(event) {
    var btnClicked = event.target;

    var qAnswer = btnClicked.getAttribute('value');
    var correctAnswer = myQuestions[currentQuestion].correctAnswer;

    if (qAnswer === correctAnswer) {
        console.log('correct');
        checkIfEndQuiz();
    } else {
        console.log('incorrect');
        reduceTime();
        checkIfEndQuiz();
    }
}

//brings you to the set initials page
function checkIfEndQuiz() {
    if (currentQuestion < myQuestions.length - 1) {

        // next question
        currentQuestion++;
        nextQuestion();
    } else {
        scorePage();
        // end game
    }
}

//set initials and score page
function scorePage() {
    endQuizEl.classList.remove('hide');
    questionContainerEl.classList.add('hide');
    pauseTime();
    initialEl.addEventListener("click", function () {
        var userScore = scoreEl.value;
        var userInitials = initialEl.value;

        var highScores =
            JSON.parse(window.localStorage.getItem("highscores")) || [];

        var newScore = {
            score: userScore,
            initial: userInitials,
        };

        var setScore = window.localStorage.getItem('timerVal', JSON.stringify('pauseTime'));
        scoreEl.textContent = 
        highScores.push(newScore);
        console.log(scoreEl);
        window.localStorage.setItem('highscores', JSON.stringify(highScores));
    });
}

function submitPage() {
    endQuizEl.classList.add('hide');
    finalPage.classList.remove('hide');
    
}

function final(){
    finalPage.addEventListener("click",submitPage);
}


//questionlist
var myQuestions = [
    {
        question: 'Which of these is not a primitive type?',
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
            { text: '===' },
            { text: '||' },
            { text: '!=' },
            { text: '&&' }],
        correctAnswer: '>='
    }
];

