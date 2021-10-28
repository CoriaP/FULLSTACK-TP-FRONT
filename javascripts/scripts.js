
const form=document.getElementById('formulariodecontacto')

function limpform(){form.reset();}

function validarayp(){
  var ayp=document.getElementById('apellidoynombre').value;
  const regexpayn=/^[a-zA-Z]+\s[a-zA-Z]+\s?['´]?\s?[a-zA-Z]+$/gi;
  if (regexpayn.test(ayp) && ayp!='') {
  return true;} else if (ayp==''){alert('Nombre y Apellido no puede quedar vacio'); return false} else {alert('No es un nombre valido')}
}


function validaremail(){
  var email=document.getElementById('email').value;
  const regexpemail=/[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+\.?[a-zA-Z]+?/gi;
  if (regexpemail.test(email) && email!='') {
  return true;} else if (email==''){alert('El email no puede quedar vacio'); return false} else {alert('La dirección de correo no es valida')}
}

function validartelefono(){
  var tel=document.getElementById('telefono').value;
  const regexptel=/[0-9]{2}[\s-.]?[0-9]{4}[\s-.]?[0-9]{4}/gi;
  if (regexptel.test(tel) && tel!='') {
  return true;} else if (tel==''){alert('El telefono no puede quedar vacio'); return false} else {alert('El telefono no es valido')}
}

function validaciontotal(){ if(validarayp()&&validaremail()&&validartelefono()){alert('Gracias, en la brevedad lo contactaremos'); limpform()}
}
