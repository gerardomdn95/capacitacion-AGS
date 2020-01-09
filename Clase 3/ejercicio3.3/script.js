// 3.- Crear una función de orden superior que reciba como 
//     argumentos dos números y un callback. Según el callback
//     que se pase a la función, se devuelve la suma de los
//     dos números, la resta de los dos números o la
//     multiplicación de los dos números.

//Callback
const funcion = (n1, n2, callback) => { 
    return callback(n1, n2);
}

const suma = (a, b) => {
    return a + b;
}

const resta = (c, d) => {
    return c - d;
}

const multiplicacion = (e, f) => {
    return e * f;
}

console.log(funcion(5, 4, suma));
console.log(funcion(5, 4, resta));
console.log(funcion(5, 4, multiplicacion));



