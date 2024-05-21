// Take a number in a variable
var num = 10;

// Perform arithmetic operations
var result = (num + 5) * 2;

// Display the result in the browser
document.write("The result is: " + result+"<br>");


// Get the name from the user
var name = prompt("Please enter your name:");

// Greet the user
document.write("Hello, " + name + "! Nice to meet you."+"<br>");

// Get the number from the user
var num = prompt("Please enter a number:");

// If no number is entered, use 5 as default
if (num === null || num === "") {
  num = 5;
}

// Display the multiplication table
document.write("Multiplication Table of " + num + ":<br>");
for (let i = 1; i <= 10; i++) {
  document.write(num + " x " + i + " = " + num * i + "<br>");
}
 //a)Take three subjects names from user and store them in 3 different variables
var subject1 = prompt("Enter subject 1 name:");
var subject2 = prompt("Enter subject 2 name:");
var subject3 = prompt("Enter subject 3 name:");

// b) Total marks for each subject is 100, store it in another variable
var totalMarks = 100;

// c) Take obtained marks for first subject from user and store it in a different variable
var obtainedMarks1 = parseInt(prompt("Enter obtained marks for " + subject1 + ":"));

// d) Take obtained marks for remaining 2 subjects from user and store them in variables
var obtainedMarks2 = parseInt(prompt("Enter obtained marks for " + subject2 + ":"));
var obtainedMarks3 = parseInt(prompt("Enter obtained marks for " + subject3 + ":"));

// e) Now calculate total marks and percentage and show the result in browser
var totalObtainedMarks = obtainedMarks1 + obtainedMarks2 + obtainedMarks3;
var percentage = (totalObtainedMarks / (totalMarks * 3)) * 100;

document.write("<table border='1'>");
document.write("<tr><th>Subject</th><th>Obtained Marks</th></tr>");
document.write("<tr><td>" + subject1 + "</td><td>" + obtainedMarks1 + "</td></tr>");
document.write("<tr><td>" + subject2 + "</td><td>" + obtainedMarks2 + "</td></tr>");
document.write("<tr><td>" + subject3 + "</td><td>" + obtainedMarks3 + "</td></tr>");
document.write("<tr><th>Total</th><th>" + totalObtainedMarks + "</th></tr>");
document.write("<tr><th>Percentage</th><th>" + percentage.toFixed(2) + "%</th></tr>");
document.write("</table>");

