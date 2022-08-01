// Variables
var BtnStart = document.getElementById("start-button");
var quizInstruction = document.querySelector(".quiz-insturction");
var quizContainer = document.querySelector("#quiz-container");
var BtnNext = document.getElementById("next");
var questionText = document.createElement("h1");
var BtnPrevious = document.getElementById("previous");
var BtnSubmit = document.getElementById("submit-button");
var timeCount=document.querySelector("timer", "seconds-counter");
// var option1 = document.createElement("button");
// var option2 = document.createElement("button");
// var option3 = document.createElement("button");
// var option4 = document.createElement("button");

// var timeleft = 75;
// var interval = setInterval(function(){
//     document.getElementById('timeleft').innerHTML=count;
//     count--;
//     if (count === 0){
//       clearInterval(interval);
//       document.getElementById('timeleft').innerHTML='Done';
//       // or...
//       alert("You're out of time!");
//     }
//   }, 1000);


var myQuestions = [
    {
        question: "What is it called when you turn elements into a list?",
        answers: {
            choice1: "Function",
            choice2: "Array",
            choice3: "Loop",
            choice4: "String",
            answer: 2,
        },
    },
    {
        question: "Which one of these is a JavaScript package manager?",
        answers: {
            choice1: "Node.js",
            choice2: "TypeScript",
            choice3: "npm",
            answer: 3,
        },
    },
    {
        question: "Which tool can you use to ensure code quality?",
        answers: {
            choice1: "Angular",
            choice2: "jQuery",
            choice3: "RequireJS",
            choice4: "ESLint",
            answer: 4,
        },
    },
];

// Functions
function startGame() {
    quizInstruction.classList.add("hide");
    quizContainer.classList.remove("hide");
    BtnStart.style.display = "none";
    var BtnNext = document.getElementById("next");
    BtnNext.style.display = "block";
    var BtnPrevious = document.getElementById("previous");
    //   BtnPrevious.style.display = "block";
    BtnPrevious.classList.add("hide");
    builtQuiz();
    
}

function builtQuiz() {
    option1.innerHTML = myQuestions[0].answers.choice1;
    option2.innerHTML = myQuestions[0].answers.choice2;
    option3.innerHTML = myQuestions[0].answers.choice3;
    option4.innerHTML = myQuestions[0].answers.choice4;
    question1.innerHTML = text[0].answers.choice1;

    quizContainer.appendChild(option1);
    quizContainer.appendChild(option2);
    quizContainer.appendChild(option3);
    quizContainer.appendChild(option4);


element.textContent=""



    // variable to store the HTML output
    const output = [];

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
        // variable to store the list of possible answers
        const answers = [];

        // and for each available answer...
        for (letter in currentQuestion.answers) {
            // ...add an HTML radio button
            answers.push(
                `<label>
                <input type="radio" name="question${questionNumber}" value="${letter}">
                ${letter} :
                ${currentQuestion.answers[letter]}
              </label>`
            );
        }

        // add this question and its answers to the output
        output.push(
            `<div class="slide">
              <div class="question"> ${currentQuestion.question} </div>
              <div class="answers"> ${answers.join("")} </div>
            </div>`
        );
    });

    // finally combine our output list into one string of HTML and put it on the page
    //   quizContainer.innerHTML = output.join("");
}

function showResults() {
    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll(".answers");

    // keep track of user's answers
    let numCorrect = 0;

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
        // find selected answer
        const answerContainer = answerContainers[questionNumber];
        const selector = `input[name=question${questionNumber}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;

        // if answer is correct
        if (userAnswer === currentQuestion.correctAnswer) {
            // add to the number of correct answers
            numCorrect++;
        }
    });

    // show number of correct answers out of total
    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
}

// // Event listeners
// submitButton.addEventListener("click", showResults);
// previousButton.addEventListener("click", showPreviousSlide);
// nextButton.addEventListener("click", showNextSlide);
BtnStart.addEventListener("click", startGame);
