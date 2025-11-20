// <-- INICIO -->
alert("Bienvenido a la calculadora V2, presiona enter para continuar");

// 1. Pedimos los datos al usuario
let numero1 = parseFloat(prompt("Dame tu primer número:"));
let numero2 = parseFloat(prompt("Dame tu segundo número:"));

// 2. Menú de opciones
// Investigue y encontre que \n sirve para hacer saltos de línea en el mensaje
let accion = prompt("¿Qué quieres hacer?\n1. Sumar\n2. Restar\n3. Multiplicar\n4. Dividir\n5. Hacer todas");

// --- DEFINICIÓN DE FUNCIONES ---

function sumar(numero1, numero2) {
    return numero1 + numero2;
}

function resta(numero1, numero2) {
    return numero1 - numero2;
}

function multiplicacion(numero1, numero2) {
    return numero1 * numero2;
}

function division(numero1, numero2) {
    return numero1 / numero2;
}

// Encontre que switch evalúa la variable que cree, "accion" y busca el caso que coincida
switch (accion) {
    case "1":
        let resSuma = sumar(numero1, numero2);
        alert("La suma es: " + resSuma);
        break; // Encontre que break le dice al código que deje de buscar

    case "2":
        let resResta = resta(numero1, numero2);
        alert("La resta es: " + resResta);
        break;

    case "3":
        let resMulti = multiplicacion(numero1, numero2);
        alert("La multiplicación es: " + resMulti);
        break;

    case "4":
        let resDiv = division(numero1, numero2);
        alert("La división es: " + resDiv);
        break;

    case "5":
        alert("Suma: " + sumar(numero1, numero2) + 
              "\nResta: " + resta(numero1, numero2) + 
              "\nMultiplicación: " + multiplicacion(numero1, numero2) + 
              "\nDivisión: " + division(numero1, numero2));
        break;

    default:
        // Esto se ejecuta si el usuario escribe algo que no sea 1, 2, 3, 4 o 5, como un error
        alert("Opción no válida. Por favor recarga y elige del 1 al 5.");
        break;
}

// <-- FIN -->
