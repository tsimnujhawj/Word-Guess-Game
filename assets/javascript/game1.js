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
 var playerGuess = [];
 var lives = 10;
 var wrongGuess = [];
 var answerArray = [];

    // Pick a random word
    var word = words[Math.floor(Math.random() * words.length)];
    console.log(word);

    // Set up the answer array
    for (var i = 0; i < word.length; i++) {
    answerArray[i] = "_";
    };
    var remainingLetters = word.length;

    // Press Space to start
    document.getElementById("underscore").innerHTML = "PRESS SPACE TO START";
    document.body.onkeyup = function(startGame) {
        if(startGame.keyCode == 32) {
    
    // Show the player their underscore
    document.getElementById("underscore").innerHTML = answerArray.join(" ");


    // Listen for player's guess
    document.addEventListener("keyup", function() {
    playerGuess = event.key
    console.log(playerGuess);
    console.log(playerGuess !== answerArray[i])
    console.log(answerArray)

                // GAME LOOP
    for (var i = 0; i < word.length; i++) {

                // Check if player's guess is right
            if (word[i] === playerGuess) {
            answerArray[i] = playerGuess;
            remainingLetters--;
            document.getElementById("underscore").innerHTML = answerArray.join(" ");
            document.getElementById("messageBox").innerHTML = "Your guess is RIGHT!";
            }

                // Alert player if player has already guessed the letter
            if (answerArray.includes(playerGuess) === true) {
            document.getElementById("messageBox").innerHTML = "You have guessed " + playerGuess.toUpperCase() + "!";
            }

                // Player guess is wrong
            if (answerArray.indexOf(playerGuess) === -1) {
            wrongGuess.push(playerGuess)
            lives--;
            document.getElementById("messageBox").innerHTML = "Your guess of " + playerGuess.toUpperCase() + " is WRONG!";
            document.getElementById("wrongGuessResult").innerHTML = wrongGuess;
            }

                // Check if player has won
            // if (word === answerArray) {
            // document.getElementById("messageBox").innerHTML = "You have WON! Press ENTER to play again!";
            // }

                // If player's life is 0 then end game
            // if (lives <= 0) {
            // document.getElementById("messageBox").innerHTML = "You have LOST!";
            // }
        }
        
    }
)}
};