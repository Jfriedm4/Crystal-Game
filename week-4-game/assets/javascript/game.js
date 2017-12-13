$(function(){

  var targetNumber = Math.floor(Math.random() * 73) + 27;
  $("#targetNumber").text(targetNumber);

  var counter = 0;
  var wins = 0;
  var losses = 0;

  var numberOptions = [13, 7, 5, 2];
  var imageOptions = ["assets/images/game/exoticEngram.png", "assets/images/game/legendaryEngram.png", "assets/images/game/rareEngram.png", "assets/images/game/uncommonEngram.png"];

  var winOptions = ["assets/images/game/win/gjallarhorn.jpg", "assets/images/game/win/lastWord.jpg", "assets/images/game/win/vexMythoclast.jpg"];

  // reset #targetNumber function
  function resetTargetNumber() {
    var targetNumber = Math.floor(Math.random() * 73) + 27;
    $("#targetNumber").text(targetNumber);
  }

  // win function
  function win() {
    wins++;
    $("#wins").text(wins);
    counter = 0;
    $("#currentScore").text("");
    resetTargetNumber();
  }

  // loss function
  function loss() {
    losses++;
    $("#losses").text(losses);
    counter = 0;
    $("#currentScore").text("");
    resetTargetNumber();
  }


  // loop to make engrams
  for (var i = 0; i < numberOptions.length; i++) {
    var imageEngram = $("<img>");
    imageEngram.addClass("engram-image");
    imageEngram.attr("src", imageOptions[i]);
    imageEngram.attr("data-engramValue", numberOptions[i]);
    $("#engrams").append(imageEngram);
  }

  // clicking engrams to increase score
  $(".engram-image").on("click", function() {
    var engramValue = ($(this).attr("data-engramValue"));
    engramValue = parseInt(engramValue);
    counter += engramValue;
    $("#currentScore").html(counter);
    console.log(counter);

    if (counter === targetNumber) {
      win();
    }

    else if (counter >= targetNumber) {
      loss();
    }

  });

  // button to reset game
  $("#resetBtn").on("click", function(){
    counter = 0;
    resetTargetNumber();
    $("#currentScore").text("");
    $("#wins").text("0");
    $("#losses").text("0");
    $(".prize").html("");
  });

});
