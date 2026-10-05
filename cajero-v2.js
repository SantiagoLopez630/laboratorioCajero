const prompt = require('prompt-sync')();

function pedirNumero(mensaje) {
    let entrada = prompt(mensaje);
    return Number(entrada);
}

function calcular(numero1, operacion, numero2) {
    if (operacion === "+") {
        return numero1 + numero2;
    } else if (operacion === "-") {
        return numero1 - numero2;
    } else if (operacion === "*") {
        return numero1 * numero2;
    } else if (operacion === "/") {
        if (numero2 === 0) {
            return "No se puede dividir entre 0";
        }
        return numero1 / numero2;
    } else {
        return "Operación no válida";
    }
}

function mostrarResultado(resultado) {
    console.log(`Resultado: ${resultado}`);
}

function atenderOperacion() {
    let numero1 = pedirNumero("Ingrese el primer número: ");
    let operacion = prompt("Ingrese la operación deseada (+, -, *, /): ");
    let numero2 = pedirNumero("Ingrese el segundo número: ");

    let resultado = calcular(numero1, operacion, numero2);
    mostrarResultado(resultado);
}


let activo = true;
let contador = 0;

while (activo) {
    atenderOperacion();
    contador++;

    let continuar = prompt("¿Quieres realizar otra operación? (si/no): ");

    if (continuar.toLowerCase() === "no") {
        activo = false;
        console.log("Saliendo del programa.", contador, "operaciones realizadas.");
    } else if (continuar.toLowerCase() !== "si") {
        console.log("Respuesta no válida. Saliendo del programa.", contador, "operaciones realizadas.");
        activo = false;
    }
}