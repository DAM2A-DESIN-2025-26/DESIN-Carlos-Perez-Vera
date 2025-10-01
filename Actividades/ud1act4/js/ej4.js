/* 4. Refactoriza el código del ejercicio 2 para crear una función que reciba como parámetros
las jugadas de los dos jugadores y devuelva el resultado del combate */

var jugador1 = prompt("Introduce nombre de jugador: ");
var jugador2 =  prompt("Introduce nombre de jugador: ");    


var opciones =["Piedra","Papel","Tijera"];


var eleccion1 = opciones[1];
var eleccion2 = opciones[2];
var ganador=null;

eleccion1 = eleccion1.charAt(0).toUpperCase() + eleccion1.slice(1).toLowerCase();
eleccion2 = eleccion2.charAt(0).toUpperCase() + eleccion2.slice(1).toLowerCase();




function resultado(eleccion1,eleccion2){
        
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

/* //Primera jugada
var jugada1j1 = prompt(jugador1+": Introduce tu puntuación de la primera jugada");
var jugada2j2 = prompt(jugador2+": Introduce tu puntuación de la primera jugada");
//Segunda jugada
var jugada2j1 = prompt(jugador1+": Introduce tu puntuación de la primera jugada");
var jugada3j2 = prompt(jugador2+": Introduce tu puntuación de la primera jugada");
//Tercera jugada
var jugada3j1 = prompt(jugador1+": Introduce tu puntuación de la primera jugada");
var jugada3j2 = prompt(jugador2+": Introduce tu puntuación de la primera jugada");
//var ganador=null; */