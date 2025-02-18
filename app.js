

// 1.  Declare an empty array using JS literal notation to store
// student names in future.

// let a = [];

// 3. Declare and initialize a strings array.

// let b = ["Hello World"];

// console.log(b);

// 4.Declare and initialize a numbers array.

// let c = [1 , 2 , 3 , 4]

// console.log(c)

// 5.Declare and initialize a boolean array.

// let booleanArray = [true, false, true, false, true];

// console.log(booleanArray)

// 6.

// let mixedArray = ["hello" , 23 , null , undefined]
//  console.log(mixedArray)



// 7. Declare and Initialize an array and store available
// education qualifications in Pakistan (e.g. SSC, HSC, BCS,
// BS, BCOM, MS, M. Phil., PhD). Show the listed
// qualifications in your browser like: 


// let educationPakistan = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS","M.Phil", "PhD"]

// console.log (educationPakistan[0])
// console.log (educationPakistan[1])
// console.log (educationPakistan[2])
// console.log (educationPakistan[3])
// console.log (educationPakistan[4])
// console.log (educationPakistan[6])
// console.log (educationPakistan[7])




// 8. Write a program to store 3 student names in an array.Take
// another array to store score of these three students.
// Assume that total marks are 500 for each student, display
// the scores & percentages of students like:


// let names = ["hussain" , "taha" , "mohammed"];
// let score = [ 400 , 470 , 390]
// let totalMarks = 500

//  let percentage = (score / totalMarks) * 100


// console.log ("<p> Score of " + "Hussain " + "is " + 400 + "=" + "percentage" + percentage +  "</p>")


// // Array to store student names
// var studentNames = ["Alice", "Bob", "Charlie"];

// // Array to store scores of the students
// var studentScores = [450, 400, 375];  // Assume the scores out of 500

// // Total marks for each student
// var totalMarks = 500;

// // Displaying scores and percentages for each student
// for (var i = 0; i < studentNames.length; i++) {
//     var score = studentScores[i];
//     var percentage = (score / totalMarks) * 100;
    
//     console.log(studentNames[i] + " scored " + score + " out of " + totalMarks + " marks.");
//     console.log("Percentage: " + percentage.toFixed(2) + "%\n");  // toFixed(2) for 2 decimal precision
// }


// 12.

// let arr = [ "This " , "is " , "my " , "cat"]

// let a = arr.join("")
// console.log(a , arr) 


//  QUESTION 10

// Write a program to store student scores in an array &
// sort the array in ascending order using Array’s sort
// method.

// let compare = (a , b)=> {
//     return (a - b)       // if decending than b - a
// }
// let num = [ 2, 3 , 45 , 85 , 26 , 1]
// num.sort(compare)
// console.log(num)


// QUESTION 11

// Write a program to initialize an array with city names.
// Copy 3 array elements from cities array to selectedCities
// array.

// let cities = ["Karachi" , "Lahore" , "Islamabad" , "Quetta"]
// console.log(cities)

// let city = cities.slice(1 , 3)
// console.log(city)



// // 9.
// Initialize an array with color names. Display the array
// elements in your browser.

// a. Ask the user what color he/she wants to add to the
// beginning & add that color to the beginning of the array.
// Display the updated array in your browser.


// let colours = ["Red" , "Yellow" , "Green" , "Blue" ]
// let user = prompt("Enter the colour")
// colours.unshift(user);
// document.write("<p> Updated array is : " + colours + "</p>")

//  b.
// Ask the user what color he/she wants to add to the end
// & add that color to the end of the array. Display the
// updated array in your browser.

// colours.push(user);
// document.write("<p> Updated array is :" + colours + "</p>")

// c.
//  Add two more color to the beginning of the array.
// Display the updated array in your browse

// colours.unshift("Black", "purple")
// document.write("<p> Updated array is :" + colours + "</p>")

// d.
//  Delete the first color in the array. Display the updated
// array in your browser.

// colours.splice(0,1)
// document.write(colours)


// e.
//  Delete the last color in the array. Display the updated
// array in your browser.

// colours.splice(3,3)
// document.write(colours)

// // f.
// Ask the user at which index he/she wants to add a color
// & color name. Then add the color to desired
// position/index. . Display the updated array in your
// browser.

// for ( let i = 0; i < colours.length; i++) {
//     alert( + i + "Value " + colours[i])
// }
// let indexToAdd = +prompt("Add which index do you want to add a colour");
// let colourName = prompt("How many colors do you want to Delete");
// colour.splice  (indexToAdd,0,colourName);
// document.write ("Update array (f) :" + colours + "<br/>")

// g. Ask the user at which index he/she wants to delete
// color(s) & how many colors he/she wants to delete. Then
// remove the same number of color(s) from user-defined
// position/index. . Display the updated array in your
// // browser.

// let indexToDelete = +prompt("From which index do you want to delete")
// let numberToDelete = prompt("Add a colour do you want to delete")
// colour.delete (indexToDelete,numberToDelete)
// document,write("update the array (g): " + colours + "<br/>" )


// FUNCTIONS

// a. basic formulae

// function userInput() {
//     console.log("Hello World")
//     console.log("I'm learning JS")
// }

// userInput()

// b For Sum+

// function newNumber(a,b) {
//     console.log(a+b);
// }

// newNumber(5,6)
// newNumber(5,5)

// c. For Multiplt * (return value)

// function number (x,y) {

//     sum = x + y 
//       return sum
// }
// let Value = number(3 ,5)
// console.log(Value)

// d  ARROW FUNCTION

// function multiply (a,b) {
//     return a * b
// }

// const arrowMultiply = (a,b) => {
//     return a*b
// }


function countVowels (str)  {
  let count = 0
  for (const char of str) {
    if (
        char === "a" ||
        char === "e" ||
        char === "i" ||
        char === "o" ||
        char === "u" 
    ) {
        count++
    }
  }
  
  console.log(count)
}
  

















