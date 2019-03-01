var questionList = [
  " Who is my favorite drummer from the jazz fusion era?: Billy Cohbam ",
  " Who is my favorite guitarist from the jazz fusion era?: Al Di Meola",
  " Who is my favorite bass player from the jazz fusion era: Stanley Clarke",
  " Who is my favorite keyboardist from the jazz fusion era: Chick Corea",
  " Which is my favorite band from the jazz fusion era: Return to Forever"
];

$("#target").keyup(function() {
  alert("btn btn-primary btn-lg.keydown() called.");
});

$("#musicians").html("<h1>Drink UP!</h1>");

function showmessage() {
  let message = 0;
}

$(".load-first").click(function() {
  $(".load-container").load("/test-1.html", function() {
    // now load-second button is available, register the click handler
    $(".load-second").click(function() {
      $(".load-container").load("/test-2.html", function() {
        // now load-third button is available, register the click handler
        $(".load-third").click(function() {
          $(".load-container").load("/test-3.html");
        });
      });
    });
  });
});
