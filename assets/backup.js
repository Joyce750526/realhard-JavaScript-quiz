function startGame() {
  timerCount = 75;
  console.log("gamestarted");
  startContainer.setAttribute("class", "hide");
  quizContainer.removeAttribute("class", "hide");
}
var seconds = 75;
var counter = Document.getElementById("seconds-counter");

function decrementSeconds() {
   seconds = setInterval(decrementSeconds, -1000)
}
function showQuestions(question1){
  var output=[];
  var answers;
}
function showResults(quizQuestions, quizContainer){
  var answerContainers=quizContainer.querySelectorAll
}

var quizQuestions = [
  {
    question1: "Commonly used data types Do Not include:",
    a: "strings",
    b: "booleans",
    c: "alerts",
    d: "numbers",
    correct: "booleans",
  },
  {
    question2: "What does CSS stand for?",
    a: "Central Style Sheets",
    b: "Cascading Style Sheets",
    c: "Cascading Simple Sheets",
    d: "Cars SUVs Sailboats",
    correct: "Cascading Style Sheets",
  },
  {
    question3: "The condition in an if/else statement is enclosed with______.",
    a: "quotes",
    b: "curly brackets",
    c: "parenthesis",
    d: "square brackets",
    correct: "parenthesis",
  },
  {
    question4: "Arrays in JavaScript can be used to store___",
    a: "numbers and strings",
    b: "other arrays",
    c: "booleans",
    d: "all of the above",
    correct: "all of the above",
  },
  {
    question5:
      "String values must be enclosed within ______ when being assigned to variables.",
    a: "commas",
    b: "curly brackets",
    c: "quotes",
    d: "parenthesis",
    correct: "curly brackets",
  },
];


// var startBtn= document.querySelector("#start");
// var startContainer=document.querySelector("#start-container");
// var quizContainer=document.querySelector("#quiz-container")

 
//create a function for the start button that activates the timer and starts the quiz
//create a timer function 
// create a function that will go through the quizQuestion array
// create if statements that will add time to the timer if the question is wrong or present the user with the next question



// <button onclick="clearInterval(myVar)">Stop time</button>


// let myVar = setInterval(myTimer, 1000);
// function myTimer() {

// setInterval(myTimer, 1000);

// function myTimer() {
//   const d = new Date();
//   document.getElementById("demo").innerHTML = d.toLocaleTimeString();
// }

// startBtn.addEventListener("click", startGame);


(function(){
  // Functions
  function buildQuiz(){
    // variable to store the HTML output
    const output = [];

    // for each question...
    myQuestions.forEach(
      (currentQuestion, questionNumber) => {

        // variable to store the list of possible answers
        const answers = [];

        // and for each available answer...
        for(letter in currentQuestion.answers){

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
      }
    );

    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join('');
  }

  function showResults(){

    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll('.answers');

    // keep track of user's answers
    let numCorrect = 0;

    // for each question...
    myQuestions.forEach( (currentQuestion, questionNumber) => {

      // find selected answer
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      // if answer is correct
      if(userAnswer === currentQuestion.correctAnswer){
        // add to the number of correct answers
        numCorrect++;

        // color the answers green
        answerContainers[questionNumber].style.color = 'lightgreen';
      }
      // if answer is wrong or blank
      else{
        // color the answers red
        answerContainers[questionNumber].style.color = 'red';
      }
    });

    // show number of correct answers out of total
    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
  }

  function showSlide(n) {
    slides[currentSlide].classList.remove('active-slide');
    slides[n].classList.add('active-slide');
    currentSlide = n;
    if(currentSlide === 0){
      previousButton.style.display = 'none';
    }
    else{
      previousButton.style.display = 'inline-block';
    }
    if(currentSlide === slides.length-1){
      nextButton.style.display = 'none';
      submitButton.style.display = 'inline-block';
    }
    else{
      nextButton.style.display = 'inline-block';
      submitButton.style.display = 'none';
    }
  }

  function showNextSlide() {
    showSlide(currentSlide + 1);
  }

  function showPreviousSlide() {
    showSlide(currentSlide - 1);
  }

  // Variables
  const quizContainer = document.getElementById('quiz');
  const resultsContainer = document.getElementById('results');
  const submitButton = document.getElementById('submit');
  const myQuestions = [
    {
      question: "Who invented JavaScript?",
      answers: {
        a: "Douglas Crockford",
        b: "Sheryl Sandberg",
        c: "Brendan Eich"
      },
      correctAnswer: "c"
    },
    {
      question: "Which one of these is a JavaScript package manager?",
      answers: {
        a: "Node.js",
        b: "TypeScript",
        c: "npm"
      },
      correctAnswer: "c"
    },
    {
      question: "Which tool can you use to ensure code quality?",
      answers: {
        a: "Angular",
        b: "jQuery",
        c: "RequireJS",
        d: "ESLint"
      },
      correctAnswer: "d"
    }
  ];

  // Kick things off
  buildQuiz();

  // Pagination
  const previousButton = document.getElementById("previous");
  const nextButton = document.getElementById("next");
  const slides = document.querySelectorAll(".slide");
  let currentSlide = 0;

  // Show the first slide
  showSlide(currentSlide);

  // Event listeners
  submitButton.addEventListener('click', showResults);
  previousButton.addEventListener("click", showPreviousSlide);
  nextButton.addEventListener("click", showNextSlide);
})();
