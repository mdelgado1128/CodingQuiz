var time = 100;
var timer;
// var questions = document.getElementById("questions");
var currentQuestionIndex = 0;
var choiceof = document.getElementById("choices");
// var choicesIs = document.getElementById



var startQuiz = function () {
    $("#start").addClass("hidden");
    $("#questions").removeClass("hidden");
    timer = setInterval(timerFunc, 1000)
    $("#timer").text(time)
    startQuestions()
}

var timerFunc = function () {
    time--;
    $("#timer").text(time)
    if (time <= 0) {
        clearInterval(timer)
    }
}

var startQuestions = function () {
    var currentquestion = questions[currentQuestionIndex];
    var titleofQuestion = document.getElementById("question-title");
    titleofQuestion.textContent = currentquestion.title;

    choiceof.innerHTML = "";

    currentquestion.choices.forEach(function (choice, i) {

        var choiceIs = document.createElement("button");
        choiceIs.setAttribute("class", "choice");
        choiceIs.setAttribute("value", choice);

        choiceIs.textContent = i + 1 + ". " + choice;

        choiceIs.onclick = questionClick 
            
    

        choiceof.appendChild(choiceIs);


    });


};

function questionClick() {
var userChoice = event.target.value;
var currentquestion = questions[currentQuestionIndex];
var answer = currentquestion.answer

if (userChoice !== answer) {
    time = time - 10 
    $("#timer").text(time)


};
if (currentQuestionIndex < questions.length -1 ) {

currentQuestionIndex ++ 
startQuestions()


}
else {
gameover()
}


}
var gameover = function() {
console.log("Game Over!");
$("#questions").addClass("hidden");
$("#end-screen").removeClass("hidden");

clearInterval(timer);
var score = $("#timer").text()


}

var highScore = function(){
    var score = $("#timer").text()
    $("#end-screen").addClass("hidden");
$("#highscore").removeClass("hidden");
var initials = $("#initials")


}

$("#startBtn").click(startQuiz);
$("#submitinitials").click(highScore);

// put score and initials inside the div inside of highscores 
//  add restart btn
// make a click event 97,98 
// fuction for restarting the game 
// hide highscore unhide the strt screen 
// reset the time 
// 
