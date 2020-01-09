// /2.- Crear una función de orden superior que reciba como
//     argumento un mensaje y callback. Según el callback que
//     se pase como argumento, la función de orden superior
//     debe mostrar el mensaje en un console.warn o en un console.log
cadena = "Hola mundo";
//Callback
const mensaje = (tipo, cadena) => {
    return tipo(cadena);
}

const mensaje2 = (char) => {
    return "El mensaje del ejercicio 2 es: " + char;
}

console.log(mensaje(mensaje2,cadena)); //Impresión de consola del callback
//mensaje2 es una función que recibe un parámetro, hecha constante. 
//"cadena" es una variale string 

console.warn(mensaje(mensaje2,cadena));