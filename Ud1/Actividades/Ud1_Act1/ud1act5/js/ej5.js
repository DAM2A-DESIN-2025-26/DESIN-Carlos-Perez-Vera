/* Refactoriza el código del ejercicio 4 para que la función reciba un objeto literal con las
jugadas de ambos jugadores.
 */
 var jugador1 = prompt("Introduce nombre de jugador: ");
var jugador2 =  prompt("Introduce nombre de jugador: ");    


var opciones =["Piedra","Papel","Tijera"];

const partida1={opciones:[2],opciones:[3],};

function resultado(partida1){
        
  if (eleccion1 === eleccion2) {
    return alert("¡Habéis empatado!");
  } else if (
    (eleccion1 === "Piedra" && eleccion2 === "Tijera") ||
    (eleccion1 === "Papel" && eleccion2 === "Piedra") ||
    (eleccion1 === "Tijera" && eleccion2 === "Papel"))
     {
    return alert("El ganador es " + jugador1);
    
  } else if((eleccion2 === "Piedra" && eleccion1 === "Tijera") ||
    (eleccion2 === "Papel" && eleccion1 === "Piedra") ||
    (eleccion2 === "Tijera" && eleccion1 === "Papel")) {

    return alert("El ganador es " + jugador2);
  }else{
    return alert("Elija una respuesta valida");
  }

  
}
resultado(eleccion1,eleccion2);