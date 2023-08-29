var miAuto = {
    marca: "Toyota",
    modelo: "Corolla",
    año: 2020
}

miAuto.marca
//Toyota

var miAuto = {
    marca: "Toyota",
    modelo: "Corolla",
    año: 2020,
    detallesDelAuto: function () {
        console.log(`Auto ${this.modelo} ${this.año}`);
    }
    // miAuto.detallesDelAuto();
    //Auto Corolla 2020
}


//Objetos: Función constructora
//Reto
function auto(marca, modelo, año) {
    this.marca = marca;
    this.modelo = modelo;
    this.año = año;
}

var Autos = [
    new auto("Tesla", "Model 3", 2020),
    new auto("Tesla", "Model X", 2018),
    new auto("Toyota", "Corolla", 2020),
];

for (let i = 0; i < Autos.length; i++) {
    var marcaF = prompt("Marca: ")
    var modeloF = prompt("Modelo: ")
    var añoF = parseInt(prompt("Año: "))

    var nuevosAutos = new auto(marcaF, modeloF, añoF)
    Autos.push(nuevosAutos)
}

console.log(Autos)