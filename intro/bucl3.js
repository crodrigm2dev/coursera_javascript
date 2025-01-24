// bucles internos
for (i = 0; i < 2; i++){
    for (j = 1; j <= 7; j++){
        console.log("Week " + i + " day " + j)
    }
}

for (var year = 2023; year < 2025; year++){
    console.log(year);
    for (var month = 6; month < 9; month++){
        console.log("-----", month)
    }
}

for (var firstNum = 0; firstNum < 5; firstNum++){
    for (var secondNum = 0; secondNum < 10; secondNum++){
        console.log(firstNum + " times " + secondNum + " equals " + firstNum * secondNum );
    }
}

for (var div1 = 100; div1 > 10; div1 = div1 - 10) {
    for (var div2 = 10; div2 > 4; div2 = div2 - 5) {
        console.log(div1 + " divided by " + div2 + " equals " + div1 / div2);
    }
}