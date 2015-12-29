var number = Math.floor(Math.random() * 6) + 1;
var guess = prompt("What number am I thinking of between 1 and 6?");
var answer = false;

if (guess === number){
	answer = true;
}

if(guess === number){
	console.log("That is correct! The answer was " + number);
}else {
	console.log("Bummer that wasn't right! The answe is " + number);
}
