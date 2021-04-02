// start

//start of questions 
var myQuestions = [
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
        question: "JavaScript is a ______-side programming language.",
        answers: {
            a: "Client",
            b: "Server",
            c: "Both",
            d: "None"
        },
        correctAnswer: "c"
    },
    {
        question: "Which built-in method calls a function for each element in the array?",
        answers: {
            a: "while",
            b: "loop",
            c: "forEach"
        },
        correctAnswer: "c"
    },
    {
        question: "Which of the following function of String object causes a string to be italic, as if it were in an <i> tag?",
        answers: {
            a: "fontcolor()",
            b: "fontsize()",
            c: "italics()"
        },
        correctAnswer: "c"
    },

    //template
    // {
    //     question: "",
    //     answers: {
    //         a: "",
    //         b: "",
    //         c: ""
    //     },
    //     correctAnswer: ""
    // },
]

//end of questions

//variables

var quizContainer = document.querySelector('#quiz')
var timerDisplay = document.querySelector('#timer')
var questionsContainer = document.querySelector('#questions')
var answersDisplay = document.querySelector('#answersList')
var startButton = document.getElementById('startTime')
var highScores = document.querySelector('#highscores')

var score = 0;

//functions 

//function that displays the quiz, generated on click of start quiz button 

function startTimer(){
    //check to see when function is run
    console.log('startTimer run'); 
    //declare variables
    var secondsRemaining = 61; //61 as the first number to display is 60 // 15 seconds per question
    //set timer to 0 at start
    var timeLeft = 0;
    //time to take off if user selects an incorrect answer
    var incorrectAnswerTime = 10;
    //time to add if user selects a correct answer
    var correctAnswerTime = 5;

    if (timeLeft === 0) {
        var countdownTimer = setInterval(function() {
            secondsRemaining--;
            timerDisplay.textContent = "Time Remaining: " + secondsRemaining;

            if (secondsRemaining <= 0) {
                clearInterval(countdownTimer);
                finishQuiz();
                timerDisplay.textContent = "Time's up!";
            }
        }, 1000);
    }
}

function displayQuestions(){
    console.log('displayquestions run');
    //hide all unwanted elements
    if (questionsContainer.style.display == "") {
        questionsContainer.style.display = "none"
    };
    //clear ul from previous attempts
    //loop through all information in the array with a for loop
    for (var i =0; myQuestions.length; i++) {
        var userQuestion = myQuestions.question;
        var userAnswer = myQuestions.answers;
        answersDisplay.textContent = userQuestion;
    }
    



    
    //set style of class "rules" to display none (disappear)
}
//  //empty variable to store quiz questions and user answers?) 
//  var quizOutput = [];
//  myQuestions.forEach(
//      //because these variables are only being used in this forEach loop, it doesn't need to be declared (anonymous variables)
//      (currentQuestion, questionNumber) => { //arrow function
//         var answers = []; //empty variable for user answers
//         //for each answer

//      }
// );


function finishQuiz() {
    console.log('finishQuiz function has been run');
}

function buildQuiz(){
    // removeHomeElements();
    startTimer();
    displayQuestions();
}

//function that shows the results of the quiz once the quiz is over
function showResults(){
    console.log();('results will now be shown ');
}

//run buildQuiz on click of start quiz button 
startButton.addEventListener('click', buildQuiz);

//once the quiz's timer has run out, show results
if (timerDisplay <= 0) {
    showResults();
}




