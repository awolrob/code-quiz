/* variables and array set up */
debugger;
/* DOM manipulation */
var header = document.querySelector('#header');
var quizSection = document.querySelector('#quizSection');
var finalScore = document.querySelector('#finalScore');
var highScores = document.querySelector('#highScores');

// header.hidden = false;
// quizSection.hidden = true;
// finalScore.hidden = true;
// highScores.hidden = true;

var aQuestions = [
  {
    question: "Commonly used data types DO NOT include",
    answers: {
      a: 'Strings',
      b: 'Booleans',
      c: 'Alerts',
      d: 'Numbers'
    },
    correctAnswer: 'c'
  },
  {
    question: "The condition in an if / else statement is enclosed with _________ .",
    answers: {
      a: 'quotes',
      b: 'curly brackets',
      c: 'parenthesis',
      d: 'square brackets'
    },
    correctAnswer: 'c'
  }
];

var aHighScores = [
  {
    initials: "",
    score: ""
  }
];

var iTimmer = 0;
var iScore = 0;

// Add Listeners
var bStart = document.querySelector('#start-quiz');
var bAns1 = document.querySelector('#ans1');
var bAns2 = document.querySelector('#ans2');
var bAns3 = document.querySelector('#ans3');
var bAns4 = document.querySelector('#ans4');

/* Functions Here */
// Start quiz
var fStartQuiz = function () {
  // start timer 03-Timers
  // loop through questions 05-True-or-False-Game
  // record answers 05-True-or-False-Game
  // all done - 
  // list final score 
  // record initals
  // onSubmit - list high scores 04-localStorage 01-DOM-manipulation
  //    bonus - go back to quiz again; clear high scores
}

// start the game / count down and loop through questions
bStart.addEventListener('click', function () {
  fStartQuiz();
});
