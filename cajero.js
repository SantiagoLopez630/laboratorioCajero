//--------Parte 1: Solicitar al usuario que ingrese dos números y una operación matemática---------------------

const prompt = require('prompt-sync')();
// let numero1 = parseInt(prompt("Ingrese el primer número: ")); // Solicita al usuario que ingrese el primer número y lo convierte a un entero
// let numero2 = parseInt(prompt("Ingrese el segundo número: ")); // Solicita al usuario que ingrese el segundo número y lo convierte a un entero
// let operacion = prompt("Ingrese la operacion deseada: ");
// let resultado = numero1 + numero2;

//console.log("El resultado de la operación es: " + resultado); // Muestra el resultado de la operación en la consola

//--------Parte 2:identificar la operación---------------------

let activo = true;
let contador = 0;

while (activo) {
    
    let numero1 = parseInt(prompt("Ingrese el primer número: "));
    let numero2 = parseInt(prompt("Ingrese el segundo número: "));
    let operacion = prompt("Ingrese la operación deseada (+ para suma, - para resta, * para multiplicación, / para división): ");
    contador++;

    if (typeof numero1 !== "number" || typeof numero2 !== "number" || operacion !== "+" && operacion !== "-" && operacion !== "*" && operacion !== "/") {
        console.log("Error: Debe ingresar dos números y una operación válida. o oprime ´no´ para salir del programa.");
        continue;
    }


    if (operacion === "+") {
        resultado = numero1 + numero2;
        console.log("El resultado de la suma es: " + resultado);
    } else if (operacion === "-") {
    resultado = numero1 - numero2;
    console.log("El resultado de la resta es: " + resultado);
} else if (operacion === "*") {
    resultado = numero1 * numero2;
    console.log("El resultado de la multiplicación es: " + resultado);
} else if (operacion === "/") {
    if (numero2 !== 0) {
        resultado = numero1 / numero2;
        console.log("El resultado de la división es: " + resultado);
    }
    else {
        console.log("Error: No se puede dividir entre cero.");
    }

} else {
    console.log("Operación no válida. Por favor, ingrese una operación válida (+, -, *, /).");
}

    let continuar = prompt("¿Quieres realizar otra operación? (si/no): ");
    

    if (continuar.toLowerCase() === "no") {
        activo = false;
        console.log("Saliendo del programa.", contador, "operaciones realizadas.");

    } else if (continuar.toLowerCase() !== "si") {
        console.log("Respuesta no válida. Saliendo del programa.", contador, "operaciones realizadas.");
        activo = false;
    }   




}
