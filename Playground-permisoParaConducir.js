function solution(car){
    if(car.licensePlate){
        car.drivingLicense = true;
    } else {
        car.drivingLicense = false;
    }
    return car;
}

console.log(solution({
    color: 'red',
    brand: 'Kia',
}));

console.log(solution({
color: 'gray',
brand: 'Chevrolet',
licensePlate: 'AAA111',
}));

console.log(solution({ licensePlate: 'RGB255'  }));


// Otra solución más óptima de los aportes de la clase

function solution(car) {
    !car["licensePlate"] ? car.drivingLicense = false : car.drivingLicense = true
    return car
}

// Otra solución de los aportes de la clase

function solution(car) {
    car.drivingLicense = Boolean(car.licensePlate);
    return car;
}