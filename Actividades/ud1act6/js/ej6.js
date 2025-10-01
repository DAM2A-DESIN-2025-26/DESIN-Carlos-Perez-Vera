

const numero=prompt("Introduzca el dinero que quiere convertir...");


function billetesDe500(numero,sobra){
    let Nbilletes500=0;
     for(let i=numero;i<500;i++){
        let Nbilletes500=numero/500;
        let sobra500 =numero%500;
    }
    
alert(
        cantidad + "€ equivale a " + 
        Nbilletes500 + " billetes de 500€ y sobran " + sobra + "€."
    );    
}

billetesDe500( numero,sobra);