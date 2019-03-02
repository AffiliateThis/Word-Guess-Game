// I can't seem to preview this and console log it in the browser

var musicians = [
  "  Billy Cohbam ",
  "  Al Di Meola",
  " Stanley Clarke",
  " Chick Corea ",
  " Jaco Pastorius",
  "Wayne Shorter"
];

var s;
var count = 0;
var answerArray = [];

var musicianType = musicians[Math.floor(Math.random() * musicians.length)];

document.getElementById("button1").addEventListener("click", function() {
  alert("This is about to start");
});

function click() {
  for (var i = 0; i < musicianType.length; i++) {
    answerArray[i] = "_";
  }
}

var word = musicianType;
var remainingLetters = word.length;

// while (remainingLetters > 0) {}

var guess = prompt("Guess a letter, or click Cancel to stop playing");

// if the player guesses and it is incorrect, it is null

// if (guess === null){

// break;
// }
// } else if (guess.length !== 1) {
//   alert ("Please enter a letter");
// } else {

// for (var j)
// }

//     if (musicianType[i] === letter) {
//         answerArray[i] = letter;
//     }

// }

// count++;

// function showmessage() {
//   let message = 0;
// }
