if(true) {
    console.log("Hola")
}


var edad = 18;

if(edad === 18) {
    console.log("Puedes votar, será tu 1ra votación")
}else if(edad > 18) {
    console.log("Puedes votar de nuevo")
} else{
    console.log("Aun no puedes votar")
}




condition ? true : false;

var numero = 1;

var resultado = numero === 1 ? "Sí soy un uno" : "No, no soy un uno";


// Reto, hacer piedra papel o tijera

var opt1 = "piedra";
var opt2 = "papel";
var opt3 = "tijera";
var Usuario = opt2;
var Computadora = opt3;

function juego() {
        if(Usuario == opt1 && Computadora == opt2) {
            console.log("Perdiste");
        } else if(Usuario == opt2 && Computadora == opt3){
            console.log("Perdiste");
        } else if(Usuario == opt3 && Computadora == opt1) {
            console.log("Perdiste");
        }else {
            console.log("Ganaste");
        }
}

console.log(juego())