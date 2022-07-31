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


