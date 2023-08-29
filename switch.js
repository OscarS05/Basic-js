var numero = 2;

switch (numero) {
    case 1:
        console.log("Soy uno!");
        break;
    case 10:
        console.log("Soy 10!");
        break;
    case 100:
        console.log("Soy 100!");
        break;
    default:
        console.log("No soy nada");
        break;
}


// Reto piedra, papel o tijera
// Completado

var opt1 = "Piedra";
var opt2 = "Papel";
var opt3 = "Tijera";

var jugadaUsuario = "Piedra";
var jugadaComputadora = "Piedra";

function juego() {
    switch(jugadaUsuario){
        case "Piedra":
            switch (jugadaComputadora){
                case "Piedra":
                    console.log("El usuario jugó Piedra y la computadora Piedra");
                    console.log("Empate");
                    break;
                case "Papel":
                    console.log("El usuario jugó Piedra y la computadora Papel");
                    console.log("Perdiste");
                    break;
                case "Tijera":
                    console.log("El usuario jugó Piedra y la computadora Tijera");
                    console.log("Ganaste");
                    break;
            }
            break;
        case "Papel":
            switch (jugadaComputadora){
                case "Piedra":
                    console.log("El usuario jugó Papel y la computadora Piedra");
                    console.log("Ganaste");
                    break;
                case "Papel":
                    console.log("El usuario jugó Papel y la computadora Papel");
                    console.log("Empate");
                    break;
                case "Tijera":
                    console.log("El usuario jugó Papel y la computadora Tijera");
                    console.log("Perdiste");
                    break;
            }
            break;
        case "Tijera":
            switch (jugadaComputadora){
                case "Piedra":
                    console.log("El usuario jugó Tijera y la computadora Piedra");
                    console.log("Perdiste");
                    break;
                case "Papel":
                    console.log("El usuario jugó Tijera y la computadora Papel");
                    console.log("Ganaste");
                    break;
                case "Tijera":
                    console.log("El usuario jugó Tijera y la computadora Tijera");
                    console.log("Empate");
                    break;
            }
            break;
    }
}

juego();
