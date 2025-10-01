/* Refactoriza el código del ejercicio 4 para que la función reciba un objeto literal con las
jugadas de ambos jugadores.
 */
 var jugador1 = prompt("Introduce nombre de jugador: ");
var jugador2 =  prompt("Introduce nombre de jugador: ");    

var jugada;
function resultado(jugada){
    /* var puntosJ1= jugada1j1 + jugada2j1 + jugada3j1;
    var puntosJ2= jugada2j2 + jugada3j2 + jugada3j2; */
    
    if (puntosJ1 > puntosJ2) {
        alert("El ganador es " + jugador1); 
        } else if (puntosJ2 > puntosJ1) {
        alert("El ganador es " + jugador2);
        } else {
                alert("¡Habéis empatado!");
                }   
        }   
resultado(jugada1j1, jugada2j2, jugada2j1, jugada3j2, jugada3j1, jugada3j2); 

function piedraPapelTijera(){

    let jugadas={Piedra:"Tijera",Tijera:"Papel",Papel:"Piedra"}
}

