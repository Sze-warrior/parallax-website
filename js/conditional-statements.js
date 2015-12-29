var languageAnswer = prompt('What is the front end language you are learning?');

if (languageAnswer.toUpperCase() === "JAVASCRIPT" || languageAnswer.toUpperCase() === "JQUERY") {

	console.log('YES! you are learning ' + languageAnswer);

}else{

	console.log('Hmm... Are you sure you are learning ' + languageAnswer);

}

