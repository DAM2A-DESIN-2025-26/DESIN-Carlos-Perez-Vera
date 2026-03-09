function caraOcruz(){
    let aleatorio = Math.random();

    if(aleatorio<0.5){
        return "Cara";
    }else{
        return "Cruz";
    }

}

for(let i = 0; i <10; i++){
    let resultado = caraOcruz();
    console.log("Lanzamiento "+i+": "+resultado);
}