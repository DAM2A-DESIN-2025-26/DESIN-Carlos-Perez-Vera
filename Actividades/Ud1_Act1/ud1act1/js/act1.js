function LeerNombre(){
    let nombre = "Carlos";
    let apellidos = "Pérez Vera";
    let añoDeNacimiento = 2004;
    let dineroBanco = 100;

    alert(nombre + "\n" + apellidos + "\n" + (dineroBanco + 10000));
}

function preguntarDatos(){
    let nombre = prompt("¿Cuál es tu nombre?");
    let apellidos = prompt("¿Y tus apellidos?");
    let añoDeNacimiento = prompt("¿En qué año naciste?");
    let dineroBanco = parseFloat(prompt("¿Cuánto dinero tienes en el banco?"));

    alert(nombre + "\n" + apellidos + "\n" + (dineroBanco + 10000));
}
LeerNombre();
preguntarDatos();