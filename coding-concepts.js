// // ASSESSMENT 1: Coding conceptual questions

// // Examine the following examples.

// // First, predict the outcome based on your understanding of the code.
// // Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// // --------------------1) What will this log?

// var cohort = "Charlie 2021"
// console.log(cohort.length)

// // a) Your answer: 12
// // b) Verify and explain: The .length method returns the number of characters in the string


// // --------------------2) What will this log?

// var greeting = "Hello World!"
// console.log(greeting[3])

// // a) Your answer: l
// // b) Verify and explain: The number in [] is the index being requested and the character located at index 3 is l.


// // --------------------3) What will this log?

// var languages = ["JavaScript", "Ruby", "Python", "C++"]
// var index = 1
// console.log(languages[index])

// // a) Your answer: Ruby
// // b) Verify and explain: If I'm being honest I took a bit of an educated guess here because I was a little thrown off by 
//having a variable called index but if the goal was to find the value held at index 1, it would be Ruby because 
//the index of an array starts at 0, so Javascript = 1 and Ruby = 2.


// // --------------------4) What will this log?

// var weekendDays = ["saturday", "sunday"]
// console.log(weekendDays.toUpperCase())

// // a) Your answer: SATURDAY, SUNDAY
// // b) Verify and explain: I was wrong, but I think I understand why after experimenting: 
//The error I recieved was "weekendDays.toUpperCase is not a function" so I tried this code: 
    // var weekendDays = "saturday"
    // console.log(weekendDays.toUpperCase())
//and that returned SATURDAY, so if I am right .toUpperCase does not work on arrays

//I was curious so I tried this:
    // var weekendDays = ["saturday", "sunday"]
    // const hypothesis = (weekendDays.join())
    // console.log(hypothesis.toUpperCase())
//and SATURDAY, SUNDAY was the output, so I learned two things from this question; 
//remember that .toUpperCase doesn't work on arrays, and read the questions more critically before answering.

// // --------------------5) What will this log?

// var dataTypes = ["number", "string", "Boolean"]
// console.log(typeof dataTypes.length)

// // a) Your answer: 'number'
// // b) Verify and explain: dataTypes.length would return the length as a number, so typeof dataTypes.length would be returning
//the type of data that would be returned by dataTypes.length.
