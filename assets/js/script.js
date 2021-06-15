/* variables and array set up */

/* DOM manipulation */
var header = document.querySelector('#header');
var quizSection = document.querySelector('#quizSection');
var finalScore = document.querySelector('#finalScore');
var highScores = document.querySelector('#highScores');
var timerEl = document.querySelector('#timer');

var bStart = document.querySelector('#start-quiz');
var sQuestion = document.querySelector('#question');
var bAns1 = document.querySelector('#ans1');
var bAns2 = document.querySelector('#ans2');
var bAns3 = document.querySelector('#ans3');
var bAns4 = document.querySelector('#ans4');
var submitInitials = document.querySelector('#submitInitials');
var sResults = document.querySelector('#results');
var sFinalScore = document.querySelector('#finalscore');
var initialInput = document.querySelector('#initials');

// Questions
var aQuestions = [
  {
    question: "Commonly used data types DO NOT include?",
    answers: {
      a: 'Strings',
      b: 'Booleans',
      c: 'Alerts',
      d: 'Numbers'
    },
    correctAnswer: 'c'
  },
  {
    question: "What are variables used for in JavaScript Programs?",
    answers: {
      a: 'Storing numbers, dates, or other values',
      b: 'Varying randomly',
      c: 'Causing high-school algebra flashbacks',
      d: 'None of the above'
    },
    correctAnswer: 'a'
  },
  {
    question: "Which of the following are capabilities of functions in JavaScript?",
    answers: {
      a: 'Return a value',
      b: 'Accept parameters and Return a value',
      c: 'Accept parameters',
      d: 'None of the above'
    },
    correctAnswer: 'b'
  },
  {
    question: "Which of the following is not a valid JavaScript variable name?",
    answers: {
      a: '2names',
      b: '_first_and_last_names',
      c: 'FirstAndLast',
      d: 'None of the above'
    },
    correctAnswer: 'a'
  },
  {
    question: "______ tag is an extension to HTML that can enclose any number of JavaScript statements.",
    answers: {
      a: '<SCRIPT>',
      b: '<BODY>',
      c: '<HEAD>',
      d: '<TITLE>'
    },
    correctAnswer: 'a'
  },
  {
    question: "What is the correct syntax for referring to an external script called ' abc.js'?",
    answers: {
      a: '<script href=" abc.js">',
      b: '<script name=" abc.js">',
      c: '<script src=" abc.js">',
      d: 'None of the above'
    },
    correctAnswer: 'c'
  },
  {
    question: "Which of the following is not considered a JavaScript operator?",
    answers: {
      a: 'new',
      b: 'this',
      c: 'delete',
      d: 'typeof'
    },
    correctAnswer: 'c'
  },
  {
    question: "The condition in an if / else statement is enclosed with _________ ?",
    answers: {
      a: 'quotes',
      b: 'curly brackets',
      c: 'parenthesis',
      d: 'square brackets'
    },
    correctAnswer: 'c'
  }
];

// Store local storage for sorting
var aHighScores = [];
// {
//   score: ""
//   initials: "",
// }

var saveScore = function () {
  aHighScores.push({ score: iScore, initials: currentPlayerInit });
  localStorage.setItem("scores", JSON.stringify(aHighScores));
  aHighScores.sort(function (a, b) { return b.score - a.score })
}

var loadLocalScores = function () {
  var savedScores = localStorage.getItem("scores");
  if (!savedScores) {
    return false;
  }
  savedScores = JSON.parse(savedScores);

  for (var i = 0; i < savedScores.length; i++) {
    aHighScores[i] = savedScores[i];
  }
};

// Counters and constants 
var timeLeft = 10;
var iScore = 0;
var iQuestionCount = 0;
var currentPlayerInit = "";

// Display time left
var displayTimeLeft = function () {
  if (timeLeft < 0) {
    timeLeft = 0;
  }
  timerEl.textContent = timeLeft;
}

// Check answer and count score
var checkAnswer = function (sAns) {
  if (sAns === aQuestions[iQuestionCount].correctAnswer) {
    sResults.textContent = "Correct!"
    iScore++;
  } else {
    sResults.textContent = "Incorrect answer!"
    iScore--;
    timeLeft = timeLeft - 10;
    displayTimeLeft();
  }

  iQuestionCount++;
  fQuiz();
}

//Complete quiz and display results
var allDone = function () {
  timeLeft = 0;
  displayTimeLeft;
  sFinalScore.textContent = iScore;
}

// start the game / count down and 'loop' through questions
var fQuiz = function () {

  if (iQuestionCount < aQuestions.length) {
    sQuestion.textContent = aQuestions[iQuestionCount].question;
    bAns1.textContent = aQuestions[iQuestionCount].answers.a;
    bAns2.textContent = aQuestions[iQuestionCount].answers.b;
    bAns3.textContent = aQuestions[iQuestionCount].answers.c;
    bAns4.textContent = aQuestions[iQuestionCount].answers.d;
  } else {
    allDone();
  }
};

// Button Listeners
bStart.addEventListener('click', function () {

  // start quiz timer
  var myTimer = function () {
    displayTimeLeft();
    timeLeft--;
    if (timeLeft < 0) {
      clearInterval(quizTimer);
      allDone();
    }
  }
  var quizTimer = setInterval(myTimer, 1000);
  fQuiz();
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
submitInitials.addEventListener('click', function (event) {
  event.preventDefault();
  currentPlayerInit = document.querySelector('#initials').value;
  loadLocalScores();
  saveScore();
  var highScoreBody = document.querySelector('#highScores');
  var favoriteEl = document.createElement('div');
  var listEl = document.createElement('ol');
  var li1 = document.createElement('li');
  var li2 = document.createElement('li');
  var li3 = document.createElement('li');
  var li4 = document.createElement('li');
  
  favoriteEl.textContent = 'High Scores:';
  li1.textContent = 'Chicken Fingers';
  li2.textContent = 'Pizza';
  li3.textContent = 'Burgers';
  li4.textContent = 'Sushi';
  
  favoriteEl.setAttribute('style', 'font-size:20px;');
  listEl.setAttribute('style', 'background: #888888; padding:20px;');
  
  highScoreBody.appendChild(favoriteEl);
  favoriteEl.appendChild(listEl);
  listEl.appendChild(li1);
  listEl.appendChild(li2);
  listEl.appendChild(li3);
  listEl.appendChild(li4);
  

});