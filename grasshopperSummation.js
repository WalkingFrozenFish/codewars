// Kata 1 - Grasshopper - Summation
var summation = function (num) {
    var count = 0;
    for (var i = 1; i <= num; i++) {
        count += i;
    }
    return count;
}

console.log(summation(1));
console.log(summation(8));