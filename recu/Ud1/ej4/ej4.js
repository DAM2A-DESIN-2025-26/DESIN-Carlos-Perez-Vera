
let tipos = [true,1,"Casa",function(){}];

const tiposEnArray = (tipos) => {

    let resultado=[];
    for(let i =0; i<tipos.length;i++){
        resultado[i]=typeof tipos[i];
    }

    return resultado;
}


console.log(tiposEnArray(tipos))