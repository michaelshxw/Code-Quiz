// start

//start of questions
var questions = [
    {
        question: "Who invented JavaScript?",
        answers: ["Douglas Crockford", "Sheryl Sandberg", "Brendan Eich", "Nelson Mandela"],
        correctAnswer: "Brendan Eich"
    },
    {
        question: "JavaScript is a ______-side programming language.",
        answers: ["Client", "Server", "Both", "None"],
        correctAnswer: "Both"
    },
    {
        question: "Which built-in method calls a function for each element in the array?",
        answers: ["while", "loop", "forEach", "eachElement"],
        correctAnswer: "forEach"
    },
    {
        question: "Which of the following function of String object causes a string to be italic, as if it were in an <i> tag?",
        answers: ["fontcolor()", "fontsize()", "italics()", "makeItalic()"],
        correctAnswer: "italics()"
    },
    {
        question: "Inside which HTML element do we put the JavaScript?",
        answers: ["<scripting>", "<javascript>", "<js>", "<script>"],
        correctAnswer: "<script>"
    },
    {
        question: "Where is the correct place to insert a JavaScript tag?",
        answers: ["The <head> section", "The <body> section", "Both <head> and <body> are acceptable", "In the script.js file"],
        correctAnswer: "The <body> section"
    },
    {
        question: "The external JavaScript file must contain the <script> tag.",
        answers: ["True", "Maybe", "Unsure", "False"],
        correctAnswer: "False"
    },
    {
        question: "How can you add a comment in a JavaScript?",
        answers: ["<!--This is a comment-->", "'This is a comment'", "//This is a comment", "comment: This is a comment"],
        correctAnswer: "False"
    }
];

//end of questions

//declare variables
var quizContainer = document.querySelector('#quiz');
var timerDisplay = document.querySelector('#timer');
var questionsContainer = document.querySelector('#questions');
var answersDisplay = document.querySelector('#answersList');
var startButton = document.getElementById('startTime');
var highScores = document.querySelector('#highscores');
var score = 0;
var questionReset = 0;

//timer variables
var secondsRemaining = 81; //61 as the first number to display is 60 // 10 seconds per question
//set timer to 0 at start
var timeLeft = 0;
//time to take off if user selects an incorrect answer
var incorrectAnswerTime = 10;
//time to add if user selects a correct answer
var correctAnswerTime = 5;
//create an unordered list 
var ulCreate = document.createElement("ul");
//event listener on startButton to start timer
startButton.addEventListener('click', function() {
    if (timeLeft === 0) {
        timeleft = setInterval(function() {
            secondsRemaining--;
            timerDisplay.textContent = "Time Remaining: " + secondsRemaining;

            if (secondsRemaining <= 0) {
                clearInterval(timeLeft);
                finishQuiz();
                timerDisplay.textContent = "Time's up!";
            }
        }, 1000);
    }
    //when this event has happened and the timer has started, run function displayQuestions
    displayQuestions(questionReset);
})

//function to display questions in the users viewport
function displayQuestions(questionReset){
    //hide all unwanted elements
    questionsContainer.innerHTML = "";
    //clear ul from previous attempts
    ulCreate.innerHTML = "";
    //loop through all information in the array with a for loop
    for (var i = 0; i < questions.length; i++) {
        var userQuestion = questions[questionReset].question;
        var userAnswer = questions[questionReset].answers;
        //display each question
        answersDisplay.textContent = userQuestion;
    }
    userAnswer.forEach(function (newItem) {
        //apend a new list item for each answer to the answersDisplay textarea
        var listItem = document.createElement("li");
        listItem.textContent = newItem;
        questionsContainer.appendChild(answersDisplay);
        answersDisplay.appendChild(listItem);
        //when you click on one of the new list items (an answer), run the function checkAnswers
        listItem.addEventListener("click", checkAnswers);
    });
}

//function to check the answers when given the users selection
function checkAnswers(event) {
    var element = event.target;

    if (element.matches("li")) {
        var createDiv = document.createElement("div");
        createDiv.setAttribute("id", "createDiv");
        //if the answer is correct
        if (element.textContent == questions[questionReset].correctAnswer) {
            score++;
            //add 5 seconds onto time
            secondsRemaining = secondsRemaining + correctAnswerTime;
            //update textContent
            createDiv.textContent = "Correct! The answer is: " + questions[questionReset].correctAnswer;
        //if the answer is incorrect
        } else {
            //subtract 10 seconds from time
            secondsRemaining = secondsRemaining - incorrectAnswerTime;
            //update textContent
            createDiv.textContent = "Wrong! The correct answer is: " + questions[questionReset].correctAnswer;
        };
    };
    
    //increase question index by 1 each loop
    questionReset++;

    //when all the questions have been display, run function finishQuiz
    if (questionReset >= questions.length) {
        finishQuiz();
        createDiv.textContent = "";
    //otherwise run function displayQuestions again 
    } else {
        displayQuestions(questionReset);
    }
    questionsContainer.appendChild(createDiv);
}

function finishQuiz() {
    //reset all appended textContent
    questionsContainer.innerHTML = "";
    timerDisplay.innerHTML = "";

    //display header
    var endQuizHeader = document.createElement("h1");
    endQuizHeader.setAttribute("id", "endQuizHeader");
    endQuizHeader.textContent = "Good Work! You finished the quiz!";
    questionsContainer.appendChild(endQuizHeader);

    //display paragraph 
    var endQuizPara = document.createElement("p");
    endQuizPara.setAttribute("id", "endQuizPara");
    questionsContainer.appendChild(endQuizPara);

    //if there are more than -1 seconds remaining
    if (secondsRemaining >= 0) {
        var timeRemaining = secondsRemaining;
        //stop the interval timer
        clearInterval(timeLeft);
        //display final score
        endQuizPara.textContent = "Your final score is " + timeRemaining;
    }

    //create a label for highscore intials area
    var createLabel = document.createElement("label");
    //set the id of the label
    createLabel.setAttribute("id", "createLabel");
    //set textContent of label to:
    createLabel.textContent = "Enter your initials to save your highscore: ";
    //append the textContent variable to the questionsContainer variable
    questionsContainer.appendChild(createLabel);
   
    //create a input area for highscore intials area
    var createInput = document.createElement("input");
    //set the type of the input
    createInput.setAttribute("type", "text");
    //set the id of the input
    createInput.setAttribute("id", "initials");
    //make the input are blank
    createInput.textContent = "";
    //append the textContent variable to the questionsContainer variable
    questionsContainer.appendChild(createInput);

    //create a submit button to submit highscore
    var createSubmit = document.createElement("button");
    //set type of button to submit button
    createSubmit.setAttribute("type", "submit");
    //set id of button to submit
    createSubmit.setAttribute("id", "submit");
    //set text of button to submit
    createSubmit.textContent = "Submit";
    //append the submit button the the questionsContainer element
    questionsContainer.appendChild(createSubmit);

    //event listener to capture initials and local storage for initials and score
    //ie when submit button is clicked, do this
    createSubmit.addEventListener("click", function () {
        //create a variable for the iniials
        var initials = createInput.value;
        //if intials textArea is empty
        if (initials === null) {
            //console.log no value
            console.log("No value entered!");
        //otherwise 
        } else {
            //create an object for the intials and score
            var finalScore = {
                initials: initials,
                score: timeRemaining
            };
            var allHighScores = localStorage.getItem("allHighScores");
            //if there are no highscores, set highscores to empty
            if (allHighScores === null) {
                allHighScores = [];
            //otherwise, parse all highscores
            } else {
                allHighScores = JSON.parse(allHighScores);
            }
            //push final scores to allHighScores list
            allHighScores.push(finalScore);
            var newScore = JSON.stringify(allHighScores);
            localStorage.setItem("allHighScores", newScore);
            //go to highscores.html
            window.location.replace("./highscores.html");
        };
    });
};
