// var questions = {
//     question1: "What is the",
//     question2: "What is the",
// };

// function trivia() {

// }

// var chances = 10;

// if (chances <= 0) {
//     document.write("Sorry, you ran out of lives! YOU LOSE.")
// }

// function game() {

// }

// Create an array of Words
var words = [
    "Mighty Ducks",
    "Donald Duck",
    "AFLAC Duck",
    "Daffy Duck",
    "Howard the Duck",
    "Rubber Duckie",
    "Plucky Duck",
    "Daisy Duck",
    "Darkwing Duck",
    "Scrooge McDuck",
    "Ludwig Von Drake",
    "Della Duck",
    "Baby Huey",
    "Melissa Duck",
    "Huey",
    "Dewey",
    "Louie",
    "Launchpad McQuack",
    "Webby Vanderquack",
    "NegaDuck",
    "Howard the Duck",
    "Yakky Doodle",
    "Count Duckula",
    "Quackerjack",
    "Abby Mallard"];

    var underScore = [];
    var rightWord = [];
    var wrongWord = [];


// Choose word randomly
var randNum = Math.floor(Math.random() * words.length);
var chosenWord = words[randNum];

console.log(chosenWord);

// Create underscores based on word
var genUnderscore = function() {
    for (var i = 0; i < chosenWord.length; i++) {
        underScore.push("_");
        // var underScoreDom = document.createElement("div");
        // underScoreDom.textContent = underScore[i];
        // underScoreDiv.appendChild(underScoreDom);

        // var underScoreDiv = document.getElementById("underscore");
        // underScoreDiv.textContent = underScore;
        // underScoreDiv.appendChild(underScore);
    }
    return underScore;
    
}
console.log(genUnderscore());

// Print underscore based on amount of letters

underScore.forEach(function() {
    var underScoreDiv = document.createElement("div")
    underScoreDiv.textContent("_")
    document.getElementById("underscore").appendChild(underScoreDiv);
})


// underScore.forEach(function(underScore) {
//     var underScoreDiv = document.createElement("div");
//     var underScore = document.textContent(underScore);
//     underScoreDiv.appendChild(underScore);
//     document.getElementById("underscore").appendChild(underScore); 

//     console.log(underScore);
//     console.log(underScoreDiv);
// })




// Get user's guess
document.addEventListener("keypress", function(event) {
    var keycode = event.keyCode;
    var keyword = String.fromCharCode(keycode);

// if user guess is right
    if (chosenWord.indexOf(keyword) > -1) {
        console.log(true);
// add to right words array
    rightWord.push(keyword);
    console.log(underScore);
// replace underscor with right letter
    underScore[chosenWord.indexOf(keyword)] = keyword;
// checks to see if user word matches
    if (underScore.join("") == chosenWord) {
        alert("You win!");
    }
}
// add to wrong words array
    console.log(keyword);
    wrongWord.push(keyword);
});

// Check if guess is right

// if right push to right array
// f wrong push to wrong array