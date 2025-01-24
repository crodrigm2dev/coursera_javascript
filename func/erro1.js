// trow, try, catch
try {
    //console.log(c + d)
    throw new Error();

} catch(err){
    // do smething
    console.log(err)
}

console.log("This line")

// otro ejemplo
//
function addTwoNums(a,b) {
    try {
        if(typeof(a) != 'number') {
            throw new ReferenceError('the first argument is not a number')
        } else if (typeof(b) != 'number') {
            throw new ReferenceError('the second argument is not a number')
        } else {
            console.log(a + b)
        }
    } catch(err) {
        console.log("Error!", err)
    }
}
addTwoNums(5, "5")
console.log("It still works")