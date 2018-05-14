// Define variables
var wins = 0;
var losses = 0;
var computerPick = 0;
var gemValues = [];
var totalScore = 0;

// Define functions
function displayNumber() {
    document.getElementById("score").innerHTML = totalScore;
}

function getRandInt(min, max){
    return Math.floor(Math.random()*(max - min + 1)) + min;
}

function displayWins() {
    document.getElementById("wins").innerHTML = "Wins: " + wins;
}

function displayLosses() {

}

// Function that resets everything at the start of each round.
function startRound(){
    computerPick = getRandInt(19, 120);
    for (i = 0; i < 4; i++) {
        gemValues[i] = getRandInt(1, 12);
    };
    $("#gem1").attr("gemValue", gemValues[0]);
    $("#gem2").attr("gemValue", gemValues[1]);
    $("#gem3").attr("gemValue", gemValues[2]);
    $("#gem4").attr("gemValue", gemValues[3]);
    document.getElementById("randomNumber").innerHTML = computerPick;
    displayWins();
    document.getElementById("losses").innerHTML = "Losses: " + losses;
    totalScore = 0;
    displayNumber();
}


// Start Game
// ======================================
startRound();

$("#crystals").on("click", ".crystalImage", function() {
    totalScore += parseInt($(this).attr("gemValue"));
    displayNumber();

    if(totalScore === computerPick) {
        wins ++;
        displayWins();
        startRound();
    }

    else if(totalScore > computerPick){
        losses ++;
        startRound();
    }
});
