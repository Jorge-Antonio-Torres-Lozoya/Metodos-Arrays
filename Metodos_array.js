let array=["Jorge","Javier","Carlos" ,"Luis"];
var numeros = [1, 2, 3, 4, 5];
let palabra="Luis";

// Ordena de acuerdo al codigo ASCII, Ordena A-Z
array.sort();
console.log(array);

// Regresa true si encuentra el parametro que bsucas en el array
console.log(array.includes(palabra));

// Agrega o elimina elementos existentes en un array, el primer parametro indoca la posicion donde se ingresara 
// el 2do parametro indica cuantos elementos borrara 
// y despues se agrega el elemnto que quieras agregar en el array
array.splice(1,0,"Rodrigo")
console.log(array);



// Array.lastIndexOf() imprime la posicion en la q se encuenta el valorBusqueda, string
console.log(array.lastIndexOf('Luis'));

// Array.findIndex() recibe una funcion, imprimira la posicion del primer elemento que cumplan con la funcion
function numeroMayor(numeros) {
    return numeros ==2;
}
console.log(numeros.findIndex(numeroMayor));

// Array.shift() borra el primer elemento
array.shift();
console.log(array);

// Array.unshift() agrega un elemento al principio
array.unshift('Soy un elemento agregado por unshift');
console.log(array);

// Array.slice() Devolver una porción de un array existente, 1er param. lo mantiene, 2do param. lo corta desde esa posicion
console.log(array.slice(1, 4));

// Array.reverse() ordena de reversa
console.log(array.reverse());


//CONSTRUCTORS
// Array.from() usar Array, te crea un array nuevo con los atributos separados del string introducido
console.log(Array.from('adios'));


//Array(numero de elementos q contendra el array, length)
//Array.of(elemento que contendra el array)
console.log(Array.of(2));

// (target, start, end) -- target: en q index se va a insertar la copia del start -- start: de donde inicia la copia -- end: donde termina la copia, se queda en la posicion en la q esta, no toma en cuenta el target
console.log(array.copyWithin(0, 2, 4));