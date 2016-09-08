SR.Series = function () {
    this.lblResult = $('#lblResult');
    this.lblResultUp = $('#lblResultUp');
    this.lblResultOdd = $('#lblResultOdd');
    this.lblResultEven = $('#lblResultEven');
    this.lblResultSpecial = $('#lblResultSpecial');
    this.lblResultFibo = $('#lblResultFibo');

    this.txtPatternNumber = $('#txtPatternNumber');
    this.txtNumber = $('#txtNumber');
    this.txtPatternNumber = $('#txtPatternNumber');
    this.selectedSequence = $('#selectedSequence');
    this.lblwarning = $('#lblwarning');
    this.lblPatternWarning = $('#lblPatternWarning');
    this.allResultString = [];
    this.allOddResultString = [];
    this.allEvenResultString = [];
    this.allSpecResultString = [];
    this.allFiboResultString = [];
};

SR.Series.prototype = Object.create(SR.Component.prototype);
SR.Series.prototype.constructor = SR.Series.prototype.constructor;

SR.Series.prototype.init = function (callback) {
    var self = this;
    ////Intitialization
    self.selectedSequence.attr("disabled", "disabled").siblings().removeAttr("disabled");
    self.txtPatternNumber.attr("disabled", "disabled");
    self.lblResult.text('[]').attr("disabled", "disabled");
    self.lblResultUp.text('[]').attr("disabled", "disabled");
    self.lblResultOdd.text('[]').attr("disabled", "disabled");
    self.lblResultEven.text('[]').attr("disabled", "disabled");
    self.lblResultSpecial.text('[]').attr("disabled", "disabled");
    self.lblResultFibo.text('[]').attr("disabled", "disabled");
    callback();
};
SR.Series.prototype.initFunc = function (callback) {
    var self = this;
    ////Input number textbox
    self.txtNumber.keyup(function () {
        //Positive and whole Digits.
        var rex = new RegExp(/^[0-9]+$/);
        //If True
        if (rex.test($(this).val())) {
            self.selectedSequence.removeAttr("disabled");
            self.lblwarning.text('');
            self.generateSequenceResults($(this).val());

            if (self.selectedSequence.val() != 0) {
                if (self.selectedSequence.val() != 1 && self.selectedSequence.val() != 2)
                    self.lblResult.text(self.generateSequenceResult(self.selectedSequence.val(), $(this).val(), null));
                else if (self.selectedSequence.val() == 1 || self.selectedSequence.val() == 2) {
                    {
                        self.txtPatternNumber.removeAttr("disabled");
                        if (rex.test(self.txtPatternNumber.val()))
                            self.lblResult.text(self.generateSequenceResult(self.selectedSequence.val(), $(this).val(), self.txtPatternNumber.val()));
                    }
                }
            }
            else
                self.lblwarning.text('Please select a Sequence from the list');
        }
        else {
            self.selectedSequence.attr("disabled", "disabled").siblings().removeAttr("disabled");
            self.lblwarning.text('Please enter positive, whole numbers only!!');
            self.txtPatternNumber.attr("disabled", "disabled");
            self.lblResult.text('[]');
            self.lblResultUp.text('[]');
            self.lblResultOdd.text('[]');
            self.lblResultEven.text('[]');
            self.lblResultSpecial.text('[]');
            self.lblResultFibo.text('[]');
        }
    })
    /////pattern textbox
    self.txtPatternNumber.keyup(function () {
        //Positive and whole Digits.
        var rex = new RegExp(/^[0-9]+$/);
        //If True
        if (rex.test($(this).val())) {
            self.lblPatternWarning.text('');
            self.lblResult.text(self.generateSequenceResult($('#selectedSequence').val(), self.txtNumber.val(), $(this).val()));
        }
        else
            self.lblPatternWarning.text('Please enter positive, whole numbers only!!');
    });
    ////Sequences dropdown list
    self.selectedSequence.off().on("change", function (e, v) {
        //if the user selects sequence that does not require a pattern insertion
        if (self.selectedSequence.val() != 0) {
            if ($(this).val() != 1 && $(this).val() != 2) {
                self.txtPatternNumber.attr("disabled", "disabled");
                self.lblResult.text(self.generateSequenceResult($(this).val(), self.txtNumber.val(), null));
            }
            else {
                self.txtPatternNumber.removeAttr("disabled");
                if (self.txtPatternNumber.val() != "")
                    self.lblResult.text(self.generateSequenceResult($(this).val(), self.txtNumber.val(), self.txtPatternNumber.val()));
                else
                    self.lblPatternWarning.text('Please enter Pattern');
            }
        }
        else {
            self.lblwarning.text('Please select a Sequence from the list');
            self.lblResult.text('[]');
        }
    });
}

///Generate selected sequence result
SR.Series.prototype.generateSequenceResult = function (sequenceVal, inputNumebr, Pattern) {
    var self = this;
    var resultString = "";
    var intvalue = parseInt(inputNumebr);
    //The user has selected either Arithmetic or Geometric
    if (Pattern) {
        resultString = "[" + inputNumebr + ", ";
        if (sequenceVal == 1) {
            for (var i = 0; i < 10; i++) {
                intvalue += parseInt(Pattern);
                resultString += String(intvalue) + ', ';
            }

        }
        else if (sequenceVal == 2) {
            for (var i = 0; i < 10; i++) {
                intvalue *= parseInt(Pattern);
                resultString += String(intvalue) + ', ';
            }
        }
    }
    else {
        resultString = "[";
        if (sequenceVal == 3) {
            for (var i = 0; i < 10; i++) {
                resultString += String(Math.pow(intvalue + i, 2)) + ', ';
            }

        }
        else if (sequenceVal == 4) {
            for (var i = 0; i < 10; i++) {
                resultString += String(Math.pow(intvalue + i, 3)) + ', ';
            }
        }
    }
    resultString += "......]";
    return resultString;
}
///Generate all the sequences
SR.Series.prototype.generateSequenceResults = function (inputNumebr) {
    var self = this;
    self.allResultString = [];
    self.allOddResultString = [];
    self.allEvenResultString = [];
    self.allSpecResultString = [];
    self.allFiboResultString = [];

    var intvalue = parseInt(inputNumebr);
    for (var i = 0; i < intvalue; i++) {
        self.allResultString.push(i);
        if (self.isEven(i))
            self.allEvenResultString.push(i);
        if (self.isOdd(i))
            self.allOddResultString.push(i);
        if (self.isMultiplyByThree(i) && self.isMultiplyByFive(i)) {
            self.allSpecResultString.push('Z');
            continue;
        }
        else if (self.isMultiplyByThree(i)) {
            self.allSpecResultString.push('C');
            continue;
        }
        else if (self.isMultiplyByFive(i)) {
            self.allSpecResultString.push('E');
            continue;
        }
        else
            self.allSpecResultString.push(i);
    }
    self.allResultString.push(intvalue);
    self.allOddResultString.push(intvalue);
    self.allEvenResultString.push(intvalue);
    self.allSpecResultString.push(intvalue);

    self.lblResultUp.text('[' + String(self.allResultString) + ']');
    self.lblResultOdd.text('[' + String(self.allOddResultString) + ']');
    self.lblResultEven.text('[' + String(self.allEvenResultString) + ']');
    self.lblResultSpecial.text('[' + String(self.allSpecResultString) + ']');
    self.lblResultFibo.text('[' + String(self.generateFibonacciSeries(intvalue)) + ']');
}
SR.Series.prototype.isEven = function (x) { return (x % 2) == 0; }
SR.Series.prototype.isOdd = function (x) {
    var self = this;
    return !self.isEven(x);
}
SR.Series.prototype.isMultiplyByThree = function (x) { return (x % 3) == 0; }
SR.Series.prototype.isMultiplyByFive = function (x) { return (x % 5) == 0; }
//Generate Fibonacci series
SR.Series.prototype.generateFibonacciSeries = function (x) {
    var self = this;
    self.allFiboResultString.push(0);
    self.allFiboResultString.push(1);
    for (var i = 0; i < x; i++) {
        if (self.allFiboResultString[i] + self.allFiboResultString[i + 1] < x)
            self.allFiboResultString.push(self.allFiboResultString[i] + self.allFiboResultString[i + 1]);
    }
    self.allFiboResultString.push(x);
    return self.allFiboResultString;
}