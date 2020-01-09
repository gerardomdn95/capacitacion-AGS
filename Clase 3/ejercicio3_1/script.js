//1.- Muestra un mensaje en consola mediante un callback 
const mensaje = (tipo, cadena) => {
    return tipo(cadena);
}

const mensaje2 = (char) => {
    return "El mensaje es: " + char;
}

console.log(mensaje(mensaje2,"Hola mundo"));