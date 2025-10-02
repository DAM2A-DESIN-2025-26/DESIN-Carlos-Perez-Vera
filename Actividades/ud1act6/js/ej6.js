const numero = parseInt(prompt("Introduzca el dinero que quiere convertir..."));

function valorABilletes(numero) {
    let sobra = numero;

    let Nbilletes500 = Math.floor(sobra / 500);
    sobra = sobra % 500;

    let Nbilletes200 = Math.floor(sobra / 200);
    sobra = sobra % 200;

    let Nbilletes100 = Math.floor(sobra / 100);
    sobra = sobra % 100;

    let Nbilletes50 = Math.floor(sobra / 50);
    sobra = sobra % 50;

    let Nbilletes20 = Math.floor(sobra / 20);
    sobra = sobra % 20;

    let Nbilletes10 = Math.floor(sobra / 10);
    sobra = sobra % 10;

    let Nbilletes5 = Math.floor(sobra / 5);
    sobra = sobra % 5;

    alert(
        "El numero de billetes de 500 es: " + Nbilletes500 + "\n" +
        "El numero de billetes de 200 es: " + Nbilletes200 + "\n" +
        "El numero de billetes de 100 es: " + Nbilletes100 + "\n" +
        "El numero de billetes de 50 es: " + Nbilletes50 + "\n" +
        "El numero de billetes de 20 es: " + Nbilletes20 + "\n" +
        "El numero de billetes de 10 es: " + Nbilletes10 + "\n" +
        "El numero de billetes de 5 es: " + Nbilletes5 + "\n" +
        "Sobra sin convertir: " + sobra
    );
}

valorABilletes(numero);




 