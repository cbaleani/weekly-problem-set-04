/* 1. Variables y Operadores.

a) Crear dos variables numéricas y utilizar el operador suma para guardar el valor de la suma de ambos números en una 
   3er variable.*/
var numOne = 10;
var numTwo = 5;
var numSum = numOne + numTwo;
console.log(numSum);

//b) Crear dos variables de tipo String y concatenarlas guardando el resultado en una 3er variable.
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
var itemAWord = 'learn to program in javaScript';
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

//b) Ordenar el array de meses alfabéticamente y mostrarlo por consola (utilizar sort).
console.log(months.sort());

//c) Agregar un elemento al principio y al final del array (utilizar unshift y push).
months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 
'Noviembre', 'Diciembre'];
months.unshift('Year 2020');
months.push('End');
console.log(months);

//d) Quitar un elemento del principio y del final del array (utilizar shift y pop).
months.shift();
months.pop();
console.log(months);

//e) Invertir el orden del array (utilizar reverse).
console.log(months.reverse());

//f) Unir todos los elementos del array en un único string donde cada mes este separado por un guión - (utilizar join).
console.log(months.join('-'));

//g) Crear una copia del array de meses que contenga desde Mayo hasta Noviembre (utilizar slice).
months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 
'Noviembre', 'Diciembre'];
sliceMonths = months.slice(4,11);
console.log(sliceMonths);

/* 4. If Else
a) Crear un número aleatorio entre 0 y 1 utilizando la función Math.random(), si el valor es mayor o igual que 0,5 
   mostrar una alerta con el mensaje “Greater than 0,5” y sino un alerta con el mensaje “Lower than 0,5” */
randomNumber = Math.random();
console.log(randomNumber);
if (randomNumber >= 0.5) {
  alert('Greater than 0.5')
} else {
    alert('Lower than 0.5')     
};

/* b) Crear una variable “Age” que contenga un número entero entre 0 y 100 y muestre los siguientes mensajes de alerta:
      “Bebe” si la edad es menor a 2 años
      “Nino” si la edad es entre 2 y 12 años
      “Adolecente” si la edad es entre 13 y 19 años
      “Joven” si la edad está entre 20 y 30 años
      “Adulto” entre 31 y 60 años
      “Adulto mayor” entre 61 y 75 años
      “Anciano” si es mayor a 75 años.*/
var age = 75;
if (age < 2) {
  alert('Bebe')
} else if (age >= 2 && age <= 12) {
  alert('Nino')
} else if (age >= 13 && age <= 19) {
  alert('Adolescente')
} else if (age >= 20 && age <= 30) {
  alert('Joven')
} else if (age >= 31 && age <= 60) {
  alert('Adulto')
} else if (age >= 61 && age <= 75) {
  alert('Adulto Mayor')
} else {
  alert('Anciano')
};

/* 5. For

a) Crear un array que contenga 5 palabras y recorrer dicho array utilizando un bucle for de JavaScript para mostrar una 
   alerta utilizando cada una de las palabras.*/
subjects = ['math', 'science', 'history', 'biology', 'chemistry'];
for (var i = 0; i <= subjects.length-1; i++) {
     alert(subjects[i]);
};

/* b) Al array anterior convertir la primera letra de cada palabra en mayúscula y mostrar una alerta por cada palabra 
      modificada.*/
for (var i = 0; i <= subjects.length-1; i++) {
     subjects[i] = subjects[i][0].toUpperCase() + subjects[i].slice(1);
     alert(subjects[i]);
};

/* c) Crear una variable llamada “sentence” que tenga un string vacío, luego al array del punto a) recorrerlo con un 
      bucle for para ir guardando cada palabra dentro de la variable sentence. Al final mostrar una única alerta con la 
      cadena completa.*/
var sentence = "";
subjects = ['math', 'science', 'history', 'biology', 'chemistry'];
for (var i = 0; i < subjects.length; i++) {
     sentence = sentence + subjects[i];
};
alert(sentence);

/* d) Crear una array vacío y con un bucle for de 10 repeticiones llenar el array con el número de la repetición, es 
      decir que al final de la ejecución del bucle for deberia haber 10 elementos dentro del array, desde el número 0 
      hasta al numero 9. Mostrar por la consola del navegador el al array final (utilizar console.log).*/
numberArray = new Array(10);
for (var i = 0; i < numberArray.length; i++) {
  numberArray[i] = i;
};
console.log(numberArray);

/* 6. Funciones

a) Crear una función suma que reciba dos valores numéricos y retorne el resultado. Ejecutar la función y guardar el 
   resultado en una variable, mostrando el valor de dicha variable en la consola del navegador.*/
function sumOfNumbers(num1, num2) {
  return num1 + num2;
};
var resultItemA = sumOfNumbers(2, 2);
console.log(resultItemA);

/*b) A la función suma anterior, agregarle una validación para controlar si alguno de los parámetros no es un número, 
     mostrar una alerta aclarando que uno de los parámetros tiene error y retornar el valor NaN como resultado.*/

function sumOfNumbers(numOneItemB, numTwoItemB) {
  if (typeof numOneItemB !== 'number' || typeof numTwoItemB !== 'number') {
    alert('One of the parameters is not a number');
    return Number.NaN;
  } else {
    return numOneItemB + numTwoItemB;
  }
};
var resultItemB = sumOfNumbers(false, 2);
console.log(resultItemB);
var resultTwoItemB = sumOfNumbers(3, 2);
console.log(resultTwoItemB);

//c) Crear una función validate integer que reciba un número como parámetro y devuelva verdadero si es un número entero.
function validateInteger(num) {
  return Number.isInteger(num);
};
var resultItemC = validateInteger(6);
console.log(resultItemC);

/* d) A la función suma del ejercicio 6b) agregarle una llamada que valide que los números sean enteros. En caso que 
haya decimales mostrar un alerta con el error y retorna el número convertido a entero (redondeado).*/
function sumOfNumbers(numOneItemD, numTwoItemD) {
  if (typeof numOneItemD !== 'number'|| typeof numTwoItemD !== 'number') {
    alert('One of the parameters is not a number');
  } else if (Number.isInteger(numOneItemD) && Number.isInteger(numTwoItemD)) {
      return numOneItemD + numTwoItemD;
  } else {
    alert('Error. One or both of the parameters is not an integer');
    return Math.round(numOneItemD + numTwoItemD);
  }
};
var resultItemD = sumOfNumbers(3.51, 6);
console.log(resultItemD);

/* e) Convertir la validación del ejercicio 6b) en una función separada y llamarla dentro de la función suma probando 
que todo siga funcionando igual.*/
function sumOfNumbers(numOneItemE, numTwoItemE) {
  if (validateNumbers(numOneItemE, numTwoItemE)) {
    return numOneItemE + numTwoItemE;
  }
};
function validateNumbers(numOneItemE, numTwoItemE) {
  if (typeof numOneItemE !== 'number' || typeof numTwoItemE !== 'number') {
    alert('One of the parameters is not a number');
    return Number.NaN;
  } else { // If both are numbers, then return true
    return true;
  }
};
var resultItemE = sumOfNumbers(false, 2);
console.log(resultItemE);
var resultTwoItemE = sumOfNumbers(3, 2);
console.log(resultTwoItemE);






