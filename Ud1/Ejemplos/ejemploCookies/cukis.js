/* document.cookie="nombre=carlos"

function guardaDatos(clave, valor){
localStorage.setItem(clave,valor);
}
guardaDatos("mes","octubre");
guardaDatos("nombre","Bobes");
guardaDatos("tiempo","calor")

function recuperaDatos(clave){
return localStorage.getItem(clave);
}
console.log(recuperaDatos("mes"))

function muestraTodosLosDatos(){S
var info=document.getElementById("info");
info.innerHTML="";
for(var i=0; i<localStorage.length;i++){
var clave=localStorage.key(i);
var contenido=localStorage.getItem(clave);
info.innerHTML+=clave+": "+contenido+"<br/>"
}
}

function eliminar(clave){
localStorage.removeItem(clave);
}

muestraTodosLosDatos();

eliminar("mes");

localStorage.clear(); */

let jugador={
nombre:"Godzilla",
porcentajeVida:100,
nivel:3,
tiempo:"1:00",
trucos:false,
}

var jugadorJSON=JSON.stringify(jugador);
console.log(jugadorJSON);

console.log(jugadorJSON);

var jugadorObject = jugadorJSON.toString