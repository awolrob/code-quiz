/* variables and array set up */

/* DOM manipulation */
var header = document.getElementById('header');
var quizSection = document.getElementById('quizSection');
var finalScore = document.getElementById('finalScore');
var highScores = document.getElementById('highScores');
var doneButtons = document.getElementById('doneButtons');
var timerEl = document.getElementById('timer');

var bStart = document.getElementById('start-quiz');
var sQuestion = document.getElementById('question');
var bAns1 = document.getElementById('ans1');
var bAns2 = document.getElementById('ans2');
var bAns3 = document.getElementById('ans3');
var bAns4 = document.getElementById('ans4');
var submitInitials = document.getElementById('submitInitials');
var sResults = document.getElementById('results');
var sFinalScore = document.getElementById('finalscore');
var initialInput = document.getElementById('initials');

header.style.display = "";
quizSection.style.display = "none";
finalScore.style.display = "none";
highScores.style.display = "none";
doneButtons.style.display = "none";

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
  quizSection.style.display = "none";
  finalScore.style.display = "";

  timeLeft = 0;
  displayTimeLeft;
  sFinalScore.textContent = iScore;
}
var fListHighScores = function () {
  var highScoreBody = document.querySelector('#highScores');
  var list = document.createElement('ol');
  list.textContent = "High Scores:"
  list.setAttribute("class", "list-title");
  highScoreBody.appendChild(list);
  // var listItem = document.createElement('li');
  // highScoreBody.innerHTML = "<ol class='task-list-wrapper'>High Scores</ol>";
  // highScoreBody.innerHTML = "<li id='highScoreList'>High Scores</li>";
  for (i = 0; i < aHighScores.length; i++) {
    var listItem = document.createElement('li');
    listItem.textContent = aHighScores[i].initials + " : " + aHighScores[i].score;
    listItem.setAttribute("class", "list-title");
    listItem.setAttribute("id", "highScoreList")
    list.appendChild(listItem);
  };
}

// start the game / count down and 'loop' through questions
var fQuiz = function () {
  header.style.display = "none";
  quizSection.style.display = "";
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
  finalScore.style.display = "none";
  highScores.style.display = "";
  doneButtons.style.display = "";

  currentPlayerInit = document.querySelector('#initials').value;
  loadLocalScores();
  saveScore();

  fListHighScores();
});
goBack.addEventListener('click', function () {
  location.reload(true);
});
clearHighScores.addEventListener('click', function () {
  localStorage.removeItem("scores");
  location.reload(true);
});