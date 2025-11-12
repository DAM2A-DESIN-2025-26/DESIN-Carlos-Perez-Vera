

function crearPersona(nombre,apellidos,edad=null,...contactos){
    const persona ={
        nombreCompleto : `${nombre} ${apellidos}`,
        edad : edad,
        contactos : contactos
    };
    mostrarInfo(persona);
}

/* function crearPersona(){

    // Caso 1: Solo nombre y apellidos.

    function persona1(nombre,apellidos){

        const persona = {

            nombreCompleto: ` ${nombre}${apellidos}`, 
            
        }
        mostrarInfo(persona); 
        
    }

    //Caso 2: Nombre, apellidos y edad.

    function persona2(nombre,apellidos,edad=0){
        const persona = {
            nimbreCompleto: `${nombre}${apellidos}`,
            edad: edad
        }
        mostrarInfo(persona)
    }

    //Caso 3: Nombre, apellidos, edad y contacto.

    function persona3(nombre,apellidos,edad=0,...contactos){
        const persona= {
            nimbreCompleto: `${nombre}${apellidos}`,
            edad: edad,
            contactos: contactos
        }
        mostrarInfo(persona);
    }
 */
    //Mostrar info persona

function mostrarInfo(persona){

        console.log("Informacion de usuario");
        console.log(`Nombre: ${persona.nombreCompleto}`);
        console.log(`Edad: ${persona.edad}`);

        if(persona.contactos && persona.contactos.length>0){
            console.log("Formas de contacto");
            persona.contactos.forEach((c,i) => console.log(`(${i + 1}) ${c}`));
        }else{
            console.log("No se han introducido formas de contacto.");
        }
    }
crearPersona("Ana","Vera");

crearPersona("Juan","Ramirez",28);

crearPersona("Victor","Pérez",45,654094432,"juan@gmail.com");
