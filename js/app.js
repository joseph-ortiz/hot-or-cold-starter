var newGame = function () {
	
    var high, mediumHigh, medium, mediumLow, low;
    var _randomNumber;
    var a, b, difference;
    var isCorrectNumber, isLow, isMediumLow, isMedium, isMediumHigh, isHigh;
    //high = 50;
    //mediumHigh = 35;
    //medium = 25;
    //mediumLow = 15;
    //low = 5;
    _randomNumber = Math.floor((Math.random() * 100) + 1);
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

    var reset = function () {
    	throw "TODO: reset guess and randomNumber"
    }

    var getDifference = function (a, b){
    	return difference(a,b);
    }

    var getFeedback = function (_number) {
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

    return {
    	difference: getDifference,
    	reset: reset,
    	getFeedback: getFeedback
    };

};

 

$(document).ready(function() {
	$('form').submit(false);
    var guessCounter = 0;
    newGame();
	  /*--- Display information modal box ---*/
    $("#guessButton").click(function() {
		var guess = $("#userGuess").val();
        var result = newGame().getFeedback(guess);
        $("#feedback").text(result);
        $("#count").text(guessCounter+=1);
        $("#guessList").append("<li>" + guess  +"</li>");

    });

    /*--- Display information modal box ---*/
    $("#newGame").click(function() {
       newGame();
       guessCounter = 0;
       $("#feedback").text("Make your Guess!");
       $("#count").text(0);
       
       $("#guessList").empty();

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
