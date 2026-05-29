function calcularPrecioFinal(precio,descuento){
    let cantidadDescuento = precio*(descuento/100);
    let precioFinal = precio - cantidadDescuento;
    return precioFinal;
}

let precio = Number(prompt("Introduce el precio del producto"));
let descuento = Number(prompt("Introduce el descuento"));

console.log(calcularPrecioFinal(precio,descuento));