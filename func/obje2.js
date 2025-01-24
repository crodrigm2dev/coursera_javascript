// funciones dentro de funciones
var car = {};
car.mileage = 98765;
car.color = "red";
console.log(car);
car.turnTheKey = function() {
    console.log("The engine is running")
}
car.lightsOn = function() {
    console.log("The lights are on.")
}
console.log(car);
car.turnTheKey();
car.lightsOn()

// typeof
var test = typeof("Whats is this?");
console.log(test);
var test = typeof("10");
console.log(test);
var test = typeof("3.14");
console.log(test);
var test = typeof("true");
console.log(test);
var test = typeof([1, 2, 3]);
console.log(test);