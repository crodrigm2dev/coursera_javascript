//ejemplo OFP

var purshase1 = {
    shoes: 100,
    stateTax: 1.2,
    totalPrice: function(){
        var calculation = purshase1.shoes * purshase1.stateTax;
        //var calculation = this.shoes * this.stateTax;
        console.log("Total price: ", calculation);
    }
}
purshase1.totalPrice();

// ejemplo OPP
var shoes = 100;
var stateTax = 1.2;

function totalPrice(shoes, tax) {
    return shoes * tax;
}

var toPay = totalPrice(shoes, stateTax);

console.log(toPay);