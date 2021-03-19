// Kata 23 - Predict your age!
function predictAge(age1, age2, age3, age4, age5, age6, age7, age8) {
    let myVar = 0;
    for (let i = 0; i < arguments.length; i++) {
        myVar += arguments[i] * arguments[i]
    }

    // console.log(Math.floor(Math.sqrt(myVar) / 2));
    return Math.floor(Math.sqrt(myVar) / 2);
}

predictAge(65, 60, 75, 55, 60, 63, 64, 45) // 86