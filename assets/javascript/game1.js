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

    // Pick a random word
    var word = words[Math.floor(Math.random() * words.length)];
    console.log(word);

    // Set up the answer array
    var answerArray = [];
    for (var i = 0; i < word.length; i++) {
    answerArray[i] = "_";
    }
    var remainingLetters = word.length;

    // Show the player their progress
    document.getElementById("underscore").innerHTML = answerArray.join(" ");

    // Get a guess from the player
    document.addEventListener("keypress", function() {
    playerGuess = event.key
    console.log(playerGuess);

    for (var i = 0; i < word.length; i++) {
        if (word[i] === playerGuess) {
            answerArray[i] = playerGuess;
            remainingLetters--;
            document.getElementById("underscore").innerHTML = answerArray.join(" ");
        }
    }

    });