// Crear elementos html desde java script
const input =
document.createElement("input");
input.id="valorInput";
input.placeholder = "Introduzca texto";

const btnGuardar=
btnGuardar.textContent="confirmar";
btnGuardar.onclick = GuarfarInfo;

const btnEliminar=
btnEliminar.textContent("Eliminar");
btnEliminar.onclick = BorrarDatos;


const btnMostrar=
btnMostrar.textContent("Mostrar");
btnMostrar.onclick

document.body.append(input,btnGuardar,btnMostrar,btnEliminar);

function introducir(){
    const valor = input.value;
    localStorage.setItem("DatoLocal",valor);
    alert("Guardado Completado ");
    

}