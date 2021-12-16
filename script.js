const quizData = [
    {
        question: 'When was Liverpool FC founded?',
        a: '1892',
        b: '1888',
        c: '1902',
        d: '1896',
        correct: 'a'
    }, {
        question: 'How many FA cups have Liverpool FC won (as of 2021)?',
        a: '5',
        b: '6',
        c: '7',
        d: '8',
        correct: 'c'
    }, {
        question: 'What is the name of Liverpool FC home ground?',
        a: 'Goodison Park',
        b: 'Nike Arena',
        c: 'Anfield',
        d: 'Prenton Park',
        correct: 'c'
    }, {
        question: 'Who captained Liverpool FC in the 2005 Champions League Final?',
        a: 'Steven Gerrard',
        b: 'Jordan Henderson',
        c: 'Sami Hyypia',
        d: 'Jamie Carragher',
        correct: 'a'
    }, {
        question: 'How many Champions League Finals have Liverpool FC played in (as of 2021)?',
        a: '6',
        b: '7',
        c: '8',
        d: '9',
        correct: 'd'
    }, {
        question: 'Who is Liverpool FC\'s top goal scorer of all time?',
        a: 'Steven Gerrard',
        b: 'Ian Rush',
        c: 'Kenny Dalglish',
        d: 'Mohammed Salah',
        correct: 'b'
    }, {
        question: 'In what year did Jurgen Klopp join Liverpool FC?',
        a: '2014',
        b: '2015',
        c: '2016',
        d: '2017',
        correct: 'b'
    }, {
        question: 'Which player has the most appearences for Liverpool FC? (competitive matches only)',
        a: 'Steven Gerrard',
        b: 'Ian Callaghan',
        c: 'Jamie Carragher',
        d: 'Ian Rush',
        correct: 'b'
    }
];


//const quiz = document.getElementById('quiz');
//RADIO BUTTONS TO SEE IF CHECKED
const answerEls = document.querySelectorAll('.answer');
const questionEl = document.getElementById('question');

//TEXTS THAT GO WITH BUTTONS
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');

const submitBtn = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswer()

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;


}

function getSelected() {

    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

function deselectAnswer(){
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}



submitBtn.addEventListener("click", () => {

    // check to see ans
    const answer = getSelected();

    console.log(answer);

    if (answer) {

        if(answer === quizData[currentQuiz].correct){
            score++;
        }
        currentQuiz++;
        if (currentQuiz < quizData.length) {

            loadQuiz();
        } else {
            quiz.innerHTML = `<h2>You got ${score}/${quizData.length} answers correct!</h2>
                                <button onclick="location.reload()">Play Again</button>`;

        }

    }

});