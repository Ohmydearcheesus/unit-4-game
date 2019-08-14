//------------Global Variables and Functions!--------------

// Scoreboard Values
var currentCount;
var targetCount;
var wins;
var losses;

// Target and Gem value ranges
var gemMin = 1;
var gemMax = 13;
var targetMin = 19;
var targetMax = 121;

// RNGeezus
function randomNum(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

// Restart the game when the player wins or loses a round
function restart() {
  currentCount = 0;
  targetValue.getNewVal();
  targetValue.appendVal();
  ruby.getNewVal();
  sapphire.getNewVal();
  emerald.getNewVal();
  opal.getNewVal();
}

// Makes a new game when combined with the restart function. Discards all current win/loss scoring.
function newGame() {
  wins = 0;
  losses = 0;
}

//------------Objects and Classes!-------------

// Blueprint for all Gem objects
class Gem {
  constructor(newType, startVal) {
    this.type = newType;
    this.currentVal = startVal;
  }

  // Resets the gem's value. Used when creating a new game instance
  getNewVal() {
    this.currentVal = randomNum(gemMin, gemMax);
    return this.currentVal;
  }

  // Adds to the currentCount variable that keeps track of the player's accumulated value.
  // Also updates to the HTML the new value the player has.
  appendVal() {
    currentCount = currentCount + this.currentVal;
    $("#currentCt").text(currentCount);
    return currentCount;
  }
}

// Creates each of the four gem objects!
const ruby = new Gem("ruby", randomNum(gemMin, gemMax));
const sapphire = new Gem("sapphire", randomNum(gemMin, gemMax));
const emerald = new Gem("emerald", randomNum(gemMin, gemMax));
const opal = new Gem("opal", randomNum(gemMin, gemMax));

// Target Value object
var targetValue = {
  getNewVal: function() {
    targetCount = randomNum(targetMin, targetMax);
  },
  appendVal: function() {
    $("#targetCt").text(targetCount);
  }
};

//
//
//
//------------When the DOM loads....-------------
$(document).ready(function() {
  restart();
  newGame();

  // Each of the Gem divs are given an onclick handler that appends Gem value to player's target value, both in the code variable and the HTML div
  $("#ruby").on("click", function() {
    ruby.appendVal();
  });

  $("#sapphire").on("click", function() {
    sapphire.appendVal();
  });

  $("#emerald").on("click", function() {
    emerald.appendVal();
  });

  $("#opal").on("click", function() {
    opal.appendVal();
  });
});
