// .push()
let numArray = [1,2,3,4,5];

function newNum(){
    numArray.push(6,7);
    console.log(numArray);
}

newNum();

let txtArray = ["Ana", "Juan", "Diego", "Lautaro"];

function addCharacters(){
    txtArray.push("Chris", "Maria");
    console.log(txtArray);
}
addCharacters();

// .shift

let array = [1,2,3,4,5];

let shiftArray = array.shift();
console.log(array);

// .pop()

let arrayP = [1,2,3,4,5];

let shiftArrayP = arrayP.pop();
console.log(arrayP);

// Splice

const fruits = ['apple', 'banana', 'orange', 'grapefruit'];
// Eliminar el elemento en el índice 2 (orange)
fruits.splice(2, 1);
console.log(fruits); // Output: ['apple', 'banana', 'grapefruit']

// Eliminar los elementos en el índice 1 y 2 (banana y grapefruit)
fruits.splice(1, 2);
console.log(fruits); // Output: ['apple']


const colors = ['red', 'green', 'blue'];
// Reemplazar el elemento en el índice 1 (green) por 'yellow'
colors.splice(1, 1, 'yellow');
console.log(colors); // Output: ['red', 'yellow', 'blue']

// Reemplazar los elementos en los índices 0 y 1 (red y yellow) por 'orange', 'purple', 'pink'
colors.splice(0, 2, 'orange', 'purple', 'pink');
console.log(colors); // Output: ['orange', 'purple', 'pink', 'blue']