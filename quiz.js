const questions = [
    {
        question: "What is javaScript ?",
        answer: [
            {text: 'programming language', correct: true},
            {text: 'Not a language', correct: false},
            {text: 'computer not support this language', correct: false},
            {text: 'None of the above', correct: false}

        ]
    },
    {
        question: "which largest animal ?",
        answer: [
            {text: 'blue whale', correct: true},
            {text: 'elephant', correct: false},
            {text: 'dog', correct: false},
            {text: 'donkey', correct: false}
        ]
    },
    {
        question: "Whats the ball shape ?",
        answer: [
            {text: 'rectangle', correct: false},
            {text: 'round', correct: true},
            {text: 'square', correct: false},
            {text: 'polygon', correct: false}

        ]
    },
    {
        question: "____th is the independence day ?",
        answer: [
            {text: 'Aug 20', correct: false},
            {text: 'Aug 30', correct: false},
            {text: 'Aug 15', correct: true},
            {text: 'None of the above', correct: false}
        ]
    }
];

const question_html = document.getElementById('question');
const answer_html = document.getElementById("answer_buttons");
const nextBtn = document.getElementById('next-btn')



let currentIndex = 0;
let score = 0;

function startQuiz(){
    currentIndex = 0;
    score = 0;
    nextBtn.innerHTML = 'Next';
    showQuestions()
}

function  showQuestions(){
    resetState();
    let currentQuestion = questions[currentIndex]
    let questionNum = currentIndex + 1
    question_html.innerHTML = questionNum + '.' + currentQuestion.question;

    currentQuestion.answer.forEach(answer => {
        const button = document.createElement('button')
        button.innerHTML = answer.text;
        button.classList.add('btn')
        answer_html.appendChild(button)

        if(answer.correct){
            button.dataset.correct = answer.correct
        }

        button.addEventListener('click',selectAnswer);
    })
}

function resetState(){
    nextBtn.style.display = 'none'
    while(answer_html.firstChild)
    {
        answer_html.removeChild(answer_html.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === 'true';
    if(isCorrect){
        selectedBtn.classList.add('correct')
        score++;
    }
    else{
        selectedBtn.classList.add('incorrect')
    }

    Array.from(answer_html.children).forEach(button =>{
        if(button.dataset.correct==='true'){
            button.classList.add('correct')
        }
        button.disabled = true
    });
    nextBtn.style.display ='block';
}

function showScore(){
    resetState()
    question_html.innerHTML = `Your score is ${score} out of ${questions.length}`
    nextBtn.innerHTML = 'Play Again'
    nextBtn.style.display = 'block'
}

function handleNxtBtn(){
    currentIndex++;
    if(currentIndex<questions.length){
        showQuestions()
    }
    else{
        showScore();
    }
}


nextBtn.addEventListener('click',()=>{
    console.log(questions.length,'jhsjh')
    if(currentIndex < questions.length){
        handleNxtBtn()
    }
    else{
        startQuiz()
    }
})

startQuiz()
