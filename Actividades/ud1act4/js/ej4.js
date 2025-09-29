/* 4. Refactoriza el código del ejercicio 2 para crear una función que reciba como parámetros
las jugadas de los dos jugadores y devuelva el resultado del combate */

var jugador1 = prompt("Introduce nombre de jugador: ");
var jugador2 =  prompt("Introduce nombre de jugador: ");    
//Primera jugada
var jugada1j1 = prompt(jugador1+": Introduce tu puntuación de la primera jugada");
var jugada2j2 = prompt(jugador2+": Introduce tu puntuación de la primera jugada");
//Segunda jugada
var jugada2j1 = prompt(jugador1+": Introduce tu puntuación de la primera jugada");
var jugada3j2 = prompt(jugador2+": Introduce tu puntuación de la primera jugada");
//Tercera jugada
var jugada3j1 = prompt(jugador1+": Introduce tu puntuación de la primera jugada");
var jugada3j2 = prompt(jugador2+": Introduce tu puntuación de la primera jugada");
//var ganador=null;

function resultado(jugada1j1, jugada2j2, jugada2j1, jugada3j2, jugada3j1, jugada3j2){
    var puntosJ1= jugada1j1 + jugada2j1 + jugada3j1;
    var puntosJ2= jugada2j2 + jugada3j2 + jugada3j2;
    if (puntosJ1 > puntosJ2) {
        alert("El ganador es " + jugador1); 
        } else if (puntosJ2 > puntosJ1) {
        alert("El ganador es " + jugador2);
        } else {
                alert("¡Habéis empatado!");
                }   
        }   
resultado(jugada1j1, jugada2j2, jugada2j1, jugada3j2, jugada3j1, jugada3j2);

