var frutas = ["Manzana", "Plátano", "Cereza", "Fresas"];

console.log(frutas.length); // longitud o numero de elementos
console.log(frutas[n]); // acceder al elemento por medio de index

//Mutar o alterar Array

var masFrutas = frutas.push("Uvas") //añadir elementos al final del array

var ultimo = frutas.pop()//Eliminar el último elemento del Array

var nuevaLongitud = frutas.unshift("Uvas");//añadir elemento al inicio del array

var borrarFruta = frutas.shift("Uvas");//Borrar el primer elemento del array

var posicion = frutas.indexOf("Cereza");//Devuelve el index o posicion del elemento```

var reversa = frutas.reverse();//Reverse, metodo que establece que el array invierte los elementos

var sort = frutas.sort();//Sort, metodo para ordenar alfabeticamente los array con datos de tipo String

var slice = frutas.slice(1,3);//método que puede contener uno o dos argumentos, que indiquen el inicio y parada de posiciones, pues devuelve los elementos contenidos en el array, de acuerdo a los argumentos indicados

var sliceN = frutas.slice(2);//Si solo se indica un argumento se tomará como inicio ese argumento y como final la última posición



//Playground

function solution(arraySecreto) {
    if(typeof arraySecreto[0] === 'string'){
        return true
    } else {
        return false
    }
}
console.log(solution(["Huevo", "Gallina", "Vaca"]))
console.log(solution([1, "Gallina", "Vaca"]))

// Solución más eficiente

function solution(arraySecreto){
    return typeof arraySecreto[0] === 'string'
}

console.log(solution(["Huevo", "Gallina", "Vaca"]))
console.log(solution([1, "Gallina", "Vaca"]))