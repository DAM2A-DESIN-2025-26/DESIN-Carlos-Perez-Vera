

var diasSemana= ["Lunes","Martes","Miercoles","Viernes","Sabado","Domingo"];
//var meses= ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];

Date();


function infoCumple(){

    var dia =parseInt( prompt("Que dia es hoy? "));
    var mes =parseInt( prompt("De que mes?"));

    var hoy = new Date();
    var anioActual = hoy.getFullYear;

    var cumpleaños = new Date(anioActual,mes-1,dia);

    if (cumpleaños<hoy){
        cumpleaños = new Date(anioActual +1,mes-1,dia);
    }

    var miliSegs = cumpleaños-hoy;
    var dias = Math.ceil(miliSegs / (1000 * 60 * 60 * 24));
    
    var diasSemana = diasSemana[cumpleaños.getDay()]

    alert( )
    
}


infoCumple();