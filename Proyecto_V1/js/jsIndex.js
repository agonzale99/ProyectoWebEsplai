estaLogueadoInicio();
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

function estaLogueadoInicio() {
    var logeado = readCookie("logueado");
    if (logeado == 'si'){
        window.location.href = "pagina1.html";
    }
}