var time = 100;
var timer;
// var questions = document.getElementById("questions");
var currentQuestionIndex = 0;
var choiceof = document.getElementById("choices");
var initialsof = document.getElementById("initials");
var submitBtn = document.getElementById("submitinitial");
var titleofQuestion = document.getElementById("question-title");
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
    if (currentQuestionIndex < questions.length - 1) {

        currentQuestionIndex++
        startQuestions()
    }
    else {
        gameover()
    }
}
var gameover = function () {
    console.log("Game Over!");
    $("#questions").addClass("hidden");
    $("#end-screen").removeClass("hidden");


    clearInterval(timer);
    var score = $("#timer").text()


}

var saved = function () {
    // var score = $("#timer").text()
    // // $("#end-screen").addClass("hidden");
    // // $("#highscore").removeClass("hidden");
     var initials = initialsof.value.trim();


    if (initials !== "") {
        var scores = 
        JSON.parse(window.localStorage.getItem("scores")) || [];
        var newScore = {
            score: time,
            initials: initials
        };

        scores.push(newScore);
        window.localStorage.setItem("scores", JSON.stringify(scores));
        window.location.href = "highscores.html";
        

      }



}
function checkForEnter(event) {
    // "13" represents the enter key
    if (event.key === "Enter") {
      saved();
    }
  }


$("#startBtn").click(startQuiz);
submitBtn.onclick = saved;
initialsof.onkeyup = checkForEnter;



// var printScores = function (){
// var scores = JSON.parse(window.localStorage.getItem("scores")) || [];
// scores.forEach(function(score){

// var scoreslist = document.getElementById("li");
// scoreslist.textContent = score.initials + "-" + score.score;

// var orderedlist = document.getElementById("scores");
// orderedlist.appendChild(scoreslist);

// });

// }

// var clearscores = function () {
//     window.localStorage.removeItem("scores");
//     window.location.reload();
//   }
  







// put score and initials inside the div inside of highscores 
//  add restart btn
// make a click event 97,98 
// fuction for restarting the game 
// hide highscore unhide the strt screen 
// reset the time 
// 
