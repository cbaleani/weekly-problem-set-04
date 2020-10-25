/* 1. Variables y Operadores.

a) Crear dos variables numéricas y utilizar el operador suma para guardar el valor de la suma de ambos números en una 
   3er variable.*/
var numOne = 10;
var numTwo = 5;
var numSum = numOne + numTwo;
console.log(numSum);
// b) Crear dos variables de tipo String y concatenarlas guardando el resultado en una 3er variable.
var hello = 'Hello';
var name = 'John';
var phrase = hello + ' ' + name;
console.log(phrase);
/*c) Crear dos variables de tipo String y sumar el largo de cada variable (cantidad de letras del string) guardando el 
     resultado de la suma en una 3er variable (utilizar length).*/
var drink = 'tea';
var food = 'bread';
var total = drink.length + food.length;
console.log(total);

/* 2. Strings

a) Crear una variable de tipo string con al menos 10 caracteres y convertir todo el texto en mayúscula (utilizar 
    toUpperCase).*/
var itemAWord = 'learn to program in java script';
console.log(itemAWord.toUpperCase());
/*b) Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los primeros 5 
     caracteres guardando el resultado en una nueva variable (utilizar substring).*/
var itemBWord = 'development';
var newItemBWord = itemBWord.substring(0,5);
console.log(newItemBWord);
/*c) Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los últimos 3 caracteres 
   guardando el resultado en una nueva variable (utilizar substring).*/
var itemCWord = 'web programming';
var lastThreeCharacters = itemCWord.substring(12);
console.log(lastThreeCharacters);
/*d) Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con la primera letra en 
     mayúscula y las demás en minúscula. Guardar el resultado en una nueva variable (utilizar substring, toUpperCase, 
     toLowerCase y el operador +).*/
var itemDWord = 'software development';
var newItemDWord = itemDWord.substring(0,1).toUpperCase() + itemDWord.substring(1);
console.log(newItemDWord);
/*e) Crear una variable de tipo string con al menos 10 caracteres y algún espacio en blanco. Encontrar la posición del 
     primer espacio en blanco y guardarla en una variable (utilizar indexOf).*/
var itemEWord = 'computer science';
var spaceCharacterIndex = itemEWord.indexOf(' ');
console.log(spaceCharacterIndex);
/*f) Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y algún espacio entre medio). 
     Utilizar los métodos de los ejercicios anteriores para generar un nuevo string que tenga la primera letra de ambas 
     palabras en mayúscula y las demás letras en minúscula (utilizar indexOf, substring, toUpperCase, toLowerCase y el 
     operador +).*/
var itemFWord = 'event-oriented programming languages';
var secondWordIndex = itemFWord.indexOf('programming');
var thirdWordIndex = itemFWord.indexOf('languages');
var newString = itemFWord.substring(0,1).toUpperCase()
  + itemFWord.substring(1, secondWordIndex)
  + itemFWord.substring(secondWordIndex, secondWordIndex + 1).toUpperCase()
  + itemFWord.substring(secondWordIndex + 1, thirdWordIndex) 
  + itemFWord.substring(thirdWordIndex, thirdWordIndex + 1).toUpperCase()
  + itemFWord.substring(thirdWordIndex +1);
console.log(newString);

/* 3. Arrays.

a) Dado el siguiente array: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 
   'Octubre', 'Noviembre', 'Diciembre'] mostrar por consola los meses 5 y 11 (utilizar console.log).*/
var months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 
'Noviembre', 'Diciembre'];
console.log(months[4], months[10]);
// b) Ordenar el array de meses alfabéticamente y mostrarlo por consola (utilizar sort).
console.log(months.sort());
// c) Agregar un elemento al principio y al final del array (utilizar unshift y push).
months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 
'Noviembre', 'Diciembre'];
months.unshift('Year 2020');
months.push('End');
console.log(months);
// d) Quitar un elemento del principio y del final del array (utilizar shift y pop).
months.shift();
months.pop();
console.log(months);
// e) Invertir el orden del array (utilizar reverse).
console.log(months.reverse());
// f) Unir todos los elementos del array en un único string donde cada mes este separado por un guión - (utilizar join).
console.log(months.join('-'));
// g) Crear una copia del array de meses que contenga desde Mayo hasta Noviembre (utilizar slice).
months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 
'Noviembre', 'Diciembre'];
sliceMonths = months.slice(4,11);
console.log(sliceMonths);

/* 4. If Else
a) Crear un número aleatorio entre 0 y 1 utilizando la función Math.random(), si el valor es mayor o igual que 0,5 
mostrar una alerta con el mensaje “Greater than 0,5” y sino un alerta con el mensaje “Lower than 0,5” */
randomNumber = Math.random();
console.log(randomNumber);
if (randomNumber >= 0.5){
     alert('Greater than 0.5')
}else{
     alert('Lower than 0.5')     
}
/* b) Crear una variable “Age” que contenga un número entero entre 0 y 100 y muestre los siguientes mensajes de alerta:
      “Bebe” si la edad es menor a 2 años
      “Nino” si la edad es entre 2 y 12 años
      “Adolecente” si la edad es entre 13 y 19 años
      “Joven” si la edad está entre 20 y 30 años
      “Adulto” entre 31 y 60 años
      “Adulto mayor” entre 61 y 75 años
      “Anciano” si es mayor a 75 años.*/
var age = 75;
if (age < 2){
     alert('Bebe')
}else if (age >= 2 && age <= 12){
     alert('Nino')
}else if (age >= 13 && age <= 19){
     alert('Adolescente')
}else if (age >= 20 && age <= 30){
     alert('Joven')
}else if (age >= 31 && age <= 60){
     alert('Adulto')
}else if (age >= 61 && age <= 75){
     alert('Adulto Mayor')
}else{
     alert('Anciano')
}













