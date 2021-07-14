// ASSESSMENT 1: Coding practical questions

// To run file: navigate to the correct directory in terminal, $ node code-challenges.js

// Please read all questions thoroughly
// All problems can be solved with concepts covered in class or in the syllabus
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// --------------------1) Create a function that takes in a number and determines if a temperature is below boiling point, at boiling point or above boiling point. Boiling point is 212 degrees Fahrenheit.
// Use the test variables provided below. Expected output: "35 is below boiling point", "350 is above boiling point", "212 is at boiling point"

//create a function
    //const boilingPoint
//takes in number  
    //(temp1, temp2, temp3)
//compare to see if number is below boiling point (212 degrees)
 //Process - Use >, <, === operator to compare variable
    //if (var) > 212 return "(var) is above boiling point"
    //else if (var) < 212 return "(var) is below boiling point"
    //else if (var) = 212 return "(var) is at boiling point"
        //should include edge case? 
        //can function end with else if or does it have to be else?
        //else return "please enter valid input"?
//function should return expected output: 
    // var temp1 = "35 is below boiling point"
    // var temp2 = "350 is above boiling point"
    // var temp3 = "212 is at boiling point"

    // const boilingPoint = (temp1) => {
    //     if(temp1 < 212){
    //         return (`${temp1} is below boiling point`)
    //     }else if (temp1 > 212){
    //         return (`${temp1} is above boiling point`)
    //     }else if (temp1 === 212){
    //         return (`${temp1} is at the boiling point`)
    //     }else return "please input valid data"
    // }
    // console.log(boilingPoint(35))

    
// --------------------2) Create a function that takes in two arrays of numbers and returns a single array with all the values sorted least to greatest.
// Use the test variables provided below. Expected output: [-9, -7, 0, 3, 7, 8, 9, 13, 22, 36]

// var myNumbers1 = [3, 7, 0, 36, -9]
// var myNumbers2 = [8, -7, 22, 9, 13]

//function combineArrays that combines two arrays and sorts from < to >
//input: myNumbers1 and myNumbers2
//returns combined arrays with values sorted least to greatest
//expected output -9, -7, 0, 3, 7, 8, 9, 13, 22, 36
//Process - use .concat method to combine arrays and .sort method to sort least to greatest

// var myNumbers1 = [3, 7, 0, 36, -9]
// var myNumbers2 = [8, -7, 22, 9, 13]
//     const combineArrays = (myNumbers1.concat(myNumbers2))
// console.log(combineArrays.sort())

// // --------------------3) Create a function that takes in a string of a single word and returns the string with all letters reversed.
// // Use the test variables provided below. Expected output: "ovarb", "eilrahc"

//function stringReversed
//input - myString1 and myString2
//returns characters from string reversed
//expected output: "ovarb" and "eilarhc"
    //cant use .reverse on string
//Process - use .split to break into array, apply .reverse, then join to return a string

// var myString1 = "bravo"
// var myString2 = "charlie"

// var stringReversed = (myString1.split("")) 
// console.log(stringReversed.reverse().join(""))

// // --------------------4) Create a function that takes in two numbers and subtracts the smaller number from the larger number.
// // Use the two sets of test variables provided below. Expected output: 15, 12
//use if then to determine larger number

//Function subtractFunction
//input numberExample1, numberExample2, numberExample3, numberExample4
    //need to account for order in which numbers are entered in argument
        //use if then to determine larger number before calculating
//Process - create a function that compares num1 and num2 to determine larger number, use if/else to
//return larger number - smaller number
//expected output: 15, 12

// var numberExample1 = 42
// var numberExample2 = 27

// var numberExample3 = 7
// var numberExample4 = 19

// const subtractFunction = (num1, num2) => {
//     if (num1 >= num2){
//         return num1-num2
//         }else {
//             return num2-num1
//         }
// }
// console.log(subtractFunction(numberExample2, numberExample1))

// // --------------------5) Copy/paste your code from #4. Refactor your code to also accept non-number edge cases. 
//Inform your user if the variable passed into the subtraction function is not a number.
// // Use the two sets of test variables provided below. Expected output: "Your input is not a number", 3
// // Hint: There is an operator in JavaScript called typeof :)

//edge case - if a string is entered
//output - "your input is not a number"
//Process - add an else if statement and use typeof, if typeof is not equal to a number, return the
//string "your input is not a number"

// var numberExampleRefactor1 = 42
// var numberExampleRefactor2 = "hello"

// var numberExampleRefactor3 = 27
// var numberExampleRefactor4 = 24

// const subtractFunction = (num1, num2) => {
//         if (num1 >= num2){
//             return num1-num2
//             }else if (num2 > num1){
//                 return num2-num1
//             }else if(typeof num1, num2 !== 'number'){
//                 return "Your input is not a number"
//             }
//     }

// console.log(subtractFunction(numberExampleRefactor1, numberExampleRefactor2))