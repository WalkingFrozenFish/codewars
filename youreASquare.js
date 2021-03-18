// Kata 21 - You're a square
var isSquare = function(n){

    let result = Math.sqrt(n);

    if (Number.isInteger(result)) {
        return true
    } else {
        return false
    }

}

isSquare(-1) // false, "-1: Negative numbers cannot be square numbers"
isSquare( 3) // false, "3 is not a square number"
isSquare( 4) // true, "4 is a square number (2 * 2)"
isSquare(25) // true, "25 is a square number (5 * 5)"
isSquare(26) // false, "26 is not a square number"