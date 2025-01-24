// llamada a funciones
let counter = 3;
function example() {
  console.log(counter);
  counter = counter - 1;
  if (counter === 0) return;
  example();
}
example();

// ambito de variables
var num1 = 10;
function score() {
  console.log(num1); // 10
}

score(); // 10

// varios ejemplos
function getTotal(a, b) {
  return a + b;
}
var num1 = 2;
var num2 = 3;

var total = getTotal(num1, num2);

//
function getDistance(mph, h) {
  return mph * h;
}
var mph = 60;
var h = 2;
var distance = getDistance(mph, h);

console.log(distance);

// POO
var virtualPet = {
  sleepy: true,
  nap: function () {
    this.sleepy = false;
  },
};
console.log(virtualPet.sleepy); // true
virtualPet.nap();
console.log(virtualPet.sleepy); // false

// ultimo ejemplo
function addTwoNums(a, b) {
  console.log(a + b)
}

function randomNum() {
  return Math.floor((Math.random() * 10) + 1);
}
function specificNum() { return 42 };

var useRandom = true;

var getNumber;

if(useRandom) {
  getNumber = randomNum
} else {
  getNumber = specificNum
}

addTwoNums(getNumber(), getNumber())