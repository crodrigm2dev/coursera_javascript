// para bucles y objetos
// iterar en objetos

const colors = ['red','orange','yellow']
for (var color of colors) {
    console.log(color);
}

const car2 = {
    speed: 200,
    color: "red"
}

console.log(Object.keys(car2)); // ['speed','color']
console.log(Object.values(car2)); // [300, 'yellow']
console.log(Object.entries(car2)); // [ 'speed', 200 ], [ 'color', 'red' ]


// otro

var clothingItem = {
    price: 50,
    color: 'beige',
    material: 'cotton',
    season: 'autumn'
}

for( key of Object.keys(clothingItem) ) {
    console.log(keys, ":", clothingItem[key])
}

// uno mas
function testBracketsDynamicAccess() {
    var dynamicKey = Math.random() > 0.5 ? "speed" : "color";
  
      var drone = {
        speed: 15,
        color: "orange"
      }
  
      console.log(drone[dynamicKey]);
  }
  testBracketsDynamicAccess();

  // otro mas
  const car = {
    engine: true,
    steering: true,
    speed:"slow"
  }

  const sportsCar = Object.create(car);
  sportsCar.speed = "fast";
  console.log("The sportsCar object: ", sportsCar);

  console.log("----- for-in is unreliable -----");
  for (prop in sportsCar) {
    console.log(prop);
  }

  console.log("--- Iterating over object AND its prototype ---");

  console.log("---- for-of is reliable ---");
  for (prop of Object.keys(sportsCar)) {
    console.log(prop + ": " + sportsCar[prop]);
  }

  console.log("--- Iterating over objects OWN PROPERTIES only ---");

