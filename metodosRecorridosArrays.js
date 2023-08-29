var articulos = [
    { nombre: "Bici", costo: 3000 },
    { nombre: "Tv", costo: 2500 },
    { nombre: "Libro", costo: 320 },
    { nombre: "Celular", costo: 10000 },
    { nombre: "Laptop", costo: 20000 },
    { nombre: "Teclado", costo: 500 },
    { nombre: "Audifonos", costo: 1700 },
];

// Filter
var articulosFiltrados = articulos.filter(function(articulo){
    return articulo.costo <= 500;
});

// map
var nombreArticulos = articulos.map(function(articulo){
    return articulo.nombre;
});
// Map, recorre cada array y si la condición se cumple, entonces crea un array nuevo con lo que devuelve la condición dada
console.log(nombreArticulos);

// find
var encuentraArticulo = articulos.find(function(articulo){
    return articulo.nombre === "laptop";
});

// forEach
articulos.forEach(function(articulo){
    console.log(articulo.nombre);
});

// some
var articulosBaratos = articulos.some(function(articulo){
    return articulo.costo <= 700;
});
// Sirve para verificar si al menos un elemento cumple con la condición dada.
// Retorna true o false si se cumple la condición dada.