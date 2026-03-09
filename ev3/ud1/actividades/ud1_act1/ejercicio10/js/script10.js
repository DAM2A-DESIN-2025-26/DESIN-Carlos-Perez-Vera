function calcularMedia(nota1,nota2,nota3){
    let media = (nota1+nota2+nota3)/3
    if(media>=5){
        return console.log("Has aprobado, tu media es de "+media);
    }else{
        return  console.log("Has suspendido, tu media es de "+media);
    }
}

let nota1 = Number(prompt("Introduce tu primera nota:"));
let nota2 = Number(prompt("Introduce tu segunda nota:"));
let nota3 = Number(prompt("Introduce tu tercera nota:"));

console.log(calcularMedia(nota1,nota2,nota3));

