// matrices como objetos
var fruits = [];
fruits.push("apple"); // ['apple']
fruits.push('pear'); // ['apple', 'pear']

fruits.pop();
console.log(fruits); // ['apple']

// creando arreglos
function arrayBuilder(one, two, three) {
    var arr = [];
    arr.push(one);
    arr.push(two);
    arr.push(three);
    console.log(arr);
}

arrayBuilder('apple', 'pear', 'plum'); // ['apple', 'pear', 'plum']

// con retunr
function arrayBuilder1(one, two, three) {
    var arr = [];
    arr.push(one);
    arr.push(two);
    arr.push(three);
    return arr;
}

var simpleArr = arrayBuilder1('apple', 'pear', 'plum');
console.log(simpleArr); // ['apple','pear','plum']