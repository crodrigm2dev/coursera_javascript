// Covertidor de divisas
var curOne = 100;
var curTwo = 0;
var excRat = 1.2;

function convCur(amount, rate){
    return amount * rate;
}

curTwo = convCur(curOne, excRat);
console.log(curTwo);
