// var estudiantesClase = ["Maria", "Sergio", "Rosa", "Daniel"];

// function saludarEstudiantes(estudiante){
//     console.log(`Hola, ${estudiante}`);
// }

// while(estudiantesClase.length > 0){
//     var estudiante = estudiantesClase.shift();
//     saludarEstudiantes(estudiante);
// }

//Playground

//Solución con if
function solution(estudiantes, deathCount, nuevo){
    if(deathCount == 0){
        estudiantes.push(nuevo);
        return estudiantes;
    } else if(deathCount > 0){
        estudiantes.splice(estudiantes.length - deathCount, deathCount);
        estudiantes.push(nuevo);
        return estudiantes;
    }
}

//Solución con while
function solution(estudiantes, deathCount, nuevo){
    while(deathCount > 0){
        estudiantes.splice(-deathCount, deathCount);
        estudiantes.push(nuevo);
        return estudiantes;
    }
    estudiantes.push(nuevo);
    return estudiantes;
}

//Solución con for(Hecha por alguien de los comentarios)
function solution(estudiantes, deathCount, nuevo) {
    for (deathCount; deathCount > 0; deathCount--) {
      estudiantes.pop();
    }
    estudiantes.push(nuevo);
    return estudiantes;
}

//Otra solución con While
function solution(estudiantes, deathCount, nuevo) {
    while (deathCount > 0) {
      estudiantes.pop();
      deathCount--;
    }
    estudiantes.push(nuevo);
    return estudiantes;
}

console.log(solution(["Nico", "Zule", "Noru", "Celeste"], 3, "Juanita"))