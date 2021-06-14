/* variables and array set up */

/* DOM manipulation */
var header = document.querySelector('#header');
var quizSection = document.querySelector('#quizSection');
var finalScore = document.querySelector('#finalScore');
var highScores = document.querySelector('#highScores');
var timerEl = document.querySelector('#timer');

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

var timeLeft = 25;
var iScore = 0;
var iQuestionCount = 0;

// Add Listeners
var bStart = document.querySelector('#start-quiz');
var sQuestion = document.querySelector('#question');
var bAns1 = document.querySelector('#ans1');
var bAns2 = document.querySelector('#ans2');
var bAns3 = document.querySelector('#ans3');
var bAns4 = document.querySelector('#ans4');
var sResults = document.querySelector('#results');

// Start quiz
var checkAnswer = function (sAns) {
  if (sAns === aQuestions[iQuestionCount].correctAnswer) {
    sResults.textContent = "Correct!"
    iScore++;
  } else {
    sResults.textContent = "Incorrect answer!"
    iScore--;
    timeLeft = timeLeft - 20;
  }
  iQuestionCount++;
  fQuiz();
}

var myTimer = function () {
  timerEl.textContent = timeLeft;
  timeLeft--;
  if (timeLeft <= 0) {
    clearInterval(gameTimer);
    allDone();
  }
}
var fQuiz = function () {
  debugger;
  // var gameTimer = setInterval(myTimer, 500);
  console.log('run quiz');
  if (iQuestionCount < aQuestions.length) {
    sQuestion.textContent = aQuestions[iQuestionCount].question;
    bAns1.textContent = aQuestions[iQuestionCount].answers.a;
    bAns2.textContent = aQuestions[iQuestionCount].answers.b;
    bAns3.textContent = aQuestions[iQuestionCount].answers.c;
    bAns4.textContent = aQuestions[iQuestionCount].answers.d;
  } else {
    return;
  }

  // display question
  // wait for event listener


  // start timer 03-Timers 02-addEventListener
  // loop through questions while questions remain and timer > 0 05-True-or-False-Game
  // record answers 05-True-or-False-Game
  // all done - 
  // list final score 
  // record initals
  // onSubmit - list high scores 04-localStorage 01-DOM-manipulation
  //    bonus - go back to quiz again; clear high scores
};

// start the game / count down and loop through questions

bStart.addEventListener('click', function () {
  fQuiz();
  allDone();
});
bAns1.addEventListener('click', function () {
  checkAnswer("a");
});
bAns2.addEventListener('click', function () {
  checkAnswer("b");
});
bAns3.addEventListener('click', function () {
  checkAnswer("c");
});
bAns4.addEventListener('click', function () {
  checkAnswer("d");
});
