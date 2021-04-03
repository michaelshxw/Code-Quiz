//start

//declare variables
var highscore = document.querySelector("#highscore");
var clearAll = document.querySelector("#clearAll");
var back = document.querySelector("#back");

//event listener on clear highscore button to clear highscores 
clearAll.addEventListener("click", function(){
    localStorage.clear();
    location.reload();
});

//retreive local storage  
var allHighScores = localStorage.getItem("allHighScores");
allHighScores = JSON.parse(allHighScores);

//if there are highscores available
if (allHighScores !== null) {
    //for each one
    for (var i = 0; i < allHighScores.length; i++) {
        //create a list element and change the textContent to the highscore
        var createList = document.createElement("li");
        createList.textContent = allHighScores[i].initials + " " + allHighScores[i].score;
        highscore.appendChild(createList);
    }
}
// event listener on back button to take you back to the index.html page
back.addEventListener("click", function () {
    window.location.replace("./index.html");
});

//end