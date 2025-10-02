const tipo = "";
const tipoOP = "";
const poderAtk=0;
const defensaOP=0;
function calculaImpacto(tipo,tipoOP,poderAtk,defensaOP){

    const efectividad = {
    fuego:{
        hierba:2,
        agua:0.5,
        electricidad:1,
        fuego:0.5
    }
    ,agua:{
        fuego:2,
        hierba:0.5,
        electricidad:1,
        agua:0.5    
    }
    ,hierba:{
        agua:2,
        fuego:0.5,
        electricidad:1,
        hierba:0.5  
    }
    ,electricidad:{
        agua:2,
        hierba:1,
        fuego:1,
        electricidad:0.5
    }
}
const multiplicador = efectividad[tipo][tipoOP] || 1;

const resultado= 50*(poderAtk/defensaOP)*multiplicador;

}
 
console.log(calculaImpacto("fuego","hierba",100,50));
