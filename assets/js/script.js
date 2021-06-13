/* variables and array set up */
debugger;
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

/* DOM manipulation */

// access the <body> element by using `document.body`
// var body = document.body;
var pageTitle = document.querySelector('.page-title');
console.log(pageTitle);

// Add Listeners Here
var bStart = document.querySelector('#start-quiz');
var bAns1 = document.querySelector('#ans1');
var bAns2 = document.querySelector('#ans2');
var bAns3 = document.querySelector('#ans3');
var bAns4 = document.querySelector('#ans4');

/* Functions Here */
var fStartGame = function () {
  pageTitle.textContent = "Start Button Clicked";
  // pageTitle.setAttribute('style', 'margin:auto; width:50%; text-align:center;');
  // document.appendChild(startButtonClicked);
}

// start the game / count down and loop through questions
bStart.addEventListener('click', function() {
  fStartGame();
});