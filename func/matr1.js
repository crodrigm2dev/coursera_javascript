// matrices
var train1 = ["wheat", "barley", "potato", "salt", "rocks"];
console.log(train1[1]);

var train2 = ["red", "blue", "green", "gray", "black"];
console.log(train2[1]);

// llamado a matrices

var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'pink'];

function listArrayItems(arr) {
    for (var i = 0; i < arr.length; i++) {
        console.log(i+1, arr[i])
    }
}

listArrayItems(colors);
listArrayItems(train2);

function listArrayItems2(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == 'red') {
            console.log(i*100, "tomato!")
        } else {
            console.log(i*100, arr[i])
        }
    }
}
listArrayItems2(colors);

// letter finder
function letterFinder(word, match) {
    for(var i = 0; i < word.length; i++) {
        if(word[i] == match) {
            console.log('Found the', match, 'at', i)
        } else {
            console.log('---No match found at', i)
        }
    }
}

letterFinder("test", "t")
