var newGame = (function () {
	
    var _randomNumber;
    var a, b, difference;
    var isCorrectNumber, isLow, isMediumLow, isMedium, isMediumHigh, isHigh;
    var _reset, _getFeedback, _getDifference;
    a = 10;
    b = 20;
  
    difference = function (firstNumber, secondNumber) {
      return Math.abs(firstNumber - secondNumber)
    };

    isCorrectNumber = function (number) {
      return number === _randomNumber;
    };

    isLow = function (number) {
      return number > 0 && number < 15;
    };
    isLowMedium = function (number) {
      return number >= 15 && number < 25;
    };

    isMedium = function (number) {
      return number >= 25 && number < 35;
    };

    isMediumHigh = function (number) {
      return number >= 35 && number < 50;
    };

    isHigh = function (number) {
      return number >= 50 && number <= 100;
    };
    //TODO: give this feedback here  div#feedback

    //TODO: display count of gueses

    //TODO: display guessed numbers 

    //TODO: validate string

    _reset = function () {
    	_randomNumber = Math.floor((Math.random() * 100) + 1);
    }

    _getDifference = function (a, b){
    	return difference(a,b);
    }

    _getFeedback = function (_number) {
        var diff = difference(_randomNumber, _number);
        if (_number <= 0 || _number > 100) {
          return "No temperature condition met, error with number: " + _number;
        } else if (_number == _randomNumber) {
          return "Perfect";
        } else if (isLow(diff)) {
          return "Burning up!";
        } else if (isLowMedium(diff)) {
          return "Heating up!";
        } else if (isMedium(diff)) {
          return "Warming up!"
        } else if (isMediumHigh(diff)) {
          return "Cooling down!";
        } else if (isHigh(diff)) {
          return "Freezing!"
        }
      }

   _reset();

    return {
    	difference: _getDifference,
    	reset: _reset,
    	getFeedback: _getFeedback
    };

})();

 

$(document).ready(function() {
	$('form').submit(false);
    var guessCounter = 0;
	  /*--- Display information modal box ---*/
    $("#guessButton").click(function() {
		var guess = $("#userGuess").val();
        var result = newGame.getFeedback(guess);
        $("#feedback").text(result);
        $("#count").text(guessCounter+=1);
        $("#guessList").append("<li>" + guess  +"</li>");
    });

    /*--- Display information modal box ---*/
    $("#newGame").click(function() {
      
       guessCounter = 0;
       $("#feedback").text("Make your Guess!");
       $("#count").text(0);
       $("#guessList").empty();
       newgame.reset();

    });

    /*--- Display information modal box ---*/
    $(".what").click(function() {
        $(".overlay").fadeIn(1000);

    });

    /*--- Hide information modal box ---*/
    $("a.close").click(function() {
        $(".overlay").fadeOut(1000);
    });

});
