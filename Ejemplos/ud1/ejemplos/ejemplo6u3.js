/* Crea un formulario HTML que tenga:

• Una caja de texto

• Un botón Añadir. Al pulsar el mismo, se añadirá a la página

HTML un elemento de lista (<li>) cuyo contenido será el valor
de la caja de texto

• Si es la primera vez que se pulsa, deberá crearse el listado

• Un botón Quitar. Al pulsar el mismo,se eliminará del listado
todos aquellos valores cuyo texto coincida con el valor
introducido en la caja de texto */

var formulario = document.createElement("form");

var caja = document.createElement("div");

var boton = document.createElement("button");

var lista = document.createElement("li");



