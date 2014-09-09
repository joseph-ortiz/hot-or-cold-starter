describe("FizzBuzz Suite: ", function () {

  var high, mediumHigh, medium, mediumLow, low;
  var _randomNumber;

  var a, b, difference;
  var isCorrectNumber, isLow, isLowMedium, isMedium, isMediumHigh, isHigh;

  beforeEach(function () {
    high = 50;
    mediumHigh = 35;
    medium = 25;
    mediumLow = 15;
    low = 5;
    _randomNumber = 1;
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
  });




  it("The difference between numbers should be absolute", function () {
    expect(difference(20, 10)).toBe(10);
  });

  it("isCorrectNumber guess with 0", function () {
    expect(isCorrectNumber(0)).toBe(false);
  });

  it("isCorrectNumber guess with 1", function () {
    expect(isCorrectNumber(1)).toBe(true);
  });

  it("isCorrectNumber guess with 2", function () {
    expect(isCorrectNumber(2)).toBe(false);
  });



  describe("IsLow: ", function () {
    function loopIsLowGuess(input) {
      it("isLow guess with " + input, function () {
        expect(isLow(input)).toBe(true);
      });
    }

    function loopInvalidIsLowGuess(input) {
      it("isLow guess with " + input, function () {
        expect(isLow(input)).toBe(false);
      });
    }
    for (var i = low; i < high; i++) {
      loopIsLowGuess(i);
    }
    for (var i = medium; i < mediumHigh; i++) {
      loopIsLowGuess(i);
    }
  });

  describe("IsLowSuite: ", function () {
    function loopIsLowGuess(input) {
      it("isLow guess with " + input, function () {
        expect(isLow(input)).toBe(true);
      });
    }
    for (var i = 5; i < high; i++) {
      loopIsLowGuess(i);
    }
  });



  //TODO:Create isLowMedium Test Suite, automate possible answers
  it("isLowMedium guess with 15", function () {
    expect(isLowMedium(15)).toBe(true);
  });

  it("isLowMedium guess with 20", function () {
    expect(isLowMedium(20)).toBe(true);
  });

  it("isLowMedium guess with 25", function () {
    expect(isLowMedium(25)).toBe(false);
  });



  //TODO:Create isMedium Test Suite
  it("isMedium guess with 25", function () {
    expect(isMedium(25)).toBe(true);
  });

  it("isMedium guess with 30", function () {
    expect(isMedium(30)).toBe(true);
  });

  it("isMedium guess with 35", function () {
    expect(isMedium(35)).toBe(false);
  });



  describe("Testing Feeback: ", function () {

    var getFeedback;
    beforeEach(function () {
      //TODO: Determine condition

      getFeedback = function (_number) {
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
    });
    it("GetFeedback with invalid guess", function () {
      expect(getFeedback(0)).toBe("No temperature condition met, error with number: " + 0);
    });
    it("GetFeedback with correct guess", function () {
      expect(getFeedback(1)).toBe("Perfect");
    });
    it("GetFeedback -->IsLow -->Burning up guess", function () {
      expect(getFeedback(5)).toBe("Burning up!");
    });
    it("GetFeedback --> IsLowMedium --> Heating Up guess of 15", function () {
      expect(getFeedback(16)).toBe("Heating up!");
    });
    it("GetFeedback --> isMedium -->Warming Up guess", function () {
      expect(getFeedback(26)).toBe("Warming up!");
    });
    it("GetFeedback --> isMediumHigh -->Cooling down  guess", function () {
      expect(getFeedback(36)).toBe("Cooling down!");
    });

    it("GetFeedback --> isHigh -->Freezing guess", function () {
      expect(getFeedback(51)).toBe("Freezing!");
    });
  });
});
