// cadenas - iterables
var letters = ["a", "b", "c"];

for (var i = 0; i < letters.length; i++) {
  console.log(letters[i]);
}

// vegetales
var veggles = ["onion", "parsley", "carrot"];

console.log(veggles.length);

console.log(veggles[1]);
console.log(veggles[2]);

for (var i = 0; i < veggles.length; i++) {
  console.log(veggles[i]);
}

// concatenar
var greet = "Hello";
var user = "Lisa";

console.log(greet + user);
console.log(greet.concat(user));

// ejeercicios
/*
Tareas para completar

Cree un nuevo literal de matriz vacío y asígnelo a la variable ropa.
Agregue 5 de sus prendas favoritas como cadenas usando el método push().
Retire la quinta prenda de la matriz usando el método pop().
Agregue una nueva prenda usando el método push() .
Use console.log para mostrar el tercer elemento de la matriz de ropa en la consola.
Cree un nuevo literal de objeto vacío y asígnelo a la variable favCar.
Usando la notación de puntos, asigne una propiedad de color al objeto favCar y asígnele un valor de cadena con el color de su elección.
Usando la notación de puntos, asigne una propiedad convertible al objeto y favCar y asígnele un valor booleano de su elección.
Utilice la consola para registrar todo el objeto favCar.
*/
var ropa = [];

ropa.push("Camisa");
ropa.push("Camiseta");
ropa.push("Pantalon");
ropa.push("Pantaloneta");
ropa.push("Medias");

console.log(ropa);
ropa.pop();
console.log(ropa);

// otro ejemplo
var clothes = [];
clothes.push('gray t-shirt'); // 1st item of clothing
clothes.push('blue t-shirt'); // 2nd item of clothing
clothes.push('yellow t-shirt'); // 3rd item of clothing
clothes.push('slippers'); // 4th item of clothing
clothes.push('old jeans'); // 5th item of clothing
clothes.pop();
clothes.push('green scarf');
console.log(clothes[2]);

//otro
var favCar = {};
favCar.color = "red";
favCar.convertible = true;
console.log(favCar);


