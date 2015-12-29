
var getRandom = function(number) {
var randomNumber = Math.floor(Math.random() * number) + 1;
return randomNumber;
}

console.log(getRandom(26));



function drinkType (drink, cake){
	console.log('The ' + drink + ' and ' + cake + ' is awesome!');
	return drink;
}

console.log(drinkType('coke', 'carrot cake'));


function squareSize (width, height){

	if(isNaN(width) || isNaN(height)){
		throw new Error('This is not correct! Not numbers');
	}
	var size = width * height + " Sq Ft";
	return size;
}

console.log(squareSize('nine', 10));