
const sedes = ["Ayuntamiento","Polideportivo","Instituto","Mercado","Colegio"];
const partidos = ["PV","OV","VpSI","UPV"];

const resultados = [];

for (let sede of sedes){

    let votoSede = {sede:sede};

    for (let partido of partidos){
    let votos = Math.floor(Math.random()*6+5);
    votoSede[partido] = votos; 
}
    resultados.push(votoSede);

}

//AMPÑIACION (Total de votos)

/* let filaTotalVotos= {sede : "TOTAL"}

for (let partido of partidos){
    filaTotalVotos[partido] = votos[partido];

}

console.table(resultados); */
