estaLogueado();

//------------------------>CONTACTO<-----------------------------------------------------------------

function comprobarDatosContacto(){
    
    var nombre = document.getElementById("contactoNombre").value;
    var apellidos = document.getElementById("contactoApellido").value;
    var email = document.getElementById("contactoEmail").value;
    var telefono = document.getElementById("contactoTelefono").value;
    var mensaje = document.getElementById("contactoMensaje").value;
    
    alert("Nombre: " + nombre + "\n"
         + "Apellido: " + apellidos + "\n"
         + "email: " + email + "\n"
         + "telefono: " + telefono + "\n"
         + "mensaje: " + mensaje);
}

//------------------------>PETICIÓN<-----------------------------------------------------------------

var titulo = "";
var descripcion = "";
var formato = "";
var urgencia = "";

//Función para guardar las variables y luego mostralas en el resumen
//Aqui podriamos enviarla a la base de datos que queremos
function peticion(){ 

    titulo = document.getElementById('Titulo_peticion').value; 
    descripcion = document.getElementById('Descripcion_peticion').value;
    formato = document.getElementById('Formato_peticion').value;
    urgencia = document.getElementById('Urgencia_peticion').value;
    //comprobacion de que todos los campos estan rellenos
    if ((titulo == '') || (descripcion == '') || (formato == 'Formato') || (urgencia == 'Urgencia') )
        alert('Porfavor rellene todos los campos');
    
    else{//Si todo correcto nos redirige a la pagina siguiente
        window.location="Resumen_peticion.html";
        localStorage.ttitulo = titulo;
        localStorage.ddescripcion = descripcion;
        localStorage.fformato = formato;
        localStorage.uurgencia = urgencia;
        
    }
}

function peticion_en(){ 

    titulo = document.getElementById('Titulo_peticion').value; 
    descripcion = document.getElementById('Descripcion_peticion').value;
    formato = document.getElementById('Formato_peticion').value;
    urgencia = document.getElementById('Urgencia_peticion').value;
    //comprobacion de que todos los campos estan rellenos
    if ((titulo == '') || (descripcion == '') || (formato == 'Format') || (urgencia == 'Urgency') )
        alert('Please, fill all fields');
    
    else{//Si todo correcto nos redirige a la pagina siguiente
        window.location="Resumen_peticion_EN.html";
        localStorage.ttitulo = titulo;
        localStorage.ddescripcion = descripcion;
        localStorage.fformato = formato;
        localStorage.uurgencia = urgencia;
        
    }
}
        

//Funcion para mostrar un breve resument de la petición que se ha hecho
function resumen_peticion(){
    document.getElementById('mostrar_titulo').innerHTML = localStorage.ttitulo;
    document.getElementById('mostrar_descripcion').innerHTML = localStorage.ddescripcion;
    document.getElementById('mostrar_urgencia').innerHTML = localStorage.uurgencia;
    document.getElementById('mostrar_formato').innerHTML = localStorage.fformato;
}

//------------------------>LOGIN<-----------------------------------------------------------------

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

function estaLogueado() {
    var logeado = readCookie("logueado");
    if (logeado != 'si'){
        alert ("Sesión caducada")
        window.location.href = "index.html"
    } else {
        document.getElementById("nombreUsuarioLogueado").innerHTML = "Hola, " + readCookie("usuario");
    }
}

function logOut() {
    document.cookie = "logueado=; expires=passedDate";
    document.cookie = "pass=; expires=passedDate";
}

console.log(readCookie("usuario"));
console.log(readCookie("pass"));
console.log(readCookie("logueado"));
