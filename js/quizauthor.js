const quizData = [
    {
        question: "Which of the following works is done by Mark Twain?",
        a: "Adventure of Huckleberry Finn",
        b: "The Revival",
        c: "The Idiot",
        d: "A Wolf for a Spell",
        correct: "a",
    },
    {
        question: "0 + 0 =",
        a: "0",
        b: "1",
        c: "2",
        d: "3",
        correct: "a",
    },
    {
        question: "2 + 2 = ",
        a: "1",
        b: "2",
        c: "3",
        d: "4",
        correct: "d",
    },
    {
        question: "3 + 3 = ",
        a: "6",
        b: "5",
        c: "4",
        d: "3",
        correct: "a",
    },
    {
        question: "3 + 3 = ",
        a: "6",
        b: "5",
        c: "4",
        d: "3",
        correct: "a",
    },
];

var currQuiz = 0;
var corrAns = 0;
const quizLeng = quizData.length;
const quiz = document.getElementById('quiz');
const _a = document.getElementById('a');
const _b = document.getElementById('b');
const _c = document.getElementById('c');
const _d = document.getElementById('d');

function loadQuiz(){
    quiz.innerText = quizData[currQuiz].question;
    _a.innerText = quizData[currQuiz].a;
    _b.innerText = quizData[currQuiz].b;
    _c.innerText = quizData[currQuiz].c;
    _d.innerText = quizData[currQuiz].d;
    currQuiz++;
    return;
}

loadQuiz();

function checkNNext(id){
    if(currQuiz < quizLeng){
        if(id === quizData[currQuiz].correct){
            corrAns++;
        }
        loadQuiz();
    }
    else{
        quiz.innerText = `You answered ${corrAns}/${quizData.length} questions correctly`;
        _a.innerText = "";
        _b.innerText = "";
        _c.innerText = "";
        _d.innerText = "";
    }
    return false;
}

_a.addEventListener('click', function(){return checkNNext(_a.id);});
_b.addEventListener('click', function(){return checkNNext(_b.id);});
_c.addEventListener('click', function(){return checkNNext(_c.id);});
_d.addEventListener('click', function(){return checkNNext(_d.id);});
