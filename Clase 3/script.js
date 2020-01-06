console.log("Hola");
setTimeout(() => console.log("HOLA ASYNC"), 5000);
console.log("Hola 2");
console.log("Hola 3");
console.log("Hola 4");

// Callback
const operacion = (tipo, x, y) => {
    return tipo(x, y);
}

function suma(a, b) {
    return a + b;
}

const resta = (c, d) => {
    return c - d;
}

function mult(e, f) {
    return e * f;
}

console.log(operacion(suma, 3, 5));
console.log(operacion(resta, 3, 5));
console.log(operacion(mult, 3, 5));
console.log(operacion(function(i, j) {return i % j}, 20, 2));

//Cuello de botella
console.log(1);
setTimeout(() => console.log(2), 3000);
for(let i = 0; i<=9999999999;i++);
console.log(4);