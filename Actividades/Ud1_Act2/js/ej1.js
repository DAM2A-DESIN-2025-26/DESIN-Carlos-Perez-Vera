/* 1. Crea un script que pida al usuario su nombre y apellidos y muestre:*/

let nombre="";
let apellido1="";
let apellido2="";
let nombreUsuario ="";
let contraseña="";

/* El tamaño del nombre más los apellidos (sin contar espacios).*/

/* La cadena en minúsculas y en mayúsculas.*/

/* Que divida el nombre y los apellidos y los muestre en 3 líneas, donde ponga:*/

function nombreCompleto(nombre,apellido1,apellido2){
    this.nombreCompleto=prompt("Introduzca su nombre y apellidos");
    var cadena = this.nombreCompleto;
    const sinEspacios = cadena.replace(/\s+/g, '');
    console.log("El tamaño del nombre es: "+sinEspacios.length);
    console.log("El nombre en minúsculas es: "+cadena.toLowerCase());
    console.log("El nombre en mayúsculas es: "+cadena.toUpperCase());
    const dividir = cadena.split(" ");
    const nombre = dividir[0] || " ";
    const apellido1 = dividir[1] || " ";
    const apellido2 = dividir[2] || " ";
    console.log("Nombre: "+nombre+"\n"+"Primer Apellido: "+apellido1+"\n"+"Segundo Apellido: "+apellido2);
    return nombre,apellido1,apellido2;

    
}



/* Una propuesta de nombre de usuario, compuesto por el nombre, la inicial del*/
/* primer apellido y la inicial del segundo: ej. Para Javier Gonzalez Pisano sería*/
/* javiergp. Implementa esta funcionalidad mediante una función anónima.*/
/* Una propuesta de nombre de usuario compuesto por las dos primeras letras del*/
/* nombre y de los dos apellidos: ej. jagopi. Implementa esta funcionalidad*/
/* mediante una función flecha. */

function Contraseña(nombre,apellido1,apellido2){
    const crearContraseña = function(nombre,apellido1,apellido2){
        return(nombre+apellido1.charAt(0)+apellido2.charAt(0)).toLowerCase();
    }
    nombreUsuario=crearContraseña(nombre,apellido1,apellido2);
    console.log("El nombre de usuario es: "+contraseña);

}

function nombreUsuario(nombre,apellido1,apellido2){

    const crearNombreUsuario = (nombre,apellido1,apellido2) => {
        (nombre.slice(0, 2) + apellido1.slice(0, 2) + apellido2.slice(0, 2)).toLowerCase();
        console.log("El nombre de usuario es: "+nombreUsuario);
    }
}

function contraseñaSegura(nombreUsuario){

    const contraseñaS = (nombreUsuario) => {
        let contra="";
        for(let i=0;i<nombreUsuario.length;i++){
            contra+=nombre[i]+i;
        }
        return contra;
    }
}

nombreCompleto(nombre,apellido1,apellido2);
