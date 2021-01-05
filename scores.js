

var printScores = function () {
    var scores = JSON.parse(window.localStorage.getItem("scores")) || [];

    scores.sort(function(a, b) {
        return b.score - a.score;
      });

    scores.forEach(function (score) {

        var scoreslist = document.createElement("li");
        scoreslist.textContent = score.initials

        var orderedlist = document.getElementById("scores");
        orderedlist.appendChild(scoreslist);

    });

}

var clearscores = function () {
    window.localStorage.removeItem("scores");
    window.location.reload();
}

document.getElementById("clear").onclick = clearscores;


printScores()
