// Kata 6 - Sum of two lowest positive integers
function sumTwoSmallestNumbers(numbers) {
    numbers.sort(function(a, b) {
        return a - b;
    });
    return numbers[0] + numbers[1];
}

sumTwoSmallestNumbers([55, 8, 12, 19, 22]);
sumTwoSmallestNumbers([15, 28, 4, 2, 43]);