var BtnStart = document.getElementById("start-button");
BtnStart.addEventListener("click", startGame);

function startGame() {
  BtnStart.style.display = "none";
  var BtnNext = document.getElementById("next");
  BtnNext.style.display = "block";
  var BtnPrevious = document.getElementById("previous");
  BtnPrevious.style.display = "block";
  builtQuiz();
}

// Variables
var timeleft = 75;
var quizContainer = document.getElementById("start-button");
var BtnNext = document.getElementById("next");
var BtnPrevious = document.getElementById("previous");
var BtnSubmit = document.getElementById("submit-button");
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

(function () {
  // Functions
  function buildQuiz() {
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
    quizContainer.innerHTML = output.join("");
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

        // color the answers green
        answerContainers[questionNumber].style.color = "lightgreen";
      }
      // if answer is wrong or blank
      else {
        // color the answers red
        answerContainers[questionNumber].style.color = "red";
      }
    });

    // show number of correct answers out of total
    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
  }

  // Event listeners
  submitButton.addEventListener("click", showResults);
  previousButton.addEventListener("click", showPreviousSlide);
  nextButton.addEventListener("click", showNextSlide);
})();
