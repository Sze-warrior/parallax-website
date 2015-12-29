var username = document.getElementById('username').value;
var password = document.getElementById('password').value;

function check_info(){


	if(username == "" || username.length < 6){
        document.getElementById("usernameerror").innerHTML="this is invalid username";
		document.getElementById('username').style.borderColor = "blue";
		return false;

	} else if(password == "" || password.length < 6){
        document.getElementById("passworderror").innerHTML="this is an invalid password ";		
		document.getElementById('password').style.borderColor = "blue";
		return false;

	}else{
		return true;
		console.log(check_info);
	}
}
