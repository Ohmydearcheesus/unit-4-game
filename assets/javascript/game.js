// When the DOM loads....
$(document).ready(function() {
  // Global Variables!

  var currentCount;
  var targetCount;
  var rubyValue;
  var opalValue;
  var emeraldValue;
  var sapphireValue;
  var wins = 0;
  var losses = 0;

  function gemValue() {
    return Math.floor(Math.random() * (12 - 1 + 1) + 1);
  }

  function reset() {
    currentCount = 0;
    $("currentCt").text(currentCount);
    targetCount = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
  }

  function checkWin() {
    if (currentCount === targetCount) {
      alert("you win!");
      wins++;
      $("#Wins").text(wins);
      reset();
    } else if (currentCount > targetCount) {
      alert("you lose!");
      losses++;
      $("#Losses").text(losses);
      reset();
    }
  }
  rubyValue = gemValue();
  opalValue = gemValue();
  emeraldValue = gemValue();
  sapphireValue = gemValue();
  currentCount = 0;
  targetCount = Math.floor(Math.random() * (120 - 19 + 1)) + 19;

  $("#targetCt").text(targetCount);
  // User will click on one of the gems
  //RUBY
  $("#ruby").on("click", function() {
    // Gems will add some # to current points count
    currentCount = rubyValue + currentCount;
    $("#currentCt").text(currentCount);
    checkWin();
  });
  //OPAL
  $("#opal").on("click", function() {
    // Gems will add some # to current points count
    currentCount = opalValue + currentCount;
    $("#currentCt").text(currentCount);
    checkWin();
  });
  // EMERALD
  $("#emerald").on("click", function() {
    // Gems will add some # to current points count
    currentCount = emeraldValue + currentCount;
    $("#currentCt").text(currentCount);
    checkWin();
  });
  //SAPPHIRE
  $("#sapphire").on("click", function() {
    // Gems will add some # to current points count
    currentCount = sapphireValue + currentCount;
    $("#currentCt").text(currentCount);
    checkWin();
  });
  // If the count equals the target value, win!

  // Else if count > target value, lose!
  // console.log(rubyValue, opalValue);
});

//   setup.init();
