// question no 1

var n = prompt("Enter a positive interger")
document.write("User number : " + n + "<br>");
document.write("Round off :" + Math.round(n) + "<br>");
document.write("Floor :" + Math.floor(n) + "<br>");
document.write("Ceil :" + Math.ceil(n) + "<br>");


// question no 2
var num = prompt("Enter a negative interger")
document.write("User number : " + num + "<br>");
document.write("Round off :" + Math.round(num) + "<br>");
document.write("Floor :" + Math.floor(num) + "<br>");
document.write("Ceil :" + Math.ceil(num) + "<br>");

// question no 3

var num1 = +prompt("Enter any integar");
document.write("Absolute number : " + Math.abs(num1) + "<br>");

// question no 4

var dice = Math.random() * 7;
var dice2 = Math.floor(dice);
document.write("Dice random number is : " + dice2);


// question no 5

var head = prompt("Enter your head value");
var tail = prompt("Enter your tail value");
var result = Math.random() * 2;
var result2 = Math.floor(result);
if (result2 === 0) {
  alert(head + " Congratulations head wins");
} else {
  alert(tail + " Congratulations tails wins");
}


// question no 6

var random = Math.random() * 100
var ran = Math.floor(random)
document.write("random number between 1 and 100 : " + ran + "<br>");

// question no 7
var weight = prompt("Enter your weight in kilograms");
document.write(parseInt(weight));


// question no 8

var secretnum = Math.random() * 10;
var secretnum2 = Math.floor(secretnum);
var secretnum3 = +prompt("Enter any number between 1 and 10 ");
if (secretnum2 === secretnum3) {
  alert("Congratulation you guess right");
} else {
  alert("Try again");
}