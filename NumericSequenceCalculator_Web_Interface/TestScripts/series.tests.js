/// <reference path="C:\Users\z3504028\Source\Repos\WorldNomads-Test\NumericSequenceCalculator_Web_Interface\Scripts/jquery-1.10.2.js" />
/// <reference path="C:\Users\z3504028\Source\Repos\WorldNomads-Test\NumericSequenceCalculator_Web_Interface\Scripts/Default/component.js" />
/// <reference path="C:\Users\z3504028\Source\Repos\WorldNomads-Test\NumericSequenceCalculator_Web_Interface\Scripts/Default/series.js" />
/// <reference path="C:\Users\z3504028\Source\Repos\WorldNomads-Test\NumericSequenceCalculator_Web_Interface\Scripts/Default/Default.js" />

///Test help functions
describe("isEven Function test", function () {
    //variable initilization
    var testVarEven = 2;
    var testVarOdd = 1;
    var testresultEven = null;
    var testresultOdd = null;

    var series = new SR.Series();
    // Test setup 
    beforeEach(function () {
        testresultEven = series.isEven(testVarEven);
        testresultOdd = series.isEven(testVarOdd);
    });

    // actual test
    it("Test Result even should be True", function () {
        expect(testresultEven).toBe(true);
    });
    it("Test Result odd should be false", function () {
        expect(testresultOdd).toBe(false);
    });
})
describe("isOdd Function test", function () {
    //variable initilization
    var testVarEven = 2;
    var testVarOdd = 1;
    var testresultEven = null;
    var testresultOdd = null;

    var series = new SR.Series();
    // Test setup 
    beforeEach(function () {
        testresultEven = series.isOdd(testVarEven);
        testresultOdd = series.isOdd(testVarOdd);
    });

    // actual test
    it("Test Result odd should be False", function () {
        expect(testresultEven).toBe(false);
    });
    it("Test Result odd should be True", function () {
        expect(testresultOdd).toBe(true);
    });
})
describe("isMultiplyByThree Function test", function () {
    //variable initilization
    var testVarMultiplebyThree = 9;
    var testVarNotMultiplyByThree = 4;
    var testresultMultiplebyThree = null;
    var testresultNotMultiplyByThree = null;

    var series = new SR.Series();
    // Test setup 
    beforeEach(function () {
        testresultMultiplebyThree = series.isMultiplyByThree(testVarMultiplebyThree);
        testresultNotMultiplyByThree = series.isMultiplyByThree(testVarNotMultiplyByThree);
    });

    // actual test
    it("Test Result Multiple by three should be True", function () {
        expect(testresultMultiplebyThree).toBe(true);
    });
    it("Test Result not Multiple by three should be false", function () {
        expect(testresultNotMultiplyByThree).toBe(false);
    });
})
describe("isMultiplyByFive Function test", function () {
    //variable initilization
    var testVarMultiplebyFive = 15;
    var testVarNotMultiplyByFive = 17;
    var testresultMultiplebyFive = null;
    var testresultNotMultiplyByFive = null;

    var series = new SR.Series();
    // Test setup 
    beforeEach(function () {
        testresultMultiplebyFive = series.isMultiplyByThree(testVarMultiplebyFive);
        testresultNotMultiplyByFive = series.isMultiplyByThree(testVarNotMultiplyByFive);
    });

    // actual test
    it("Test Result Multiple by Five should be True", function () {
        expect(testresultMultiplebyFive).toBe(true);
    });
    it("Test Result not Multiple by Five should be false", function () {
        expect(testresultNotMultiplyByFive).toBe(false);
    });
})