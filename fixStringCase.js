// Kata 19 - Fix string case
function solve(s) {
    let arr = s.split("");
    let upper = 0;
    let lower = 0;
    
    for (var i = 0; i < arr.length; i++) {
        let letter = arr[i];
        let lowerLetter = arr[i].toLowerCase();

        if (letter == lowerLetter) {
            lower++;
        } else {
            upper++;
        }

    }
    if (upper > lower) {
        return s.toUpperCase();
        // console.log(s.toUpperCase());
    } else if (upper <= lower) {
        return s.toLowerCase();
        // console.log(s.toLowerCase());
    }

}

solve("code") // "code"
solve("CODe") // "CODE"
solve("COde") // "code"
solve("Code") // "code"
