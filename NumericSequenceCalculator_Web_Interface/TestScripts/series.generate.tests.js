﻿/// <reference path="..\Scripts/jquery-1.10.2.js" />
/// <reference path="..\Scripts/Default/component.js" />
/// <reference path="..\Scripts/Default/series.js" />

///Test Generated series
//Test Fibonacci series
'use strict';
describe("generateFibonacciSeries Function test", function () {
    //variable initilization
    var endvariable1 = 145;
    var testFiboList1 = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 145];
    var testFiboList2 = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 145];
    var testresult = null;
    var testresult2 = null;

    var series = new SR.Series();
    // Test setup 
    beforeEach(function () {
        testresult = series.generateFibonacciSeries(endvariable1);
        testresult2 = series.generateFibonacciSeries(endvariable1);
    });

    // actual test
    it("Test Result generated by Fibonacci function should be equals to testFiboList1", function () {
        expect(String(testresult)).toBe(String(testFiboList1));
    });
    it("Test Result generated by Fibonacci function should not be equals to testFiboList2", function () {
        expect(String(testresult2)).not.toBe(String(testFiboList2));
    });
})
//Test all items series
describe("generateAllnumbers test", function () {
    //variable initilization
    var endvariable1 = 20;
    var testList1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
    var testList2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
    var testresult = null;

    var series = new SR.Series();
    // Test setup 
    beforeEach(function () {
        testresult = series.generateSequenceResults(endvariable1);
    });

    // actual test
    it("All numbers list generated by generateSequenceResults function should be equals to All numbers list", function () {
        expect(String(testList1)).toBe(String(series.allResultString));
    });
    it("All numbers list generated by generateSequenceResults function should not be equals to All numbers list", function () {
        expect(String(testList2)).not.toBe(String(series.allResultString));
    });
})
//Test odd numbers series
describe("generateAllOddnumbers test", function () {
    //variable initilization
    var endvariable1 = 20;
    var testList1 = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 20];
    var testList2 = [1, 2, 5, 7, 9, 11, 13, 15, 17, 19, 20];
    var testresult = null;

    var series = new SR.Series();
    // Test setup 
    beforeEach(function () {
        testresult = series.generateSequenceResults(endvariable1);
    });

    // actual test
    it("All odd numbers list generated by generateSequenceResults function should be equals to All odd numbers list", function () {
        expect(String(testList1)).toBe(String(series.allOddResultString));
    });
    it("All odd numbers generated by generateSequenceResults function should not be equals to All odd numbers list", function () {
        expect(String(testList2)).not.toBe(String(series.allOddResultString));
    });
})
// Test Even numbers series
describe("generateAllEvennumbers test", function () {
    //variable initilization
    var endvariable1 = 20;
    var testList1 = [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20];
    var testList2 = [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 20];
    var testresult = null;

    var series = new SR.Series();
    // Test setup 
    beforeEach(function () {
        testresult = series.generateSequenceResults(endvariable1);
    });

    // actual test
    it("All Even numbers list generated by generateSequenceResults function should be equals to All Even numbers list", function () {
        expect(String(testList1)).toBe(String(series.allEvenResultString));
    });
    it("All Even numbers generated by generateSequenceResults function should not be equals to All Even numbers list", function () {
        expect(String(testList2)).not.toBe(String(series.allEvenResultString));
    });
})
// Test Special characters numbers series
describe("generateAllSpecCharacnumbers test", function () {
    //variable initilization
    var endvariable1 = 20;
    var testList1 = 'Z,1,2,C,4,E,C,7,8,C,E,11,C,13,14,Z,16,17,C,19,20';
    var testList2 = 'Z,1,2,Z,4,E,C,7,8,C,E,11,C,13,14,E,16,17,C,19,20';
    var testresult = null;

    var series = new SR.Series();
    // Test setup 
    beforeEach(function () {
        testresult = series.generateSequenceResults(endvariable1);
    });

    // actual test
    it("All Special characters numbers list generated by generateSequenceResults function should be equals to All Special characters numbers list", function () {
        expect(testList1).toBe(String(series.allSpecResultString));
    });
    it("All Special characters numbers generated by generateSequenceResults function should not be equals to All Special characters numbers list", function () {
        expect(testList2).not.toBe(String(series.allSpecResultString));
    });
})

//Test User selected sequneces
describe("generateSequenceResult user selected sequences test", function () {
    //variable initilization
    var seqValue = 0;
    var Pattern = 2;
    var userinputVar = 124;
    var testResultListArithmetic = '[124, 126, 128, 130, 132, 134, 136, 138, 140, 142, 144, ......]';
    var testResultListGeometric = '[124, 248, 496, 992, 1984, 3968, 7936, 15872, 31744, 63488, 126976, ......]';
    var testResultListSquare = '[15376, 15625, 15876, 16129, 16384, 16641, 16900, 17161, 17424, 17689, ......]';
    var testResultListCube = '[1906624, 1953125, 2000376, 2048383, 2097152, 2146689, 2197000, 2248091, 2299968, 2352637, ......]';

    var testresultArithmetic = null;
    var testresultGeometric = null;
    var testresultSquare = null;
    var testresultCube = null;

    var series = new SR.Series();
    // Test setup 
    beforeEach(function () {
        testresultArithmetic = series.generateSequenceResult(1, userinputVar, Pattern);
        testresultGeometric = series.generateSequenceResult(2, userinputVar, Pattern);
        testresultSquare = series.generateSequenceResult(3, userinputVar, null);
        testresultCube = series.generateSequenceResult(4, userinputVar, null);
    });

    // actual test
    //Equal to
    it("Arithmetic list generated by generateSequenceResult function should be equals to Arithmetic series test varaible string", function () {
        expect(testresultArithmetic).toBe(testResultListArithmetic);
    });
    it("Geometric list generated by generateSequenceResult function should be equals to Geometric series test varaible string", function () {
        expect(testresultGeometric).toBe(testResultListGeometric);
    });
    it("Square list generated by generateSequenceResult function should be equals to Square series test varaible string", function () {
        expect(testresultSquare).toBe(testResultListSquare);
    });
    it("Cube list generated by generateSequenceResult function should be equals to Cube series test varaible string", function () {
        expect(testresultCube).toBe(testResultListCube);
    });

    //Testing function behaviour
    it("Using a sequence that does not require a pattern", function () {
        expect(series.generateSequenceResult(3, userinputVar, Pattern)).toBe('[124, ......]');
    });
    it("Using a sequence that requires a pattern, and sending null pattern", function () {
        expect(series.generateSequenceResult(2, userinputVar, null)).toBe('[......]');
    });
    it("Using a wrong sequence number", function () {
        expect(series.generateSequenceResult(0, userinputVar, null)).toBe('[......]');
    });

})