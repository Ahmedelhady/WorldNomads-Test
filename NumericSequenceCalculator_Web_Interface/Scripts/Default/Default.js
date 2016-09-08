var SR = SR || {};
SR.init = function () {
    SR.series = new SR.Series();
    SR.series.init(function () {
        SR.series.initFunc();
    });
}

SR.init();
//(function ($) {
//    ////Intitialization
//    $('#selectedSequence').attr("disabled", "disabled").siblings().removeAttr("disabled");
//    $('#txtPatternNumber').attr("disabled", "disabled");
//    $('#lblResult').text('[]').attr("disabled", "disabled");
//    $('#lblResultUp').text('[]').attr("disabled", "disabled");
//    $('#lblResultOdd').text('[]').attr("disabled", "disabled");
//    $('#lblResultEven').text('[]').attr("disabled", "disabled");
//    $('#lblResultSpecial').text('[]').attr("disabled", "disabled");
//    $('#lblResultFibo').text('[]').attr("disabled", "disabled");
//    ////Input number textbox
//    $('#txtNumber').keyup(function () {
//        //Positive and whole Digits.
//        var rex = new RegExp(/^[0-9]+$/);
//        //If True
//        if (rex.test($(this).val())) {
//            $('#selectedSequence').removeAttr("disabled");
//            $('#lblwarning').text('');
//            generateSequenceResults($(this).val());

//            if ($('#selectedSequence').val() != 0) {
//                if ($('#selectedSequence').val() != 1 && $('#selectedSequence').val() != 2)
//                    $('#lblResult').text(generateSequenceResult($('#selectedSequence').val(), $(this).val(), null));
//                else if ($('#selectedSequence').val() == 1 || $('#selectedSequence').val() == 2) {
//                    if (rex.test($('#txtPatternNumber').val()))
//                        $('#lblResult').text(generateSequenceResult($('#selectedSequence').val(), $(this).val(), $('#txtPatternNumber').val()));
//                }
//            }
//            else
//                $('#lblwarning').text('Please select a Sequence from the list');
//        }
//        else {
//            $('#selectedSequence').attr("disabled", "disabled").siblings().removeAttr("disabled");
//            $('#lblwarning').text('Please enter positive, whole numbers only!!');
//            $('#txtPatternNumber').attr("disabled", "disabled");
//            $('#lblResult').text('[]');
//            $('#lblResultUp').text('[]');
//            $('#lblResultOdd').text('[]');
//            $('#lblResultEven').text('[]');
//            $('#lblResultSpecial').text('[]');
//            $('#lblResultFibo').text('[]');
//        }
//    })
//    /////pattern textbox
//    $('#txtPatternNumber').keyup(function () {
//        //Positive and whole Digits.
//        var rex = new RegExp(/^[0-9]+$/);
//        //If True
//        if (rex.test($(this).val())) {
//            $('#lblPatternWarning').text('');
//            $('#lblResult').text(generateSequenceResult($('#selectedSequence').val(), $('#txtNumber').val(), $(this).val()));
//        }
//        else
//            $('#lblPatternWarning').text('Please enter positive, whole numbers only!!');
//    });
//    ////Sequences dropdown list
//    $("#selectedSequence").off().on("change", function (e, v) {
//        //if the user selects sequence that does not require a pattern insertion
//        if ($('#selectedSequence').val() != 0) {
//            if ($(this).val() != 1 && $(this).val() != 2) {
//                $('#txtPatternNumber').attr("disabled", "disabled");
//                $('#lblResult').text(generateSequenceResult($(this).val(), $('#txtNumber').val(), null));
//            }
//            else {
//                $('#txtPatternNumber').removeAttr("disabled");
//                if ($('#txtPatternNumber').val() != "")
//                    $('#lblResult').text(generateSequenceResult($(this).val(), $('#txtNumber').val(), $('#txtPatternNumber').val()));
//                else
//                    $('#lblPatternWarning').text('Please enter Pattern');
//            }
//        }
//        else {
//            $('#lblwarning').text('Please select a Sequence from the list');
//            $('#lblResult').text('[]');
//        }
//    });
//}(jQuery)
//);
/////Generate selected sequence result
//function generateSequenceResult(sequenceVal, inputNumebr, Pattern) {
//    var resultString = "";
//    var intvalue = parseInt(inputNumebr);
//    //The user has selected either Arithmetic or Geometric
//    if (Pattern) {
//        resultString = "[" + inputNumebr + ", ";
//        if (sequenceVal == 1) {
//            for (var i = 0; i < 10; i++) {
//                intvalue += parseInt(Pattern);
//                resultString += String(intvalue) + ', ';
//            }

//        }
//        else if (sequenceVal == 2) {
//            for (var i = 0; i < 10; i++) {
//                intvalue *= parseInt(Pattern);
//                resultString += String(intvalue) + ', ';
//            }
//        }
//    }
//    else {
//        resultString = "[";
//        if (sequenceVal == 3) {
//            for (var i = 0; i < 10; i++) {
//                resultString += String(Math.pow(intvalue + i, 2)) + ', ';
//            }

//        }
//        else if (sequenceVal == 4) {
//            for (var i = 0; i < 10; i++) {
//                resultString += String(Math.pow(intvalue + i, 3)) + ', ';
//            }
//        }
//    }
//    resultString += "......]";
//    return resultString;
//}
/////Generate all the sequences
//function generateSequenceResults(inputNumebr) {
//    var allResultString = [], allOddResultString = [], allEvenResultString = [], allSpecResultString = [];

//    var intvalue = parseInt(inputNumebr);
//    for (var i = 0; i < intvalue; i++) {
//        allResultString.push(i);
//        if (isEven(i))
//            allEvenResultString.push(i);
//        if (isOdd(i))
//            allOddResultString.push(i);
//        if (isMultiplyByThree(i) && isMultiplyByFive(i)) {
//            allSpecResultString.push('Z');
//            continue;
//        }
//        else if (isMultiplyByThree(i)) {
//            allSpecResultString.push('C');
//            continue;
//        }
//        else if (isMultiplyByFive(i)) {
//            allSpecResultString.push('E');
//            continue;
//        }
//        else
//            allSpecResultString.push(i);
//    }
//    allResultString.push(intvalue);
//    allOddResultString.push(intvalue);
//    allEvenResultString.push(intvalue);
//    allSpecResultString.push(intvalue);

//    $('#lblResultUp').text('[' + String(allResultString) + ']');
//    $('#lblResultOdd').text('[' + String(allOddResultString) + ']');
//    $('#lblResultEven').text('[' + String(allEvenResultString) + ']');
//    $('#lblResultSpecial').text('[' + String(allSpecResultString) + ']');
//    $('#lblResultFibo').text('[' + String(generateFibonacciSeries(intvalue)) + ']');
//}
//function isEven(x) { return (x%2)==0; }
//function isOdd(x) { return !isEven(x); }
//function isMultiplyByThree(x) { return (x % 3) == 0; }
//function isMultiplyByFive(x) { return (x % 5) == 0; }
////Generate Fibonacci series
//function generateFibonacciSeries(x) {
//    var fList = [];
//    fList.push(0);
//    fList.push(1);
//    for (var i = 0; i < x; i++) {
//        if (fList[i] + fList[i + 1] < x)
//                fList.push(fList[i]+fList[i+1]);
//    }
//    fList.push(x);
//    return fList;
//}