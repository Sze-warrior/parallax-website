//Time calculations with Javascript
var secondsPerMin = 60; 
var minutesPerHour = 60;
var hoursPerDay = 24;
var daysPerWeek = 7;
var weeksPerYear = 52;
var secondsPerDay = secondsPerMin * minutesPerHour * hoursPerDay; 
console.log("There are " + secondsPerDay + " seconds in a day.");


//Numbers used in an input that are confirmed as Numbers
/*var questions = 3;
var questionsLeft = "[ " + questions + " questions left. ]";
var htmlBadges = prompt("How many HTML Badges do you have??" + questionsLeft);

var questions = questions - 1;
var questionsLeft = "[ " + questions + " questions left. ]";
var cssBadges = prompt("How many CSS Badges do you have??" + questionsLeft);

var questions = questions - 1;
var questionsLeft = "[ " + questions + " questions left. ]";
var jsBadges = prompt("How many Javascript Badges do you have??" + questionsLeft);

var totalBadges = parseInt(htmlBadges) + parseInt(cssBadges) + parseInt(jsBadges); 

console.log("Wow! that is a total of " + totalBadges + "! That is awesome!!");*/

//Random Dice Roll 
var diceRoll = Math.floor(Math.random() * 6) + 1;
alert("Hey! You rolled a " + diceRoll + " from the six sided dice!");

