const quizdata = [
    {
        Question:"how many hours in one day?",
        a:"24",
        b:"23",
        c:"21",
        d:"01",
        correct:"a"
    },
    {
        Question:"how many seconds in one minute?",
        a:"60",
        b:"23",
        c:"21",
        d:"01",
        correct:"a"
    },
    {
        Question:"how many months in one year?",
        a:"12",
        b:"03",
        c:"08",
        d:"01",
        correct:"a"
    },
    {
        Question:"how many eyes does man have?",
        a:"04",
        b:"03",
        c:"01",
        d:"02",
        correct:"d"
    }

];
const answerEls = document.querySelectorAll('.answer');
const questionEl = document.getElementById('Question');
const quiz =document.getElementById('quiz');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const sub_btn =document.getElementById('submit');

let currentQuiz = 0;
let score=0;
let answer = undefined;

loadQuiz();
function loadQuiz() {
    deselectAnswers();
    
    const currentQuizData=quizdata[currentQuiz];
    
    questionEl.innerText=currentQuizData.Question;
    a_text.innerText=currentQuizData.a;
    b_text.innerText=currentQuizData.b;
    c_text.innerText=currentQuizData.c; 
    d_text.innerText=currentQuizData.d;  

}

function getSelected(){
        const answerEls =document.querySelectorAll(".answer");
        let answer = undefined;

        answerEls.forEach((answerEl)=>{
            if(answerEl.checked){
                answer=answerEl.id;
            }
        });
        return answer;

}
function deselectAnswers(){
    answerEls.forEach((answerEl)=>{
        answerEl.checked=false;
    });
}

sub_btn.addEventListener('click',()=>{

    const answer = getSelected();
console.log(answer);
        if(answer)
        {
            if(answer===quizdata[currentQuiz].correct)
            {
                score++;
            }
            currentQuiz++;
            
        if (currentQuiz < quizdata.length)
        {
            loadQuiz();
        }
        else{
            quiz.innerHTML=`<h2>You answered correctly  ${score} / 
            ${quizdata.length} questions</h2>`
        }
        }


    });
