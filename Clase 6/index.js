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