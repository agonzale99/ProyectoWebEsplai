//------------------------>REGISTRO<-----------------------------------------------------------------

var result = true;

function validar(event) 
{
	result = true;

	validatePassword();
	
	validateEmail();

	validateDate();

	if(result){
		alert("User register correctly");
        window.location.href = "index_EN.html";
	} 
	else{
		event.preventDefault();
	}

	//return result;
}

function validatePassword(){
	// Validate password
	var pass1 = document.getElementById("pass1");
	var pass2 = document.getElementById("pass2");
	var errorPass = document.getElementById("errorPass");

	errorPass.innerHTML = "";
	var formatoPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;

	if(pass1.value != pass2.value)
	{
		errorPass.innerHTML = "Passwords must be the same";
        pass1.style.border = "1px solid red";
        pass2.style.border = pass1.style.border;
        result = false;
	}
	if (pass1.value.match(formatoPassword) == null) {
        errorPass.innerHTML = errorPass.innerHTML + "Password must have 6 characters, including a letter and a number";
        pass1.style.border = "1px solid red";
        pass2.style.border = pass1.style.border;
        pass1.focus();
        result = false;
    }
}

function validateDate(){
	// Validate born date
	var bornDate = document.getElementById("bornDate");
	var errorBornDate = document.getElementById("errorBornDate");

	errorBornDate.innerHTML = "";

	var diference =  new Date().getTime() - bornDate.valueAsDate.getTime();
	var diferenceInDays = diference / (1000*60*60*24);

	if (diferenceInDays < (365 * 18)){
		errorBornDate.innerHTML = "You must be an adult to register";
	}
}

function validateEmail(){
	var pass1 = document.getElementById("pass1");
	var pass2 = document.getElementById("pass2");
	var correo = document.getElementById("correo");
	// Validate email and password not equals
	if(correo.value == pass1.value || correo.value ==  pass2.value){
		alert("E-mail and password must be different");
		result = false;
	}
}
