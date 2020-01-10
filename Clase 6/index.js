// const array = ['México', 'Panamá', 'Costa Rica'];

// // Imperativa
// // for(let i = 0; i <= 2; i++) {
// //     console.log(array[i]);
// // }

// // Funcional
// // Recorre un arreglo
// array.forEach(elemnt => {
//     console.log(elemnt);
// });

// const pokemons = [
//     {
//         name: 'pikachu',
//         type: 'electric',
//         id: 25
//     },
//     {
//         name: 'bulbasaur',
//         type: 'grass',
//         id: 1
//     },
//     {
//         name: 'zapdos',
//         type: 'electric',
//         id: 100
//     },
// ]

// // map
// // Generar un nuevo arreglo a partir de uno
// const newArray = array.map((element, index) => `${index + 1} - ${element.toUpperCase()}`);
// const pokeNames = pokemons.map((element) => `${element.id} - ${element.name}`);

// console.log(newArray);
// console.log(pokeNames);

// // Filter
// const filteredArray = array.filter((element) => element.length > 8);
// console.log(filteredArray);

// const electricPokemon = pokemons.filter((element) => element.type === 'electric');
// console.log(electricPokemon);

// // Reduce
// const numeros = [1, 0, 5, 3, 2, 10];

// const reducido = numeros.reduce((sum, element) => sum + element);
// console.log(reducido);

// Composisión de funciones
const x = () => 1;
const y = (x) => x();

console.log(x());
console.log(y(x));

// Inmutabilidad
const pi = 3.1416;
const e = 4.1;

let a = 6263;

// Efectos secundarios
const obtenNombre = (b) => {
    let a = 'Medina ';
    return 'Gerardo ' + a + b;
}
console.log(obtenNombre('Romero'));

// Estados compartidos
let sensei = 'Gerardo';
let info = {
    edad: 24,
    cinta: 'Cinta roja',
    nombre: sensei
}

console.log(info)