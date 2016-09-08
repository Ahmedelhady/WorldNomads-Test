# WorldNomads-Test
This application is used to calculate numeric sequence series based on the user's entered number.
This application has two functionality, the first one is to generate sample sequences based on the user selected sequence,
to give the user an overview of sequences samples,
while the second functionlity is to show the user five different sequences:
- Show all numbers
- Show all Odd numbers
- Show all Even numbers
- Show all numbers(C means Multiple by 3, E means Multiple by 5, Z means Mutliply by both)
- Show all Fibonacci numbers

Technologies and Tools:

- .Net FrameWork 4.5.2
- Javascript
- Jquery
- AngularJs
- Jasmine
- chutzpah
- Unit Testing

Main page path:
- ~\NumericSequenceCalculator_Web_Interface\Default.aspx
Unit testing files paths:
- ~\NumericSequenceCalculator_Web_Interface\TestScripts\series.generate.tests.js [Test all the required generated series]
- ~\NumericSequenceCalculator_Web_Interface\TestScripts\series.tests.js [Test all help functions like isEven, isOdd,...]

Script files paths:
- ~\NumericSequenceCalculator_Web_Interface\Scripts\Default\component.js (Parent component class)
- ~\NumericSequenceCalculator_Web_Interface\Scripts\Default\Default.js (Initialization function)
- ~\NumericSequenceCalculator_Web_Interface\Scripts\Default\series.js (Main series class)
