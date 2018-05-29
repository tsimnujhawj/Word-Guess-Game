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
        underScore.push("_ ");
    }
    return underScore;
};

// Print underscore based on amount of letters
document.getElementById("underscore").innerHTML = genUnderscore().join(" ");

// Get user's guess
document.addEventListener("keypress", function() {
var keyCode = event.key;
console.log(keyCode);

// });

// // if user guess is right
    // if (chosenWord.indexOf(keyCode) > -1) {

    //     // // add to right words array
    //     rightWord.push(keyCode);
    //     // replace underscore with right letter
        if (keyCode === chosenWord.charAt(keyCode)) {

        document.getElementById("underscore").innerHTML = rightWord.join(" ");

    } else {
        wrongWord.push(keyCode);
        document.getElementById("wrongGuessResult").innerHTML = wrongWord.join(" ")
    };


//     underScore[chosenWord.indexOf(keyword)] = keyword;

// // checks to see if user word matches
//     if (underScore.join("") == chosenWord) {
//         alert("You win!");
//     }
// }
// // add to wrong words array
//     console.log(keyword);
//     wrongWord.push(keyword);
});

// Check if guess is right

// if right push to right array
// f wrong push to wrong array