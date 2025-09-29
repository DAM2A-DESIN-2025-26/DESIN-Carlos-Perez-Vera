var jugador1 = prompt("Introduce nombre de jugador: ");
var jugador2 =  prompt("Introduce nombre de jugador: ");

var opciones =["Piedra","Papel","Tijera"];


var eleccion1 = prompt(jugador1+": Introduce tu eleccion");
var eleccion2 = prompt(jugador2+": Introduce tu eleccion");
var ganador=null;

eleccion1 = eleccion1.charAt(0).toUpperCase() + eleccion1.slice(1).toLowerCase();
eleccion2 = eleccion2.charAt(0).toUpperCase() + eleccion2.slice(1).toLowerCase();


/* if (opciones.includes(eleccion1) === opciones.includes(eleccion2)){
    alert ("Elija una respuesta valida");
}else { */
  if (eleccion1 === eleccion2) {
    alert("¡Habéis empatado!");
  } else if (
    (eleccion1 === "Piedra" && eleccion2 === "Tijera") ||
    (eleccion1 === "Papel" && eleccion2 === "Piedra") ||
    (eleccion1 === "Tijera" && eleccion2 === "Papel"))
     {
    alert("El ganador es " + jugador1);
    
  } else if((eleccion2 === "Piedra" && eleccion1 === "Tijera") ||
    (eleccion2 === "Papel" && eleccion1 === "Piedra") ||
    (eleccion2 === "Tijera" && eleccion1 === "Papel")) {

    alert("El ganador es " + jugador2);
  }else{
    alert("Elija una respuesta valida");
  }


/* switch(ganador){
    case opcion1:
        if(eleccion1 == opciones[0] && eleccion2 == opciones[1]){
        alert("El ganador es "+jugador2);}
        break;
    case opcion2:
        if(eleccion1 == opciones[1] && eleccion2 == opciones[2]){
        alert("El ganador es "+jugador2);}
        break;    
    case opcion3:
        if(eleccion1 == opciones[2] && eleccion2 == opciones[0]){
        alert("El ganador es "+jugador1);}
        break;
    case opcion4:
        if(eleccion1 == opciones[0] && eleccion2 == opciones[2]){
        alert("El ganador es "+jugador2);}
        break;
    case opcion5:
        if(eleccion1 == opciones[1] && eleccion2 == opciones[0]){
        alert("El ganador es "+jugador1);}
        break;
    case opcion6:
        if(eleccion1 == opciones[2] && eleccion2 == opciones[1]){
        alert("El ganador es "+jugador2);}
        break;
    case opcion7:
        if(eleccion1 === eleccion2 ){
        alert("Habeis empatado");}
        break;
}
console.log("El ganador es: "+ganador);
 */