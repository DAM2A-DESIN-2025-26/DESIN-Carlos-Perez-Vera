var jugador1 = prompt("Introduce nombre de jugador: ");
var jugador2 =  prompt("Introduce nombre de jugador: ");

var opciones =["Piedra","Papel","Tijera"];


var eleccion1 = prompt(jugador1+"Introduce tu eleccion");
var eleccion2 = prompt(jugador2+"Introduce tu eleccion");
var ganador=null;


if (eleccion1&&eleccion2 != opciones[0,2]){
    alert ("Elija una respuesta valida")
}

switch(ganador){
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

//pedra Vs papel
/* if(eleccion1 == opciones[0] && eleccion2 == opciones[1]){
    alert("El ganador es "+jugador2);
} */


/* function eligeVariable(){
    jugador1 = prompt("Elije piedra papel o tijera");
    jugador2 = prompt("Elije piedra papel o tijera");
    if (jugador1 && jugador2 ){

    }
}
function juego(){
    let 
    

    
}
function ganador(){

} */