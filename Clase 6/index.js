<<<<<<< HEAD
/*const array = ['México', 'Panama', 'Costa Rica'];

// //Imperativa (le estamos diciendo que va a hacer con estructuras)
// for(let i=0;i<2;i++){
//     console.log(array[i]);
// }

//Funcional
//Recorre un arreglo

//array.forEach((element) => console.log(element));

array.forEach(element => {
    console.log(element);
});

//Método map
//Genera un arreglo apartir de otro principal

//Metí el arreglo a una variable, acabamos de crear un vetor
const newArray = array.map((element) => element.toUpperCase()); 

//Map puede devolver valor e índices
const newArray2 = array.map((element, index) => `${index + 1} - ${element.toLocaleUpperCase()}`); 
console.log(newArray2);

//Método filter
const filterArray = array.filter((element) => element.length > 8);
console.log(filterArray);

//const pokemono

//Ejemplo pokemon
const pokeLectrico = array.filter((element) => element.length > 8);
console.log(filterArray);

//Reduce
const numeros = [1, 0, 5, 3, 2, 10];

const reducido = numeros.reduce((sum, element) => sum + element);
console.log(reducido);
*/

//Composición de funciones
const x = () => 1; //Esta función devuelve un 1
const y = (x) => x();
console.log(x());
console.log(y(x));
=======
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
>>>>>>> c08d24d3b26375aff2808989f95709ccc0f84128
