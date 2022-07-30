var startButton = document.querySelector(".start-button");
var timerElement = document.querySelector(".timer-count");
var correct = document.querySelector(".correct");
var wrong = document.querySelector(".wrong");

var chosenWord = ""
var numBlanks = 0;
var winCounter = 0;
var loseCounter = 0;
var isCorrect = false;
var timer;
var timerCount;

document.getElementById("quiz-container").appendChild;

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
        question5: "String values must be enclosed within ______ when being assigned to variables.",
        a: "commas",
        b: "curly brackets",
        c: "quotes",
        d: "parenthesis",
        correct: "curly brackets",
    },

];

var startBtn= document.querySelector("#start");
var startContainer=document.querySelector("#start-container");
var quizContainer=document.querySelector("#quiz-container")



function startGame(){
    timerCount = 60;
    console.log("gamestarted");
    startContainer.setAttribute("class", "hide")
    quizContainer.removeAttribute("class", "hide")
}

var currentQuiz = 0
var score = 0

startBtn.addEventListener("click",startGame);

// The startGame function is called when the start button is clicked
function startGame() {
    isWin = false;
    timerCount = 60;
    // Prevents start button from being clicked when round is in progress
    startButton.disabled = true;
    renderBlanks()
    startTimer()
  }