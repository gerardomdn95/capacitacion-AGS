// 4.- Escribe una función de orden superior que reciba una cadena de
//     caracteres y debe devolver, mediante un callback, la
//     cadena de caracteres en mayúsculas o en minúsculas.
//             ordenSuperior("PejeLagarto", minus);
//             -> pejelagarto
//             ordenSuperior("PejeLagarto", mayus);
//             -> PEJELAGARTO

//Callback
const ordenSuperior = (cadena, mayusMinus) => {
    return mayusMinus(cadena);
}

function mayus(cadena){
    return cadena.toUpperCase();
}

function minus(cadena){
    return cadena.toLowerCase();
}

console.log(ordenSuperior("PejeLagarto", minus));
console.log(ordenSuperior("PejeLagarto", mayus));