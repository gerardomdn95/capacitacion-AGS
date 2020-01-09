//1.- Muestra un mensaje en consola mediante un callback 
//Callback
const mensaje = (tipo, cadena) => {
    return tipo(cadena);
}
console.log(mensaje(function(cadena) {return "El mensaje es: " + cadena;}, "Hola mundo!!!!!!"));
//console.log(operacion(function(i, j) {return i % j}, 20, 2)); Callback de ejemplo
