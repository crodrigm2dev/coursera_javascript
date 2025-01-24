// Objetos
/*
var storeManager = {
    movement: 3,
    socialSkills: 30,
    streetSmarts: 30,
    health: 40
}

var storeEmployee = {
    movement: 3,
    socialSkills: 30,
    streetSmarts: 30,
    health: 40
}

var assistantManager = {
    rangeTilesPerTurn: 3,
    socialSkills: 30,
    streetSmarts: 30,
    health: 40,
    specialAbility: "young and ambitious",
    greeting: "Let's make some money"
}

storeManager.nextAchievemt = "opena new store";
assistantManager.nextAchievemt = "get promoted";
*/
// ejemplo de tabla
var table = {
    legs: 3,
    color: "brown",
    priceUSD: 100,
}

console.log(table);
console.log(table.color);

var house = {
    rooms: 3,
    color: "brown",
    priceUSD: 10000,
}
var house2 = {};
house2.rooms = 4;
house2.color = "pink";
house2.priceUSD = 12345;

console.log(house); // {rooms: 3, color: "brown", priceUSD: 10000}
house.windows = 10;
console.log(house); // {rooms: 3, color: "brown", priceUSD: 10000, windows: 10}

house.windows = 11;
console.log(house); // {rooms: 3, color: "brown", priceUSD: 10000, windows: 11}

// arreglo de llaves
var arrOfKeys = ['speed', 'altitude', 'color'];
var drone = {
    speed: 100,
    altitude: 200,
    color: "red"
}
for (var i = 0; i < arrOfKeys.length; i++) {
    console.log("arreglo de llaves", drone[arrOfKeys[i]])
}