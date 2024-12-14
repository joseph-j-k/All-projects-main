const questions = [
    {
       question: "What does HTML stand for?",
       answers: [
        {text: "Hyper Text Markup Language", correct: true},
        {text: "Hyperlinks and Timings Markup Language", correct: false},
        {text: "Home Tool Markup Language", correct: false},
        {text: "Hyper Transfer Markup Language", correct: false},
       ]
   },
   {
    question: "Which programming language is widely used for web development?",
    answers: [
     {text: "C++", correct: false},
     {text: "Java", correct: false},
     {text: "Javascript", correct: true},
     {text: "Python", correct: false},
    ]
   },
   {
    question: "What is the purpose of the DOCTYPE declaration in HTML?",
    answers: [
     {text: "To specify the character encoding", correct: false},
     {text: "To define the document type", correct: true},
     {text: "To set the title of the document", correct: false},
     {text: " To link external stylesheets", correct: false},
    ]
   },
   {
    question: "What is the correct way to declare a variable in JavaScript?",
    answers: [
     {text: "var x = 10;", correct: false},
     {text: " int x = 10;", correct: false},
     {text: "let x = 10;", correct: true},
     {text: "flaot x = 10;", correct: false},
    ]
   },
   {
    question: "What is CSS used for?",
    answers: [
     {text: "Styling web pages", correct: true},
     {text: "Creating web server scripts", correct: false},
     {text: "Writing database queries", correct: false},
     {text: "Developing web applications", correct: false},
    ]
   },
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    // nextButton.style.display = "none";
    showQuestion();
}

function showQuestion(){
    // answerButton.innerHTML = "";
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

 
    currentQuestion.answers.forEach(answer => {
      const button = document.createElement("button");
      button.innerHTML = answer.text;
      button.classList.add("btn");
      answerButtons.appendChild(button);
      if(answer.correct){
        button.dataset.correct = answer.correct;
      }
      button.addEventListener("click", selectAnswer);

    });
}

function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
        }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }
    else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button =>{
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `your score is ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}


function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }
    else{
        showScore();
    }
}

     nextButton.addEventListener("click", () => {
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }
    else{
        startQuiz();
    }
        
});


startQuiz();