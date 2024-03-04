const textarea = document.getElementById('cajaTexto');

textarea.addEventListener('input', autoResize, false);

function autoResize() {
  this.style.height = '251px';
  this.style.height = (this.scrollHeight) + 'px';
}

function asignarTextoElemento(etiqueta, texto){
  let elementoHTML = document.querySelector(etiqueta);
  elementoHTML.innerHTML = texto;
  return;
}



asignarTextoElemento('.mensajeNulo', 'Ningún mensaje fue encontrado');
asignarTextoElemento('.ingresaMensaje', 'Ingresa el texto que desees');

