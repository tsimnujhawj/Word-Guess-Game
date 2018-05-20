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
    "AFKAC Duck",
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
    "County Duckula",
    "Quackerjack",
    "Abby Mallard"];

    var underScore = [];
    var rightWord = [];
    var wrongWord = [];


// Choose word randomly
var randNum = Math.floor(Math.random() * words.length);
var chosenWord = words[randNum];

console.log(chosenWord);


// function calcGuess(userGuess, randWord)
// { 
//     var userGuess = event.key;
// var randWord = words[(Math.random() * words.length)];
// }
// document.write(randWord);



// Create underscores based on word
var genUnderscore = function() {
    for (var i = 0; i < chosenWord.length; i++) {
        underScore.push("_");
    }
    return underScore;
}

console.log(genUnderscore());
// Get user's guess
document.addEventListener("keypress", function(event) {
    var keycode = event.keyCode;
    var keyword = String.fromCharCode(keycode);
// if user guess is right
    if (chosenWord.indexOf(keyword) > -1) {
        console.log(true);
// add to right words array
    rightWord.push(keyword);
    }
    console.log(keyword);
    wrongWord.push(keyword);

});
// Check if guess is right

// if right push to right array
// f wrong push to wrong array