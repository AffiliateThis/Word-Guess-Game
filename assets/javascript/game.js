var musicians = [
  "  Billy Cohbam ",
  "  Al Di Meola",
  " Stanley Clarke",
  " Chick Corea ",
  " Jaco Pastorius",
  "Wayne Shorter"
];

// var musicianType = musicians[Math.floor(Math.random() * musicians.length)];

// document.getElementById("button1").addEventListener("click", function() {
//   alert("This is about to start");
// });

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

while (remainingLetters > 0) {}

var guess = prompt("Guess a letter, or click Cancel to stop playing");

//     if (musicianType[i] === letter) {
//         answerArray[i] = letter;
//     }

// }

// count++;

// $("#musicians").html("<h1>Drink UP!</h1>");

// function showmessage() {
//   let message = 0;
// }

// $(".load-first").click(function() {
//   $(".load-container").load("/test-1.html", function() {
//     // now load-second button is available, register the click handler
//     $(".load-second").click(function() {
//       $(".load-container").load("/test-2.html", function() {
//         // now load-third button is available, register the click handler
//         $(".load-third").click(function() {
//           $(".load-container").load("/test-3.html");
//         });
//       });
//     });
//   });
// });
