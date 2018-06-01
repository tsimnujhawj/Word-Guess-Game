// Create an array of Words
// var words = [
//     "Mighty Ducks",
//     "Donald Duck",
//     "AFLAC Duck",
//     "Daffy Duck",
//     "Howard the Duck",
//     "Rubber Duckie",
//     "Plucky Duck",
//     "Daisy Duck",
//     "Darkwing Duck",
//     "Scrooge McDuck",
//     "Ludwig Von Drake",
//     "Della Duck",
//     "Baby Huey",
//     "Melissa Duck",
//     "Huey",
//     "Dewey",
//     "Louie",
//     "Launchpad McQuack",
//     "Webby Vanderquack",
//     "NegaDuck",
//     "Howard the Duck",
//     "Yakky Doodle",
//     "Count Duckula",
//     "Quackerjack",
//     "Abby Mallard"];

//     var underScore = [];
//     var rightWord = [];
//     var wrongWord = [];


// // Choose word randomly
// var randNum = Math.floor(Math.random() * words.length);
// var chosenWord = words[randNum];
// console.log(chosenWord);

// // Set up the answer array
// var answerArray = [];
// for (var i = 0; i < chosenWord.length; i++) {
//     answerArray[i] = "_";
// }
// var remainingLetters = chosenWord.length;

// // GAME LOOP //
// while (remainingLetters > 0) {
//     // Print underscore based on amount of letters
// document.getElementById("underscore").innerHTML = answerArray.join(" ");
//     // Listens for keypress
// document.addEventListener("keypress", function() {
//     var keyCode = event.key;
//     if (chosenWord[i] === keyCode) {
//         answerArray[i] = keyCode;
//         remainingLetters--;
    
//     }})};

    // Create an array of words
 var words = [
    "javascript",
    "monkey",
    "amazing",
    "pancake"
    ];

 var word = "";
 var playerGuess = [];
 var lives = 10;
 var wrongGuess = [];
 var answerArray = [];
 var wins = 0;
 var losses = 0;
 var lettersGuessed = {
     cache: []
 };
 var setState = "dead";

// Begin the game
window.onload = document.getElementById("underscore").innerHTML = "Category: Famous ducks";

//Begin function
function begin() {
setState = "play";
gameStart()
}

// GAME LOOP
function gameStart() {
if (setState === "play") {

answerArray = [];
lives = 10;
wrongGuess = [];
lettersGuessed = {
cache: [],
};


    // Pick a random word
    word = words[Math.floor(Math.random() * words.length)];

        // Set up the answer array
        for (var i = 0; i < word.length; i++) {
        answerArray[i] = "_";
        };
    }
    
    else { // DEAD STATE
    document.getElementById("messageBox").innerHTML = "Click PLAY";
    }

document.getElementById("underscore").innerHTML = answerArray.join(" ");
document.getElementById("lifeBox").innerHTML = lives;
document.getElementById("winsBox").innerHTML = wins;
document.getElementById("lossesBox").innerHTML = losses;

    console.log(playerGuess)
    console.log(answerArray)
    console.log(lettersGuessed)
    console.log(word)
    console.log(wrongGuess)
};


// Check if player has won
function checkWin() {
    if (answerArray.indexOf("_") === -1) {
    setState = "dead"
    wins++;
    document.getElementById("winsBox").innerHTML = wins;
    document.getElementById("messageBox").innerHTML = "You WON!";
    gameStart()
    } else {

    }
}

    // // Check if player has lost
    // function checkLost() {
    //     if (lives <= 0) {
    //     document.getElementById("messageBox").innerHTML = "You have LOST! Press ENTER to play again!";
    //     losses++;
    //     console.log("Losses " + losses);
    //         } else {
    //             wrongGuess.push(playerGuess);
    //             document.getElementById("wrongGuessResult").innerHTML = wrongGuess.join(" ");
    //             document.getElementById("messageBox").innerHTML = "Your guess is WRONG!";
    //             lives--;
    //         }
    //     }



    // Listen for player's guess
    document.addEventListener("keyup", function() {
        playerGuess = event.key.toLowerCase();

        // Check if guess is wrong
        if (word.includes(playerGuess) === false) {
            wrongGuess = playerGuess;
            document.getElementById("wrongGuessResult").innerHTML = wrongGuess;
            document.getElementById("messageBox").innerHTML = "Your guess is WRONG!";
            console.log(word.includes(playerGuess));
        }

    for (var i = 0; i < word.length; i++) {

                // Check if player's guess is right
            if (word[i].includes(playerGuess)) {
            lettersGuessed.cache.push(playerGuess);
            answerArray[i] = playerGuess;
            document.getElementById("underscore").innerHTML = answerArray.join(" ");
            document.getElementById("messageBox").innerHTML = "You have guessed RIGHT!";
            checkWin();
            };


            // document.addEventListener("keyup", function () {
            //     if(event.keyCode == 13) {
            //     gameStart();
            // }})

                // Player already guessed wrong
            // if (wrongGuess.includes(playerGuess) === true) {
            // var wrongGuessAlready = true;
            // document.getElementById("messageBox").innerHTML = "Your guess of " + playerGuess.toUpperCase() + " is WRONG!";
            // }

            //     // Player guessed wrong
            // if (answerArray.indexOf(playerGuess) === -1 && wrongGuessAlready !== true) {
            // wrongGuess.push(playerGuess)
            // lives--;
            // document.getElementById("messageBox").innerHTML = "Your guess of " + playerGuess.toUpperCase() + " is WRONG!";
            // document.getElementById("wrongGuessResult").innerHTML = wrongGuess.join(" ");
            // checkLost();
            // }

            // if (wrongGuess.includes(playerGuess) === true) {
            //     var wrongGuessAlready = true;
            //     document.getElementById("messageBox").innerHTML = "Your guess is WRONG!";
            //     }
            
            //     // Player guessed wrong
            //     else if (answerArray.indexOf(playerGuess) === -1 && wrongGuessAlready !== true) {
            //     wrongGuess.push(playerGuess)
            //     lives--;
            //     document.getElementById("messageBox").innerHTML = "Your guess is WRONG!";
            //     document.getElementById("wrongGuessResult").innerHTML = wrongGuess.join(" ");
            //     // checkLost();
            //     }

        }
    
});