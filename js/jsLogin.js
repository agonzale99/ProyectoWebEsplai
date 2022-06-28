//------------------------>LOGIN<-----------------------------------------------------------------

//METODO PARA QUE EL USUARIO COMIENCE A ESCRIBIR DIRECTAMENTE EN LA CASILLA DE EMAIL
document.getElementById("email1").focus();

//LEEMOS SI HAY COOKIES YA GUARDADAS
document.getElementById("email1").value = readCookie("usuario");
document.getElementById("password1").value = readCookie("pass");


//FUNCION QUE COMPRUEBA LOS DATOS INGRESADOS DE EMAIL Y PASSWORD
function validarEmail() {
    var usuario = document.getElementById("email1").value;
    var password = document.getElementById("password1").value;
    var formatoPassword = /^(?=.*[a-zA-Z])(?=.*\d)([A-Za-z\d$@$!%*?&]|[^ ]){6,15}$/;
    var formatoEmail = /^([\da-z_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
    var almacenar = document.getElementById("checkCookies");

    //COMPROBAMOS QUE TANTO EL USUARIO COMO EL PASSWORD NO ESTEN EN BLANCO
    if (usuario == "" || password == "") {
        //document.getElementById("errorEmail").innerHTML = "Debe completar ambos campos.";
        alert("Debe completar ambos campos.")
        document.getElementById("email1").focus();
    }
    //COMPROBAMOS QUE EL FORMATO DEL EMAIL SEA CORRECTO
    else if (formatoEmail.test(usuario) == false) {
        document.getElementById("errorEmail").innerHTML = "Ingrese un formato de email válido.";
        document.getElementById("email1").focus();
    }
    //COMPROBAMOS QUE EL USUARIO Y EL PASSWORD NO SEAN IGUALES
    else if (usuario == password) {
        document.getElementById("errorEmail").innerHTML = "El email y el password no pueden ser iguales.";
        document.getElementById("email1").focus();
    }
    //COMPROBAMOS QUE EL PASSWORD TENGA EL FORMATO SOLICITADO
    else if (formatoPassword.test(password) == false) {
        document.getElementById("errorPass").innerHTML = "La contraseña debe contener seis caracteres, entre ellos, una letra y un número.";
        document.getElementById("password1").focus();
    }
    //SI TODAS LAS COMPROBACIONES SON CORRECTAS, SE CORROBORA QUE EL USUARIO Y CONTRASEÑA SEA EL ESPERADO:
    if (usuario != "pepito@hotmail.com") {
        document.getElementById("errorEmail").innerHTML = "Este usuario no existe.";
        document.getElementById("errorPass").innerHTML = "";
    } 
    else if (password != "123456X") {
        document.getElementById("errorEmail").innerHTML = "";
        document.getElementById("errorPass").innerHTML = "Contraseña incorrecta.";
    } else {
        guardarCookies();
        alert("bienvenido/a");
        window.location.href = "pagina1.html";

    }
}

//FUNCION PARA QUE SE MUESTRE LA CONTRASEÑA SI EL USUARIO LO SOLICITA
function mostrarPassword() {
    var password = document.getElementById("password1");
    if (password.type == "password") 
        password.type = "text";
    else 
        password.type = "password";
}

//COOKIES
function guardarCookies() {
    var usuario = document.getElementById("email1").value;
    var password = document.getElementById("password1").value;
    var expiracion = 3600;
    
    document.cookie = "usuario="+usuario+";max-age="+expiracion;
    document.cookie = "pass="+password+";max-age="+expiracion;
    document.cookie = "logueado=si;max-age="+expiracion;
}

//FUNCION PARA LEER LAS COOKIES
function readCookie(name) {
    var nameEQ = name + "="; 
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
      var c = ca[i];
      while (c.charAt(0)==' ') c = c.substring(1,c.length);
      if (c.indexOf(nameEQ) == 0) {
        return decodeURIComponent( c.substring(nameEQ.length,c.length) );
      }
    }
    return null;
}

console.log(readCookie("usuario"));
console.log(readCookie("pass"));
console.log(readCookie("logueado"));
